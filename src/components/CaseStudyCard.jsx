"use client";
import Link from "next/link";

export default function CaseStudyCard({
    title,
    description,
    tags,
    slug,
    date,
    project,
    delay = "0",
}) {
    return (
        <Link
            href={`/case-studies/${slug}`}
            className="case-study-card"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            {project?.imgSrc && (
                <div className="case-study-card-media">
                    <img src={project.imgSrc} alt={project.title || title} loading="lazy" />
                </div>
            )}

            <div className="case-study-card-body">
                <div className="case-study-card-top">
                    <div className="case-study-card-meta">{date}</div>
                    <span className="case-study-card-action">
                        Read <i className="fas fa-arrow-right"></i>
                    </span>
                </div>

                <h3 className="case-study-card-title">{title}</h3>

                <p className="case-study-card-desc">{description}</p>

                <div className="case-study-card-footer">
                    <div className="case-study-card-tags">
                        {tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tech-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
