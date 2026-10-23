// Route-segment layout: metadata lives here so the "use client"
// contact page can still be a Client Component.
export const metadata = {
  title: "Hire Hamad Rafi | Full Stack Software Engineer & Store Specialist",
  description:
    "Get in touch with Hamad Rafi — Full Stack Software Engineer. Available to build scalable web applications, custom Shopify stores, WordPress/WooCommerce sites, and Webflow projects.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/contact",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
