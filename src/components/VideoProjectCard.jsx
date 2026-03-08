"use client";

import { useRef, useState } from "react";

export default function VideoProjectCard({
    title,
    description,
    tech,
    imgSrc,
    videoSrc,
    liveLink,
    githubLink,
    delay = "200",
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleVideoPlaying = () => {
        setIsPlaying(true);
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            // Optional: reset to start
            // videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    return (
        <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
            <div
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
                    preload="metadata"
                    onPlaying={handleVideoPlaying}
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
