"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudiesPage() {
    return (
        <>
            <ClientScripts />
            <Navbar />

            <section className="page-header case-studies-hero">
                <div className="container">
                    <div className="header-content" data-aos="fade-up">
                        <span className="case-studies-eyebrow">Deep Dives</span>
                        <h1 className="page-title">Case Studies</h1>
                        <p className="page-subtitle">
                            Client requirements, real constraints, and the extra work
                            that turned a brief into a result worth shipping.
                        </p>
                    </div>
                </div>
            </section>

            <section className="case-studies-list">
                <div className="container">
                    <div className="case-studies-grid">
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyCard
                                key={study.slug}
                                {...study}
                                delay={String((index + 1) * 100)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
