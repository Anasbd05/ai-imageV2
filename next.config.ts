import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "storage.googleapis.com"
      }
    ]
  }
};

export default nextConfig;
