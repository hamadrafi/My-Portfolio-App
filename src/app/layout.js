import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://hamadrafi-1.vercel.app"),

  title: {
    default: "Hamad Rafi — Front-End Developer",
    template: "%s | Hamad Rafi",
  },

  description:
    "Hamad Rafi is a Front-End Developer with 2+ years of experience building responsive, high-performance web interfaces using React, Next.js, Tailwind CSS, and modern JavaScript.",

  keywords: [
    "Hamad Rafi",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Tailwind CSS",
    "UI/UX",
    "Responsive Web Design",
    "Freelance Web Developer",
  ],

  authors: [{ name: "Hamad Rafi", url: "https://hamadrafi-1.vercel.app" }],
  creator: "Hamad Rafi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamadrafi-1.vercel.app",
    siteName: "Hamad Rafi Portfolio",
    title: "Hamad Rafi — Front-End Developer",
    description:
      "Explore the portfolio of Hamad Rafi — a Front-End Developer specialising in React, Next.js, and crafting polished web experiences.",
    images: [
      {
        url: "/imgs/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hamad Rafi — Front-End Developer Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamad Rafi — Front-End Developer",
    description:
      "Explore the portfolio of Hamad Rafi — a Front-End Developer specialising in React, Next.js, and crafting polished web experiences.",
    images: ["/imgs/preview.jpg"],
    creator: "@hamadrafi",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://hamadrafi-1.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        
        {/* Load AOS library properly via next/script */}
        <Script 
          src="https://unpkg.com/aos@2.3.1/dist/aos.js" 
          strategy="lazyOnload"
        />
        
        {/* Inject theme script via standard script tag to avoid hydration issues */}
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
            (function () {
              const savedTheme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', savedTheme);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
