"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
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
        const speed = 0.15;

        const animateFollower = () => {
            setFollowerPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * speed,
                y: prev.y + (position.y - prev.y) * speed,
            }));
            animationFrameId = requestAnimationFrame(animateFollower);
        };

        animateFollower();

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [position.x, position.y]);

    if (isMobile) return null;

    return (
        <>
            <div
                className={`custom-cursor ${isHovered ? "cursor-hover" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`cursor-follower ${isHovered ? "cursor-hover" : ""}`}
                style={{
                    left: `${followerPosition.x}px`,
                    top: `${followerPosition.y}px`,
                }}
            />
        </>
    );
}
