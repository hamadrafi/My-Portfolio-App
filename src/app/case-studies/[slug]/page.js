// Server Component — enables generateMetadata & generateStaticParams.
// All interactive UI lives in CaseStudyDetailClient (client boundary).
import { CASE_STUDIES } from "@/data/caseStudies";
import CaseStudyDetailClient from "@/components/CaseStudyDetailClient";

const BASE_URL = "https://hamadrafi-1.vercel.app";

// ── Pre-render all slugs at build time ──────────────────────────────────────
export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

// ── Dynamic metadata per case study ────────────────────────────────────────
export async function generateMetadata({ params }) {
  const study = CASE_STUDIES.find((cs) => cs.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "This case study does not exist.",
    };
  }

  return {
    title: study.title,
    description: study.description,
    alternates: {
      canonical: `${BASE_URL}/case-studies/${study.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/case-studies/${study.slug}`,
      title: `${study.title} | Hamad Rafi`,
      description: study.description,
      publishedTime: study.date,
      tags: study.tags,
      images: [
        {
          url: `${BASE_URL}/imgs/preview.jpg`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Hamad Rafi`,
      description: study.description,
      images: [`${BASE_URL}/imgs/preview.jpg`],
    },
  };
}

// ── Page render ─────────────────────────────────────────────────────────────
export default function CaseStudyPage() {
  return <CaseStudyDetailClient />;
}
