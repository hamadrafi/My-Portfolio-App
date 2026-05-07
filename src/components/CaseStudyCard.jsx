"use client";
import Link from "next/link";

export default function CaseStudyCard({ title, description, tags, slug, date, readTime, delay = "0" }) {
    return (
        <Link 
            href={`/case-studies/${slug}`} 
            className="project-card case-study-card" 
            data-aos="fade-up" 
            data-aos-delay={delay} 
            style={{ 
                textDecoration: 'none', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                background: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                borderRadius: '1rem',
                overflow: 'hidden'
            }}
        >
            <div className="project-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                <div className="project-header" style={{ display: 'block', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <h3 className="project-title" style={{ margin: 0, fontSize: '1.4rem', lineHeight: '1.3' }}>{title}</h3>
                    </div>
                    <div className="case-study-meta" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {date} • {readTime}
                    </div>
                </div>
                
                <p className="project-description" style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {description}
                </p>

                <div style={{ marginTop: 'auto' }}>
                    <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
                        {tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="tech-tag" style={{ marginBottom: '0.5rem' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="case-study-action" style={{ 
                        color: 'var(--primary-color)', 
                        fontWeight: '700', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        borderTop: '1px solid var(--border-color)',
                        paddingTop: '1.25rem'
                    }}>
                        Read Full Case Study <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                    </div>
                </div>
            </div>
        </Link>
    );
}
