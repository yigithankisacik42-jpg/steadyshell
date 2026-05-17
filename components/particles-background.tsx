"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        particlesJS: (id: string, config: unknown) => void;
    }
}

export function ParticlesBackground() {
    useEffect(() => {
        // Dynamically load particles.js
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        script.onload = () => {
            if (window.particlesJS) {
                window.particlesJS("particles-js", {
                    particles: {
                        number: { value: 40, density: { enable: true, value_area: 800 } },
                        color: { value: "#7c3aed" },
                        shape: { type: "circle" },
                        opacity: { value: 0.15, random: false },
                        size: { value: 3, random: true },
                        line_linked: { enable: true, distance: 150, color: "#7c3aed", opacity: 0.08, width: 1 },
                        move: { enable: true, speed: 1.2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "push" },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 140, line_linked: { opacity: 0.25 } },
                            push: { particles_nb: 4 },
                        },
                    },
                    retina_detect: true,
                });
            }
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup
            const canvas = document.querySelector("#particles-js canvas");
            if (canvas) canvas.remove();
        };
    }, []);

    return (
        <div
            id="particles-js"
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
