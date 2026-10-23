import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: "65vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "6rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h1 className="page-title" style={{ fontSize: "5rem", marginBottom: "1rem", lineHeight: 1 }}>
            404
          </h1>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
            Page Not Found
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary">
              <i className="fas fa-home" aria-hidden="true" style={{ marginRight: "0.5rem" }}></i>
              Back to Home
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              <i className="fas fa-briefcase" aria-hidden="true" style={{ marginRight: "0.5rem" }}></i>
              View Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
