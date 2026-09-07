"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import VideoProjectCard from "@/components/VideoProjectCard";

const LIVE_URL = "https://fyp-visionfitai.vercel.app/";

const FOR_USERS = [
  "AI style analysis for face shape, body type, hair, and skin tone",
  "Personalized outfit, footwear, accessories, and hairstyle suggestions",
  "Virtual try-on with webcam and pose detection",
  "Outfit generation based on what actually suits the user",
];

const FOR_BRANDS = [
  "Brand portal for product catalog and AR settings",
  "Virtual try-on experience brands can plug into their stores",
  "Dashboard insights for better conversion decisions",
  "Try On as a service for fashion storefronts",
];

const STACK = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Google Gemini",
  "MediaPipe",
  "TensorFlow.js",
  "Vercel",
];

export default function FypPage() {
  return (
    <>
      <ClientScripts />
      <Navbar />

      <section className="fyp-hero">
        <div className="container">
          <div className="fyp-hero-grid">
            <div data-aos="fade-up">
              <span className="fyp-eyebrow">Final Year Project</span>
              <h1 className="fyp-brand">VisionFit AI</h1>
              <p className="fyp-hero-line">
                AI fashion recommendations and virtual try-on for users and brands.
              </p>
              <p className="fyp-hero-support">
                An AI fashion SaaS that helps shoppers preview outfits before buying, and gives
                brands a Try On experience they can plug into their stores.
              </p>
              <div className="fyp-hero-actions">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>View Live</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#walkthrough" className="btn btn-secondary">
                  <span>Watch walkthrough</span>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>

            <div className="fyp-project-wrap" data-aos="fade-up" data-aos-delay="120">
              <VideoProjectCard
                title="VisionFit AI"
                description="Style analysis, personalized recommendations, virtual try-on, and a brand portal for Try On integration."
                tech={["Next.js", "MongoDB", "MediaPipe"]}
                imgSrc="/imgs/visionfitai.png"
                videoSrc="/imgs/vids/visionfitai.webm"
                liveLink={LIVE_URL}
                loadEager
                isFyp
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fyp-section" id="overview">
        <div className="container">
          <div className="fyp-section-head" data-aos="fade-up">
            <span className="eyebrow">Overview</span>
            <h2>From a shopping gap to a working product.</h2>
          </div>

          <div className="fyp-overview-split" data-aos="fade-up">
            <div className="fyp-overview-col">
              <span className="fyp-overview-label">The problem</span>
              <h3>Online fashion is still a guess.</h3>
              <p>
                Users cannot visualize outfits properly. That leads to bad purchases, high returns,
                and wasted production. Brands also lack try-before-you-buy tools and real user
                insights.
              </p>
            </div>
            <div className="fyp-overview-col">
              <span className="fyp-overview-label">What we built</span>
              <h3>Virtual Try-On as a Service.</h3>
              <p>
                VisionFit AI is an AI fashion SaaS with style analysis, recommendations, and
                real-time try-on. Brands can integrate it into their stores using MediaPipe,
                TensorFlow.js, and Google Gemini.
              </p>
            </div>
          </div>

          <div className="fyp-stack-block" data-aos="fade-up">
            <h3 className="fyp-stack-title">Tech stack</h3>
            <div className="fyp-stack">
              {STACK.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="fyp-sdg-block" data-aos="fade-up">
            <ul className="fyp-sdg-list">
              <li>SDG 12: Responsible Consumption and Production</li>
              <li>SDG 9: Industry, Innovation and Infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fyp-section alt" id="audiences">
        <div className="container">
          <div className="fyp-section-head" data-aos="fade-up">
            <span className="eyebrow">Who it serves</span>
            <h2>Built for shoppers and for brands.</h2>
          </div>

          <div className="fyp-audience-grid">
            <div className="fyp-audience" data-aos="fade-up">
              <div className="fyp-audience-top">
                <span className="fyp-audience-kicker">For users</span>
                <h3>Find what suits you.</h3>
                <p>
                  VisionFit AI helps users discover looks through AI style analysis, personalized
                  recommendations, outfit generation, and virtual try-on.
                </p>
              </div>
              <ul className="fyp-audience-list">
                {FOR_USERS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fyp-audience" data-aos="fade-up" data-aos-delay="100">
              <div className="fyp-audience-top">
                <span className="fyp-audience-kicker">For brands</span>
                <h3>Ship Try On into the store.</h3>
                <p>
                  Brands get tools to showcase products, manage catalogs and AR settings, and add a
                  Try On experience to their online stores.
                </p>
              </div>
              <ul className="fyp-audience-list">
                {FOR_BRANDS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fyp-section" id="walkthrough">
        <div className="container">
          <div className="fyp-section-head" data-aos="fade-up">
            <span className="eyebrow">Walkthrough</span>
            <h2>From analysis to recommendations to try-on.</h2>
          </div>

          <div className="fyp-video-frame" data-aos="fade-up">
            <video
              className="fyp-video"
              controls
              playsInline
              preload="metadata"
              poster="/imgs/visionfitai.png"
            >
              <source src="/imgs/vids/visionfitai.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Try VisionFit AI live</h2>
            <p className="cta-description">
              Open the app or reach out if you want to talk through the build.
            </p>
            <div className="contact-cta-action">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Open Live App</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
