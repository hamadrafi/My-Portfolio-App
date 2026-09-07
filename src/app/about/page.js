import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import StatCounter from "@/components/StatCounter";

export const metadata = {
  title: "About Me",
  description:
    "Learn about Hamad Rafi — Associate Software Engineer at Integriti, building full-stack apps with React, Next.js, Node.js, Shopify, WordPress, and Webflow. Based in Lahore, Pakistan.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/about",
  },
};

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
                <h2>Hello, I&apos;m Hamad Rafi</h2>
                <p>
                  I&apos;m an <b>Associate Software Engineer</b> at <b>Integriti</b> in Lahore,
                  building and maintaining full-stack web applications with{" "}
                  <b>React</b>, <b>Next.js</b>, <b>Nest.js</b>, and <b>Node.js</b> — covering
                  frontend UI, backend logic, and third-party integrations. I also develop
                  e-commerce and business websites on <b>Shopify</b>, <b>WordPress</b>, and{" "}
                  <b>Webflow</b>, with a focus on responsive design, performance, and
                  deployment, plus custom Shopify apps that extend store functionality and
                  automate workflows.
                </p>
                <p>
                  Across my work I use <b>JavaScript (ES6+)</b>, <b>PHP</b>, <b>Python</b>, and{" "}
                  <b>C++</b>,                   with UI libraries like <b>Tailwind CSS</b>, <b>Bootstrap</b>, and{" "}
                  <b>React Bits</b>, and data layers including <b>PostgreSQL</b>,{" "}
                  <b>MongoDB</b>, and <b>Supabase</b>. I care about clean architecture and
                  shippable products that teams can rely on.
                </p>
              </div>
              <div className="hero-image1" style={{ textAlign: "center" }}>
                <div className="hero-image1" data-aos="fade-up" data-aos-delay="100">
                  <img src="/imgs/profile-picture.png" alt="Hamad Rafi" className="profile-image" />
                </div>
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">
                      <StatCounter end="2" suffix="+" />
                    </div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <StatCounter end="30" suffix="+" />
                    </div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <StatCounter end="10" suffix="+" />
                    </div>
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
                  <i className="fab fa-js" style={{ color: "#F7DF1E" }}></i>
                  <span>JavaScript</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                  <span>React.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img className="skill-logo-dark" src="/imgs/skills/nextdotjs.svg" alt="Next.js" />
                  <span>Next.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/tailwind.logo.png" alt="Tailwind CSS" />
                  <span>Tailwind CSS</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>
                  <span>Bootstrap</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/reactbits.svg" alt="React Bits" />
                  <span>React Bits</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

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
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/nestjs.svg" alt="Nest.js" />
                  <span>Nest.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/postgresql.svg" alt="PostgreSQL" />
                  <span>PostgreSQL</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/mongodb.svg" alt="MongoDB" />
                  <span>MongoDB</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/supabase.svg" alt="Supabase" />
                  <span>Supabase</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-php" style={{ color: "#777BB4" }}></i>
                  <span>PHP</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python" style={{ color: "#3776AB" }}></i>
                  <span>Python</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/cplusplus.svg" alt="C++" />
                  <span>C++</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
              <h3 className="category-title">
                <i className="fas fa-tools"></i>
                Platforms
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <i className="fab fa-shopify" style={{ color: "#96BF48" }}></i>
                  <span>Shopify</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-wordpress" style={{ color: "#21759B" }}></i>
                  <span>WordPress</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/webflow.svg" alt="Webflow" />
                  <span>Webflow</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img className="skill-logo-dark" src="/imgs/skills/vercel.svg" alt="Vercel" />
                  <span>Vercel</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src="/imgs/skills/render.svg" alt="Render" />
                  <span>Render</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <img className="skill-logo-dark" src="/imgs/skills/railway.svg" alt="Railway" />
                  <span>Railway</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <i className="fab fa-figma" style={{ color: "#F24E1E" }}></i>
                  <span>Figma</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{ width: "82%" }}></div>
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
                <h3 className="timeline-title">Associate Software Engineer</h3>
                <p className="timeline-company">Integriti, Lahore, Pakistan</p>
                <p className="timeline-period">Jan 2026 – Present</p>
                <p className="timeline-description">
                  Building and maintaining full-stack web applications with Next.js, React,
                  Nest.js, and Node.js — including frontend UI, backend logic, and third-party
                  integrations. Developing custom Shopify apps and integrations to extend store
                  functionality and automate e-commerce workflows. Shipping e-commerce and
                  business websites on Shopify, WordPress, and Webflow with a focus on
                  responsive design, performance optimization, and deployment.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="150">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">WordPress Developer Internship</h3>
                <p className="timeline-company">Thokmandee, Lahore</p>
                <p className="timeline-period">Sep 2025 - Dec 2025</p>
                <p className="timeline-description">
                  Built custom WordPress websites and plugins from scratch without templates while mastering Figma and efficient layer management. Developed blogs and fully functional sites solving real-world problems. Enhanced user experience with clean, responsive designs. Strengthened PHP and WordPress development skills.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
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

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="250">
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

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
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
