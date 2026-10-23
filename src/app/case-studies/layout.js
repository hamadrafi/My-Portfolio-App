// Route-segment layout for /case-studies index page.
// The index page is "use client", so metadata lives here.
export const metadata = {
  title: "Case Studies | Full Stack Architecture & E-Commerce Store Optimization",
  description:
    "In-depth technical case studies by Hamad Rafi — covering Shopify store performance, Next.js full-stack architecture, and custom e-commerce engineering.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/case-studies",
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
