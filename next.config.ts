import withPWA from "@ducanh2912/next-pwa";
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "raw.githubusercontent.com" }],
  },
  compiler: {
    styledComponents: true,
  },
};

export default withPWA({
  dest: "public", // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
  register: true, // register the PWA service worker
})(nextConfig);
