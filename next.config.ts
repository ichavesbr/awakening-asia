import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,

  // Necessary for accepting youtube API imagens
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
}

export default nextConfig
