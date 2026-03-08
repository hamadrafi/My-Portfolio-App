"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseOver = (e) => {
            if (e.target.closest("a, button, .btn, .project-links, .social-btn, .faq-question")) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);

        let animationFrameId;
        const animate = () => {
            // Smoothly move dot to mouse pos
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.8;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.8;

            // Move outline to dot pos with trail
            outlinePos.current.x += (dotPos.current.x - outlinePos.current.x) * 0.15;
            outlinePos.current.y += (dotPos.current.y - outlinePos.current.y) * 0.15;

            if (dotRef.current) {
                dotRef.current.style.left = `${dotPos.current.x}px`;
                dotRef.current.style.top = `${dotPos.current.y}px`;
            }
            if (outlineRef.current) {
                outlineRef.current.style.left = `${outlinePos.current.x}px`;
                outlineRef.current.style.top = `${outlinePos.current.y}px`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`custom-cursor ${isHovered ? "cursor-hover" : ""}`}
            />
            <div
                ref={outlineRef}
                className={`cursor-follower ${isHovered ? "cursor-hover" : ""}`}
            />
        </>
    );
}
