import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoProjectCard from "@/components/VideoProjectCard";
import ClientScripts from "@/components/ClientScripts";
import Particles from "@/components/Particles";
import Link from "next/link";
import Image from "next/image";

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
  jobTitle: "Full-Stack Developer",
  description:
    "Hamad Rafi is a Full-Stack Developer with 2+ years of experience specialising in React, Next.js, Node.js, Express.js, and building premium web applications.",
  sameAs: [
    "https://github.com/hamadrafi",
    "https://www.linkedin.com/in/hamad-rafi-33b6a6260",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "CSS3",
    "HTML5",
    "Framer Motion",
    "Web Performance",
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
              <a href="/Resume.pdf" className="btn btn-secondary" download>
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
                I’m a Full-Stack Developer with over 2 years of professional experience building modern, high-performance web applications. Skilled in developing responsive, accessible frontends using <b>React</b>, <b>Next.js</b>, and <b>Tailwind CSS</b>, as well as robust, scalable backends powered by <b>Node.js</b>, <b>Express.js</b>, <b>Supabase</b>, and databases like <b>MongoDB</b> and <b>SQL</b>.
              </p>
              <p>
                I love bringing together clean, beautiful designs with powerful, efficient architecture. Passionate about optimization, clean code practices, and the modern JavaScript ecosystem, I continuously seek out new tools and workflows to deliver premium digital solutions that exceed user expectations.
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
                  <i className="fab fa-js" style={{ color: "#3178C6" }}></i>
                  <span>TypeScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain", filter: "invert(1)" }}
                  />
                  <span>Next.js</span>
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
                  <i className="fab fa-node-js" style={{ color: "#339933" }}></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-bolt" style={{ color: "#FFD700" }}></i>
                  <span>Express.js</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-leaf" style={{ color: "#32CD32" }}></i>
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database" style={{ color: "#3ECF8E" }}></i>
                  <span>Supabase</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git-alt" style={{ color: "#F05032" }}></i>
                  <span>Git & GitHub</span>
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
              title="ElectroEnergy"
              description="ElectroEnergy — A dynamic, responsive solar solutions website offering diverse solar panels and an instant calculator for quick energy and cost estimates."
              tech={["WordPress", "Elementor", "PHP"]}
              imgSrc="/imgs/ElectroEnergy.png"
              videoSrc="/imgs/vids/ElectroEnergy.webm"
              liveLink="https://info.techknockwebsites.xyz/"
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
