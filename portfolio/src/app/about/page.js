import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function About() {
  return (
    <>
      <ClientScripts />
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">My journey, skills, and passion for technology</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <div className="about-text">
                <h2>Hello, I'm Hamad Rafi</h2>
                <p>
                  I’m a dedicated <b>Front-End Developer</b> with over <b>2 years</b> of experience,
                  specializing in creating <b>user-friendly</b> interfaces for web applications. I have a strong passion for coding and a knack for <b>problem-solving</b>. I excel with a strong understanding of HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap.
                </p>
                <p>
                  I have worked as a <b>WordPress Developer</b> for over two years, specialising in freelance projects where I built fully functional websites for diverse business needs. My experience includes developing complete <b>e-commerce websites</b> using Elementor and WooCommerce, ensuring seamless design integration with efficient online store functionalities. I also handled on-page and off-page <b>SEO</b> to improve website rankings and visibility. This journey has enhanced my skills in customised theme building, responsive design, SEO optimisation, and delivering user-friendly, high-converting websites tailored to client goals.
                </p>
              </div>
              <div className="hero-image1" style={{ textAlign: "center" }}>
                <div className="hero-image1" data-aos="fade-up" data-aos-delay="100">
                  <img src="/imgs/profile.jpg" alt="Hamad Rafi" className="profile-image" />
                </div>
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Tools and technologies I work with</p>
          </div>
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
              <h3 className="category-title">
                <i className="fas fa-laptop-code"></i>
                Frontend
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>
                  <span>HTML5</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt" style={{ color: "#1572B6" }}></i>
                  <span>CSS3</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "93%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square" style={{ color: "#F7DF1E" }}></i>
                  <span>JavaScript (ES6+)</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img style={{ maxWidth: "30px" }} src="/imgs/tailwind.logo.png" alt="Tailwind" />
                  <span>Tailwind</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                  <span>React</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
              <h3 className="category-title">
                <i className="fas fa-server"></i>
                Backend
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <i className="fab fa-node-js" style={{ color: "#339933" }}></i>
                  <span>Node.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python" style={{
                    background: "linear-gradient(180deg, #3776AB 45%, #FFD43B 55%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}></i>
                  <span>Python</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fas fa-bolt" style={{ color: "#FFD700" }}></i>
                  <span>Express.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fas fa-fire" style={{ 
                    background: "linear-gradient(45deg, #FF4500, #FFA500, #FFFF00)", 
                    backgroundClip: "text", 
                    WebkitTextFillColor: "transparent" 
                  }}></i>
                  <span>FastAPI</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fas fa-gem" style={{ color: "#E0115F" }}></i>
                  <span>GraphQL</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
              <h3 className="category-title">
                <i className="fas fa-database"></i>
                Database & Cloud
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <i className="fas fa-leaf" style={{ color: "#32CD32" }}></i>
                  <span>MongoDB</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database" style={{ color: "#0074D9" }}></i>
                  <span>SQL</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git-alt" style={{ color: "#F05032" }}></i>
                  <span>Git</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-github"></i>
                  <span>Github</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-docker" style={{ color: "#0A2F8F" }}></i>
                  <span>Docker</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">My Professional Journey</p>
          </div>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Frontend Developer Internship</h3>
                <p className="timeline-company">Elevvo Pathways, Egypt</p>
                <p className="timeline-period">June 2025 - August 2025</p>
                <p className="timeline-description">
                  During the internship, I built and deployed multiple web applications, enhancing my expertise in HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind, and Bootstrap.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">WordPress Developer Internship</h3>
                <p className="timeline-company">Thokmandee, Lahore</p>
                <p className="timeline-period">Sep 2025 - Nov 2025</p>
                <p className="timeline-description">
                  Built custom WordPress websites and plugins from scratch without templates while mastering Figma and efficient layer management. Developed blogs and fully functional sites solving real-world problems. Enhanced user experience with clean, responsive designs. Strengthened PHP and WordPress development skills.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">SEO Link Builder Internship</h3>
                <p className="timeline-company">Digital Souls PK</p>
                <p className="timeline-period">3 Months</p>
                <p className="timeline-description">
                  Completed a 3-month SEO internship, handling link-building, keyword research, and outreach. Gained experience with Ahrefs, SEMrush, Google Search Console, and Analytics. Optimized on-page SEO elements and internal links. Analyzed performance and supported content optimization to boost organic reach.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Bachelor of Science in Software Engineering (BSSE)</h3>
                <p className="timeline-company">Lahore Garrison University</p>
                <p className="timeline-period">2022 - 2026</p>
                <p className="timeline-description">
                  Built a solid foundation in software development and engineering principles, with hands-on knowledge of Software Development Life Cycle (SDLC), programming fundamentals, Data Structures & Algorithms (DSA), Software Quality Engineering, Software Construction & Development, Software Re-engineering, and Software Project Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
