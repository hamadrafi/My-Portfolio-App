"use client";

import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 75 : 150;

    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
    }));

    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      id="particles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "var(--star-color, white)",
            borderRadius: "50%",
            opacity: 0,
            boxShadow: `0 0 ${particle.size * 2}px var(--star-glow, rgba(255, 255, 255, 0.3))`,
            animation: `floatUp ${particle.duration}s linear infinite`,
            left: `${particle.left}%`,
            top: "100%",
            animationDelay: `${particle.delay}s`,
            willChange: "transform",
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
