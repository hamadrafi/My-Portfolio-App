import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ClientScripts from "@/components/ClientScripts";
import Link from "next/link";

export const metadata = {
  title: "Projects | Full Stack Web Apps, Shopify, WordPress & Webflow Stores",
  description:
    "Explore 30+ production projects engineered by Hamad Rafi — including full-stack Next.js and React web apps, custom Shopify stores, WordPress/WooCommerce builds, and Webflow sites.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ClientScripts />
      <Navbar />

      <main id="main-content">
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <div className="header-content">
              <h1 className="page-title">My Projects</h1>
              <p className="page-subtitle">A showcase of my recent work and personal projects</p>
            </div>
          </div>
        </section>

        <ProjectsShowcase />

        {/* Call to Action */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">Interested in working together?</h2>
              <p className="cta-description">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="contact-cta-action">
                <Link href="/contact" className="btn btn-primary">
                  Let&apos;s Talk
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
