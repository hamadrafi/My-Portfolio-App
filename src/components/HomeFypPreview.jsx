"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HIGHLIGHTS = [
  "AI style analysis",
  "Virtual try-on",
  "Brand portal",
];

export default function HomeFypPreview() {
  const videoRef = useRef(null);
  const stageRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;

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
      { rootMargin: "200px" }
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const playPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
    if (video.readyState >= 3) setIsPlaying(true);
  };

  const pausePreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="home-preview fyp-preview">
      <div className="container">
        <div className="home-fyp-layout">
          <aside className="home-fyp-aside" data-aos="fade-up">
            <span className="home-preview-eyebrow">Final Year Project</span>
            <h2 className="section-title">VisionFit AI</h2>
            <p className="home-preview-lead">
              AI fashion recommendations and virtual try-on for shoppers and brands —
              the full story, stack, and walkthrough.
            </p>

            <ul className="home-fyp-tags">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="learn-section">
              <Link href="/fyp" className="btn btn-outline">
                Explore the FYP
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </aside>

          <div
            ref={stageRef}
            className="home-fyp-media"
            data-aos="fade-up"
            data-aos-delay="100"
            onMouseEnter={playPreview}
            onMouseLeave={pausePreview}
          >
            <Link
              href="/fyp"
              className="home-fyp-media-frame"
              aria-label="Open VisionFit AI FYP page"
            >
              <Image
                src="/imgs/visionfitai.png"
                alt="VisionFit AI product preview"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={`home-fyp-poster ${isPlaying ? "is-hidden" : ""}`}
              />
              <video
                ref={videoRef}
                className={`home-fyp-video ${isPlaying ? "is-visible" : ""}`}
                muted
                loop
                playsInline
                preload="none"
                poster="/imgs/visionfitai.png"
              >
                <source src="/imgs/vids/visionfitai.webm" type="video/webm" />
              </video>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
