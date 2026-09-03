"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import VideoProjectCard from "@/components/VideoProjectCard";
import { CASE_STUDIES } from "@/data/caseStudies";

const SECTIONS = [
    {
        key: "clientRequirement",
        num: "01",
        label: "Client Requirement",
        title: "What the client needed",
    },
    {
        key: "whatWasPossible",
        num: "02",
        label: "What Was Possible",
        title: "Working within the constraints",
    },
    {
        key: "goingTheExtraMile",
        num: "03",
        label: "Going The Extra Mile",
        title: "What we did beyond the brief",
    },
    {
        key: "challenges",
        num: "04",
        label: "Challenges",
        title: "Friction along the way",
    },
    {
        key: "outcome",
        num: "05",
        label: "The Outcome",
        title: "What changed",
    },
];

/** Renders plain text with **highlighted** phrases as emphasized marks. */
function HighlightedText({ text }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return (
        <p>
            {parts.map((part, index) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <span key={index} className="cs-hl">
                            {part.slice(2, -2)}
                        </span>
                    );
                }
                return <span key={index}>{part}</span>;
            })}
        </p>
    );
}

export default function CaseStudyDetailClient({ slug: slugProp }) {
    const params = useParams();
    const slug = slugProp || params?.slug;
    const study = CASE_STUDIES.find((cs) => cs.slug === slug);

    if (!study) {
        return (
            <>
                <Navbar />
                <div className="cs-not-found">
                    <h1>Case Study Not Found</h1>
                    <Link href="/case-studies" className="btn btn-primary">
                        Back to Case Studies
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <ClientScripts />
            <Navbar />

            <article className="case-study-detail">
                <header className="cs-detail-hero">
                    <div className="container">
                        <div data-aos="fade-up">
                            <Link href="/case-studies" className="cs-back-link">
                                <i className="fas fa-arrow-left"></i> Back to Case Studies
                            </Link>

                            <div className="cs-detail-meta">
                                <span>{study.date}</span>
                            </div>

                            <h1 className="page-title cs-detail-title">{study.title}</h1>

                            {study.overview && (
                                <p className="cs-detail-overview">{study.overview}</p>
                            )}

                            <div className="cs-detail-tags">
                                {study.tags.map((tag) => (
                                    <span key={tag} className="tech-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <section className="cs-detail-body">
                    <div className="container">
                        <div className="cs-layout">
                            <div className="cs-story">
                                {SECTIONS.map((section, index) => {
                                    const text = study[section.key];
                                    if (!text) return null;

                                    return (
                                        <div
                                            key={section.key}
                                            className="cs-section"
                                            data-aos="fade-up"
                                            data-aos-delay={String(index * 60)}
                                        >
                                            <div className="cs-section-label">
                                                <span className="cs-num">{section.num}</span>
                                                {section.label}
                                            </div>
                                            <h2>{section.title}</h2>
                                            <HighlightedText text={text} />
                                        </div>
                                    );
                                })}

                                {study.results?.length > 0 && (
                                    <div
                                        className="cs-results"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        {study.results.map((result) => (
                                            <div key={result.label} className="cs-result">
                                                <span className="cs-result-value">{result.value}</span>
                                                <span className="cs-result-label">{result.label}</span>
                                                {result.note && (
                                                    <span className="cs-result-note">{result.note}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {study.project && (
                                <aside className="cs-project-panel">
                                    <div className="cs-project-sticky">
                                        <div className="cs-project-sticky-label">
                                            Featured Project
                                        </div>
                                        <VideoProjectCard
                                            {...study.project}
                                            loadEager
                                            showCaseStudyLink={false}
                                            showHeaderLinks={false}
                                        />
                                        {study.project.liveLink && (
                                            <div className="cs-project-cta">
                                                <a
                                                    href={study.project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                >
                                                    <span>View Live Project</span>
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </aside>
                            )}
                        </div>
                    </div>
                </section>
            </article>

            <section className="contact-cta">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Liked this breakdown?</h2>
                        <p className="cta-description">
                            Let&apos;s talk about how I can bring this same thinking to
                            your next project.
                        </p>
                        <div className="contact-cta-action">
                            <Link href="/contact" className="btn btn-primary">
                                <span>Start a Conversation</span>
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
