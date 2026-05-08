// Route-segment layout for /case-studies index page.
// The index page is "use client", so metadata lives here.
export const metadata = {
  title: "Case Studies",
  description:
    "Deep-dive technical case studies by Hamad Rafi — covering Shopify performance optimisation, Next.js architecture, and UI/UX redesigns with real-world outcomes.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/case-studies",
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
