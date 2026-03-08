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
            if (!videoRef.current.src) {
                videoRef.current.src = videoSrc;
            }
            videoRef.current.play().catch(() => { });
            setIsPlaying(true);
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
                className="project-image video-wrapper"
            >
                <img
                    src={imgSrc}
                    alt={title}
                    className="poster-img"
                    loading="lazy"
                />
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
