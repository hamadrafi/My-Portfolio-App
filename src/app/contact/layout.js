// Route-segment layout: metadata lives here so the "use client"
// contact page can still be a Client Component.
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Hamad Rafi — Front-End Developer based in Lahore, Pakistan. Available for freelance projects, remote work, and collaborations.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/contact",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
