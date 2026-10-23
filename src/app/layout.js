import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import Script from "next/script";

import JsonLd from "@/components/JsonLd";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"));

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://hamadrafi-1.vercel.app"),

  title: {
    default: "Hamad Rafi — Full Stack Software Engineer | Shopify, WordPress & Webflow Specialist",
    template: "%s | Hamad Rafi — Software Engineer",
  },

  description:
    "Hamad Rafi is an elite Full-Stack Software Engineer specializing in building scalable web applications with React, Next.js, and Node.js, and engineering high-converting e-commerce stores on Shopify, WordPress, and Webflow.",

  keywords: [
    "Hamad Rafi",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Shopify Developer",
    "Shopify Store Developer",
    "WordPress Developer",
    "WooCommerce Developer",
    "Webflow Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "FastAPI Python Developer",
    "E-Commerce Web Developer",
    "Custom Shopify Themes",
    "Webflow CMS Specialist",
    "Software Engineer Lahore",
    "Hire Full Stack Developer",
    "Hire Shopify Expert",
  ],

  authors: [{ name: "Hamad Rafi", url: "https://hamadrafi-1.vercel.app" }],
  creator: "Hamad Rafi",
  publisher: "Hamad Rafi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamadrafi-1.vercel.app",
    siteName: "Hamad Rafi — Full Stack & E-Commerce Software Engineer",
    title: "Hamad Rafi — Full Stack Software Engineer | Shopify, WordPress & Webflow Specialist",
    description:
      "Full-Stack Software Engineer building high-performance web applications (React, Next.js, Node.js) and custom stores on Shopify, WordPress, and Webflow.",
    images: [
      {
        url: "/imgs/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hamad Rafi — Full Stack Software Engineer Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamad Rafi — Full Stack Software Engineer | Shopify, WordPress & Webflow Specialist",
    description:
      "Full-Stack Software Engineer building high-performance web applications (React, Next.js, Node.js) and custom stores on Shopify, WordPress, and Webflow.",
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
        <JsonLd />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        {children}
        
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
