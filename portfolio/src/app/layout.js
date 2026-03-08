import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Hamad Rafi - Front End Developer",
  description: "Hamad Rafi - Front End Developer specializing in modern web technologies",
  openGraph: {
    title: "My Portfolio",
    description: "Frontend Developer Portfolio",
    images: ["https://hamadrafi-1.vercel.app/imgs/preview.jpg"],
    url: "https://hamadrafi-1.vercel.app/",
    type: "website",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const savedTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', savedTheme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {/* We will initialize AOS in a Client Component or useEffect in individual pages */}
      </body>
    </html>
  );
}
