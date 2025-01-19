/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gfzmadiznedsvaqxppvm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3008",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
