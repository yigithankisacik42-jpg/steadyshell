"use client";

import { useEffect, useRef, useCallback } from "react";

export function LandingHeroEffects() {
    const initialized = useRef(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const tiltElements = document.querySelectorAll<HTMLElement>(".tilt-element");
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;

        tiltElements.forEach((el) => {
            if (el.dataset.tiltType === "hero-image") {
                el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            } else if (el.dataset.tiltType === "card") {
                el.style.transform = `perspective(1000px) rotateY(${xAxis / 3}deg) rotateX(${yAxis / 3}deg)`;
            } else {
                el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const tiltElements = document.querySelectorAll<HTMLElement>(".tilt-element");
        tiltElements.forEach((el) => {
            el.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }, []);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Scroll Reveal
        function reveal() {
            const reveals = document.querySelectorAll(".reveal");
            reveals.forEach((el) => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", reveal);
        reveal();

        // 3D Tilt
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("scroll", reveal);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return null;
}
