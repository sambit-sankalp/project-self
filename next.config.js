/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
