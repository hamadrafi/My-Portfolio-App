// Server Component — enables generateMetadata & generateStaticParams.
// All interactive UI lives in CaseStudyDetailClient (client boundary).
import { CASE_STUDIES } from "@/data/caseStudies";
import CaseStudyDetailClient from "@/components/CaseStudyDetailClient";

const BASE_URL = "https://hamadrafi-1.vercel.app";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "This case study does not exist.",
    };
  }

  const ogImage = study.project?.imgSrc
    ? `${BASE_URL}${study.project.imgSrc}`
    : `${BASE_URL}/imgs/preview.jpg`;

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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: study.project?.title || study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Hamad Rafi`,
      description: study.description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  return <CaseStudyDetailClient slug={slug} />;
}
