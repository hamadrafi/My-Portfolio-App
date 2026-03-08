import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoProjectCard from "@/components/VideoProjectCard";
import ClientScripts from "@/components/ClientScripts";
import Particles from "@/components/Particles";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <img src="/imgs/profile.jpg" alt="Hamad Rafi" className="profile-image" />
            <div className="image-border"></div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">Hamad Rafi</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
              Front End Developer
            </p>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
              I craft beautiful and functional web experiences using modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
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
                I’m a Front-End Developer with over 2 years of experience building responsive, user-focused web
                interfaces.
                Skilled in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Tailwind CSS</b>, and
                <b>Bootstrap</b>, I also develop
                modular UIs with <b>React</b> and <b>JSX</b>, using <b>Framer</b>, <b>Motion.dev</b>, and
                <b>Hover.dev</b>
                to deliver smooth, interactive experiences. I’m passionate about writing clean code and
                improving my design workflow.
              </p>
              <p>
                Currently, I’m focused on advancing my skills in modern JavaScript frameworks and backend
                technologies to grow as a complete full-stack developer. I enjoy exploring new tools and
                workflows that improve productivity and creativity. Beyond coding, I love experimenting with
                design trends, refining user interactions, and sipping a good cup of coffee while mapping out
                my next learning milestone.
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
                  <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt" style={{ color: "#1572B6" }}></i>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square" style={{ color: "#F7DF1E" }}></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>
                  <span>Bootstrap</span>
                </div>
                <div className="skill-item">
                  <img style={{ maxWidth: "30px" }} src="/imgs/tailwind.logo.png" alt="Tailwind" />
                  <span>Tailwind</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                  <span>React</span>
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
              title="Fitness Lab"
              description="A sleek, responsive fitness app layout built with React and Tailwind CSS, currently a static front-end prototype showcasing a clean user interface."
              tech={["Tailwind", "React", "Framer"]}
              imgSrc="/imgs/FitnessApp.png"
              videoSrc="/imgs/vids/FitnessApp.webm"
              liveLink="https://fitness-lab.vercel.app/"
            />
            <VideoProjectCard
              title="ElectroEnergy"
              description="ElectroEnergy — A dynamic, responsive solar solutions website offering diverse solar panels and an instant calculator for quick energy and cost estimates."
              tech={["WordPress", "Elementor", "PHP"]}
              imgSrc="/imgs/ElectroEnergy.png"
              videoSrc="/imgs/vids/ElectroEnergy.webm"
              liveLink="https://info.techknockwebsites.xyz/"
            />
            <VideoProjectCard
              title="CurrencyX WebApp"
              description="CurrencyX — A sleek, responsive currency converter web app with real-time conversion logic and smooth UI interactions."
              tech={["Bootstrap 5", "JavaScript", "REST API"]}
              imgSrc="/imgs/CurrencyX-WebApp.png"
              videoSrc="/imgs/vids/Currency.webm"
              liveLink="https://hamadrafi.github.io/CurrencyX-WebApp/"
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
