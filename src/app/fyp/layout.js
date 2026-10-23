// Route-segment layout: metadata lives here so the "use client"
// FYP page can still be a Client Component.
export const metadata = {
  title: "VisionFit AI | Final Year Full Stack AI SaaS Project",
  description:
    "VisionFit AI is an AI-powered fashion recommendation & virtual try-on SaaS engineered by Hamad Rafi. Built with React, Node.js, Express, MongoDB, and AI computer vision.",
  alternates: {
    canonical: "https://hamadrafi-1.vercel.app/fyp",
  },
};

export default function FypLayout({ children }) {
  return children;
}
