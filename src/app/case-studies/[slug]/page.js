"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const study = CASE_STUDIES.find(cs => cs.slug === slug);

    if (!study) {
        return (
            <div style={{ padding: '100px', textAlign: 'center' }}>
                <h1>Case Study Not Found</h1>
                <Link href="/case-studies" className="btn btn-primary">Back to Case Studies</Link>
            </div>
        );
    }

    return (
        <>
            <ClientScripts />
            <Navbar />

            <article className="case-study-detail">
                {/* Hero Header */}
                <section className="page-header" style={{ textAlign: 'left', padding: '10rem 0 4rem' }}>
                    <div className="container">
                        <div data-aos="fade-up">
                            <Link href="/case-studies" className="back-link" style={{ color: 'var(--primary-color)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-arrow-left"></i> Back to Case Studies
                            </Link>
                            <div className="case-study-meta" style={{ margin: '1.5rem 0', display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
                                <span>{study.date}</span>
                                <span>•</span>
                                <span>{study.readTime}</span>
                            </div>
                            <h1 className="page-title" style={{ fontSize: '3.5rem', maxWidth: '900px' }}>{study.title}</h1>
                            <div className="project-tech" style={{ marginTop: '2rem' }}>
                                {study.tags.map((tag, idx) => (
                                    <span key={idx} className="tech-tag" style={{ padding: '0.5rem 1.25rem', borderRadius: '2rem' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="case-study-content" style={{ paddingBottom: '8rem' }}>
                    <div className="container">
                        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '800px' }}>

                            <div className="content-section" data-aos="fade-up">
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>The Problem</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{study.problem}</p>
                            </div>

                            <div className="content-section" data-aos="fade-up">
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Our Approach</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{study.approach}</p>
                            </div>

                            <div className="content-section" data-aos="fade-up">
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Implementation</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{study.implementation}</p>
                            </div>

                            <div className="content-section" data-aos="fade-up">
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Key Challenges</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{study.challenges}</p>
                            </div>

                            <div className="content-section" data-aos="fade-up">
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>The Outcome</h2>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{study.outcome}</p>
                            </div>

                        </div>
                    </div>
                </section>
            </article>

            {/* Bottom CTA */}
            <section className="contact-cta" style={{ background: 'var(--surface-color)', color: 'var(--text-primary)', borderTop: '1px solid var(--border-color)' }}>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title" style={{ color: 'var(--text-primary)' }}>Liked this breakdown?</h2>
                        <p className="cta-description" style={{ color: 'var(--text-secondary)' }}>Let's talk about how I can bring this same technical thinking to your next project.</p>
                        <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
