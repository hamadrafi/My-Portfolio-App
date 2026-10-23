"use client";

import { useEffect } from "react";

export default function ClientScripts() {
    useEffect(() => {
        import("aos").then((module) => {
            const AOS = module.default || module;
            AOS.init({
                duration: 400,
                once: true,
                offset: 50,
                easing: "ease-out",
            });
        });

        let ticking = false;
        const heroGradient = document.querySelector('.hero-gradient');

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    if (heroGradient) {
                        heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
