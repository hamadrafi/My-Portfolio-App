// Lightweight mapping from project title to case study slug to avoid bundling full case studies text into client components
export const PROJECT_TO_CASE_STUDY_SLUG = {
    moonfab: "moonfab-b2b-b2c-bundles",
    callavan: "callavan-webflow-supabase-sync",
    "kopilot.id": "optimizing-shopify-performance",
};

export function getCaseStudySlugByProjectTitle(title) {
    if (!title) return null;
    return PROJECT_TO_CASE_STUDY_SLUG[title.trim().toLowerCase()] || null;
}
