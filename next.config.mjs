/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/nodelove/image/upload/f_auto,q_auto/v1/portfolio/",
      },
    ],
  },
};

export default nextConfig;
