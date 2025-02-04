/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add "localhost" for your local development
    domains: ["localhost", "ichef.bbci.co.uk"],  // Allow images from BBC and localhost

    // If you use a remote image pattern like the one for Sanity.io, keep it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",  // Allow images from BBC
        hostname: "ichef.bbci.co.uk",  // Add the hostname for BBC images
      },
    ],
  },
};

module.exports = nextConfig;
