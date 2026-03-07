import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { verifyPassword } from "@/lib/security"
import { db } from "@/lib/db"
import { checkLoginRateLimit } from "@/lib/rate-limit"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "select_account",
                },
            },
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                clientIp: { label: "Client IP", type: "text" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const email = credentials.email as string;
                const password = credentials.password as string;
                const clientIp = (credentials.clientIp as string) || "unknown";

                // 🔒 Server-side rate limiting
                const rateLimitResult = checkLoginRateLimit(clientIp);
                if (!rateLimitResult.success) {
                    console.warn(`[Auth] 🚫 Rate limit exceeded for IP: ${clientIp}`);
                    throw new Error(`Çok fazla deneme! ${rateLimitResult.resetIn} saniye bekleyin.`);
                }

                try {
                    console.log("[Auth] Attempting login for:", email);

                    const user = await db.user.findUnique({
                        where: { email: email.toLowerCase() }
                    });

                    if (!user) {
                        console.log("[Auth] ❌ User not found in database");
                        return null;
                    }

                    if (!user.password) {
                        console.log("[Auth] ❌ User exists but has no password (Provider: Google?)");
                        return null;
                    }

                    console.log(`[Auth] User found: ${user.email}, HashedPwd Length: ${user.password.length}`);

                    const isValid = await verifyPassword(password, user.password);

                    if (isValid) {
                        console.log("[Auth] ✅ Password verification SUCCESS");
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            image: user.avatar,
                        };
                    } else {
                        console.log("[Auth] ❌ Password verification FAILED (NextAuth)");
                        // Debugging tip: Check if db hash starts with $2a$ or $2b$
                        console.log(`[Auth] Stored Hash Prefix: ${user.password.substring(0, 7)}...`);
                        return null;
                    }

                } catch (error) {
                    console.error("[Auth] 🔥 System Error:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/learn')
            const isOnAuth = nextUrl.pathname === '/login' || nextUrl.pathname === '/register'

            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isOnAuth && isLoggedIn) {
                return Response.redirect(new URL('/learn', nextUrl))
            }
            return true
        },
        async jwt({ token, user }) {
            // user is only passed on initial sign-in
            if (user) {
                token.sub = user.id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.name) session.user.name = token.name;
            if (token.email) session.user.email = token.email;
            if (token.picture) session.user.image = token.picture;
            return session;
        }
    },
    pages: {
        signIn: '/login',
    }
})
