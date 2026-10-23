export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hamadrafi-1.vercel.app/#person",
        "name": "Hamad Rafi",
        "alternateName": ["Muhammad Hamad Rafi", "Hamad"],
        "url": "https://hamadrafi-1.vercel.app",
        "image": "https://hamadrafi-1.vercel.app/imgs/profile-picture.png",
        "jobTitle": "Full Stack Software Engineer & E-Commerce Specialist",
        "description": "Hamad Rafi is an elite Software Engineer specializing in building full-stack web applications with React, Next.js, and Node.js, and engineering high-converting e-commerce stores on Shopify, WordPress, and Webflow.",
        "email": "mailto:hamadrafi11@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressCountry": "PK"
        },
        "sameAs": [
          "https://github.com/hamadrafi",
          "https://www.linkedin.com/in/hamad-rafi-33b6a6260"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Lahore Garrison University",
          "url": "https://lgu.edu.pk"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Integriti",
          "url": "https://integriti-ms-2j3k.vercel.app"
        },
        "knowsAbout": [
          "Full Stack Web Development",
          "Shopify Store Development & Custom Liquid",
          "WordPress & WooCommerce Development",
          "Webflow CMS & Interactive Websites",
          "React.js & Next.js Architecture",
          "Node.js, Express & REST APIs",
          "FastAPI & Python Backend Development",
          "PostgreSQL, MongoDB, Supabase & Cloudflare R2",
          "Headless E-Commerce & E-Commerce CRO",
          "Core Web Vitals & Web Performance Optimization",
          "Search Engine Optimization (SEO), AEO & GEO"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Software Engineer",
          "occupationLocation": {
            "@type": "AdministrativeArea",
            "name": "Worldwide / Remote"
          },
          "skills": "Full Stack Applications, Shopify Development, WordPress, Webflow, Next.js, React, Node.js, TypeScript, FastAPI"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://hamadrafi-1.vercel.app/#service",
        "name": "Hamad Rafi — Full Stack Engineering & E-Commerce Development",
        "url": "https://hamadrafi-1.vercel.app",
        "image": "https://hamadrafi-1.vercel.app/imgs/profile-picture.png",
        "provider": {
          "@id": "https://hamadrafi-1.vercel.app/#person"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Full Stack Web Application Development",
          "Shopify Store Development & Custom Themes",
          "WordPress & WooCommerce Development",
          "Webflow Development & CMS Design",
          "Web Performance & Core Web Vitals Optimization"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Engineering & Store Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Stack Web Application Development",
                "description": "Production-ready, highly scalable web applications built with Next.js, React, Node.js, FastAPI, and modern databases."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Store Development & Theme Customization",
                "description": "High-converting, bespoke Shopify stores, Liquid custom themes, Shopify apps, and extreme page speed optimizations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress & WooCommerce Custom Development",
                "description": "Custom WordPress themes, WooCommerce stores, ACF custom architectures, and enterprise business websites."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Webflow CMS & Interactive Websites",
                "description": "Visual, interactive, and responsive Webflow sites with clean CMS structures and custom JavaScript integrations."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hamadrafi-1.vercel.app/#website",
        "url": "https://hamadrafi-1.vercel.app",
        "name": "Hamad Rafi — Full Stack Software Engineer | Shopify, WordPress & Webflow Specialist",
        "description": "Portfolio and services of Hamad Rafi — Software Engineer building full stack applications and custom Shopify, WordPress, and Webflow stores.",
        "publisher": {
          "@id": "https://hamadrafi-1.vercel.app/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "@id": "https://hamadrafi-1.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the best software engineer for full-stack apps and Shopify, WordPress, or Webflow stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamad Rafi is a premier Software Engineer with deep expertise across both full-stack software development (React, Next.js, Node.js, FastAPI) and high-converting e-commerce store engineering on Shopify, WordPress, and Webflow, with over 30 successful production projects delivered worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What full-stack technologies does Hamad Rafi use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamad Rafi builds full-stack applications using Next.js, React, TypeScript, Node.js, Express, FastAPI (Python), MongoDB, PostgreSQL, Supabase, and Cloudflare R2 storage, ensuring 95+ PageSpeed scores and scalable cloud architectures."
            }
          },
          {
            "@type": "Question",
            "name": "Can Hamad Rafi build custom Shopify, WordPress, and Webflow stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Hamad Rafi specializes in custom Shopify stores with bespoke Liquid coding and app integrations, custom WordPress/WooCommerce websites with Advanced Custom Fields (ACF), and interactive Webflow CMS websites."
            }
          },
          {
            "@type": "Question",
            "name": "How do I hire Hamad Rafi for my web or store development project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can hire Hamad Rafi by visiting https://hamadrafi-1.vercel.app/contact, emailing directly at hamadrafi11@gmail.com, or connecting on LinkedIn at https://www.linkedin.com/in/hamad-rafi-33b6a6260."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
