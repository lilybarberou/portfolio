import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lily Barberou | Portfolio",
    short_name: "Lily Barberou | Portfolio",
    description:
      "Découvrez le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js. Réalisations et train de vie vous y attendent.",
    start_url: "/",
    display: "standalone",
    background_color: "#232323",
    theme_color: "#232323",
    icons: [
      {
        src: "favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "maskable_icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
