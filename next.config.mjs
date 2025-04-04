/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Todas as requisições para /api
        destination: "http://localhost:3001/api/:path*", // Redireciona para o backend
      },
    ];
  },
};

export default nextConfig;
