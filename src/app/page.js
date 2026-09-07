import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoProjectCard from "@/components/VideoProjectCard";
import HomeFypPreview from "@/components/HomeFypPreview";
import ClientScripts from "@/components/ClientScripts";
import Particles from "@/components/Particles";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/caseStudies";

// ── Page-level metadata (inherits template from layout: "%s | Hamad Rafi") ──
export const metadata = {
  title: "Home",
  description:
    "Welcome to the portfolio of Hamad Rafi — a Full-Stack Developer building fast, scalable, and beautiful web experiences from frontend to backend.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app",
  },
};

// ── JSON-LD: Person schema for Google Knowledge Panel & rich results ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamad Rafi",
  url: "https://hamadrafi-1.vercel.app",
  image: "https://hamadrafi-1.vercel.app/imgs/profile-picture.png",
  jobTitle: "Associate Software Engineer",
  description:
    "Hamad Rafi is an Associate Software Engineer at Integriti specialising in React, Next.js, Node.js, Shopify, WordPress, and Webflow.",
  sameAs: [
    "https://github.com/hamadrafi",
    "https://www.linkedin.com/in/hamad-rafi-33b6a6260",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Shopify",
    "WordPress",
    "Webflow",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
  ],
};

export default function Page() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientScripts />
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <Particles />
        </div>
        <div className="hero-content">
          <div className="hero-image" data-aos="fade-up" data-aos-delay="100">
            <Image
                src="/imgs/profile-picture.png"
                alt="Hamad Rafi — Front-End Developer"
                width={260}
                height={260}
                priority
                className="profile-image"
              />
            <div className="image-border"></div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">Hamad Rafi</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
              Full Stack Developer
            </p>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
              I craft scalable, high-performance web applications from pixel-perfect frontends to robust backends. Passionate about clean code, optimal user experience, and innovative solutions.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="100">
              <Link href="/projects" className="btn btn-primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <a href="/Hamad%20-%20Software%20Engineer.pdf" className="btn btn-secondary" download>
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>
                I&apos;m an <b>Associate Software Engineer</b> at <b>Integriti</b>, building
                full-stack web apps with <b>React</b>, <b>Next.js</b>, and <b>Node.js</b>, plus
                e-commerce and business sites on <b>Shopify</b>, <b>WordPress</b>, and{" "}
                <b>Webflow</b>. I work across frontend UI, backend logic, third-party
                integrations, and custom Shopify apps that automate store workflows.
              </p>
              <p>
                My toolkit spans <b>JavaScript</b>, <b>PHP</b>, and <b>Python</b>, with{" "}
                <b>Tailwind CSS</b> / <b>Bootstrap</b> on the UI side and{" "}
                <b>PostgreSQL</b>, <b>MongoDB</b>, and <b>Supabase</b> for data — always aiming
                for responsive design, performance, and clean deployments.
              </p>
              <p>
                Over <b>30+ projects delivered</b>, I&apos;ve shipped storefronts, CMS builds,
                and full-stack products end to end — from polished interfaces to reliable
                backends and integrations that hold up in production.
              </p>
              <div className="learn-section">
                <Link href="/about" className="btn btn-outline">
                  Learn More About Me
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="skills-preview" data-aos="fade-left">
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-js-square" style={{ color: "#F7DF1E" }}></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/skills/nextdotjs.svg"
                    alt="Next.js logo"
                    width={30}
                    height={30}
                    className="skill-logo-dark"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-node-js" style={{ color: "#339933" }}></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/tailwind.logo.png"
                    alt="Tailwind CSS logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span>Tailwind</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-shopify" style={{ color: "#96BF48" }}></i>
                  <span>Shopify</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-wordpress" style={{ color: "#21759B" }}></i>
                  <span>WordPress</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/skills/webflow.svg"
                    alt="Webflow logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span>Webflow</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/skills/postgresql.svg"
                    alt="PostgreSQL logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/skills/mongodb.svg"
                    alt="MongoDB logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/imgs/skills/supabase.svg"
                    alt="Supabase logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                  <span>Supabase</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>

          <div className="projects-grid">
            <VideoProjectCard
              title="Integriti-MS"
              description="A CMS using React, TypeScript, and Next.js to manage clients, developers, deadlines, tasks, and generate complete team performance reports."
              tech={["React", "Typescript", "Next.js"]}
              imgSrc="/imgs/IntegritiMs.jpg"
              videoSrc="/imgs/vids/Integriti-MS.webm"
              liveLink="https://integriti-ms-2j3k.vercel.app/"
            />
            <VideoProjectCard
              title="Callavan"
              description="Real-time driver tracking app using Webflow (frontend) and Supabase (backend) to connect users with nearby drivers."
              tech={["Webflow", "CMS", "Supabase"]}
              imgSrc="/imgs/callavan.jpg"
              videoSrc="/imgs/vids/callavan.webm"
              liveLink="https://www.callavan.live/"
            />
            <VideoProjectCard
              title="Kopilot.ID"
              description="An NFC-powered emergency medical ID Shopify storefront for quick access to vital medical and emergency contact information."
              tech={["Shopify", "Liquid", "Apps"]}
              imgSrc="/imgs/kopilot.png"
              videoSrc="/imgs/vids/kopilot.webm"
              liveLink="https://www.kopilot.id/"
            />
          </div>

          <div className="projects-cta" data-aos="fade-up" data-aos-delay="200">
            <Link href="/projects" className="btn btn-outline">
              View All Projects
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* FYP Preview — media stage linking to /fyp */}
      <HomeFypPreview />

      {/* Case Studies Preview — editorial story index */}
      <section className="home-preview case-studies-preview">
        <div className="container">
          <div className="home-cs-layout">
            <aside className="home-cs-aside">
              <span className="home-preview-eyebrow">Process</span>
              <h2 className="section-title">Case Studies</h2>
              <p className="home-preview-lead">
                Not just what shipped — the constraint, the conflict, and the fix that made it hold.
              </p>
              <div className="learn-section">
                <Link href="/case-studies" className="btn btn-outline">
                  View Case Studies
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </aside>

            <div className="home-cs-index" data-aos="fade-up">
              {CASE_STUDIES.slice(0, 3).map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="home-cs-row"
                >
                  <span className="home-cs-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="home-cs-main">
                    <h3>{study.title}</h3>
                    <p>{study.description}</p>
                    <ul className="home-cs-tags">
                      {study.tags.slice(0, 3).map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="home-cs-go" aria-hidden="true">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to work together?</h2>
            <p className="cta-description">
              I'm always open to discussing new opportunities and projects.
            </p>
            <div className="contact-cta-action">
              <Link href="/contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
