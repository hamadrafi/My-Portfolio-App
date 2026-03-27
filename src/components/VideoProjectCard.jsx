"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoProjectCard({
    title,
    description,
    tech,
    imgSrc,
    videoSrc,
    liveLink,
    githubLink,
    delay = "0",
    loadEager = false,
}) {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Preload video when it scrolls into view (or immediately if loadEager)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (loadEager) {
            video.preload = "auto";
            video.load();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.preload = "auto";
                        video.load();
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "200px" } // start loading 200px before entering viewport
        );

        if (wrapperRef.current) observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, [loadEager]);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
            // Show video immediately if enough data is buffered
            if (videoRef.current.readyState >= 3) {
                setIsPlaying(true);
            }
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
            <div
                ref={wrapperRef}
                className="project-image video-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="project-video"
                    loop
                    muted
                    playsInline
                    preload="none"
                    onCanPlay={() => { if (isPlaying) setIsPlaying(true); }}
                    onPlaying={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    style={{
                        opacity: isPlaying ? 1 : 0,
                        pointerEvents: "none",
                        willChange: "opacity"
                    }}
                />
                <img
                    src={imgSrc}
                    alt={title}
                    className="poster-img"
                    loading="lazy"
                    style={{
                        opacity: isPlaying ? 0 : 1,
                        willChange: "opacity"
                    }}
                />
                {!isPlaying && (
                    <div className="play-icon-overlay" style={{ pointerEvents: "none" }}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                )}
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    <div className="links">
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-links">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        )}
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-links">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                    </div>
                </div>

                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {tech.map((t, idx) => (
                        <span key={idx} className="tech-tag">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
