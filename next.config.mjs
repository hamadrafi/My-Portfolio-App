/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
