import { CASE_STUDIES } from "@/data/caseStudies";

const BASE_URL = "https://hamadrafi-1.vercel.app";

export default function sitemap() {
  // Static routes
  const staticRoutes = [
    { url: `${BASE_URL}`, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/projects`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
  ].map((route) => ({
    ...route,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic case-study routes
  const caseStudyRoutes = CASE_STUDIES.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
