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

            <section className="page-header">
                <div className="container">
                    <div className="header-content" data-aos="fade-up">
                        <h1 className="page-title">Case Studies</h1>
                        <p className="page-subtitle">Project breakdowns, engineering insights, and technical decision making.</p>
                    </div>
                </div>
            </section>

            <section className="case-studies-list" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="projects-grid">
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
