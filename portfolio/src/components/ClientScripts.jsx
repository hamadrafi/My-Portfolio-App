"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function ClientScripts() {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: true,
            offset: 50,
            easing: "ease-out",
        });

        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroGradient = document.querySelector('.hero-gradient');
            if (heroGradient) {
                heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
