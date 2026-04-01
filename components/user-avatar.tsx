"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string | null;
  name?: string;
  className?: string;
  size?: number;
}

/**
 * Robust UserAvatar component that handles both URL-based profile pictures 
 * and single-character fallbacks (initials) with high aesthetics.
 */
export const UserAvatar = ({ 
  src, 
  name = "User", 
  className, 
  size = 40 
}: UserAvatarProps) => {
  // Check if src is a valid URL or image path
  const isImageUrl = src && (src.startsWith("http") || src.startsWith("/"));
  
  // Get fallback initial
  const initial = name.charAt(0).toUpperCase() || "U";

  // Use generic colors for fallbacks
  const fallbackStyles = [
    "bg-gradient-to-br from-indigo-500 to-violet-600",
    "bg-gradient-to-br from-emerald-500 to-teal-600",
    "bg-gradient-to-br from-rose-500 to-pink-600",
    "bg-gradient-to-br from-amber-500 to-orange-600",
    "bg-gradient-to-br from-sky-500 to-blue-600",
  ];
  
  // Deterministic color based on name length or content
  const colorIndex = name.length % fallbackStyles.length;
  const selectedFallback = fallbackStyles[colorIndex];

  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105",
        !isImageUrl && selectedFallback,
        className
      )}
      style={{ width: size, height: size }}
    >
      {isImageUrl ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover"
          draggable={false}
        />
      ) : (
        <span className="font-bold text-white select-none" style={{ fontSize: size * 0.4 }}>
          {initial}
        </span>
      )}
      
      {/* Subtle overlay for glassmorphism effect on image */}
      {isImageUrl && (
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />
      )}
    </div>
  );
};
