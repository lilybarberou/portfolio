import { env } from "@/lib/env";
import { HomeView } from "@/views/HomeView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lily Barberou | Portfolio",
  description:
    "Découvrez le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js. Réalisations et train de vie vous y attendent.",
  openGraph: {
    title: "Lily Barberou | Portfolio",
    description:
      "Découvrez le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js. Réalisations et train de vie vous y attendent.",
    url: "https://lilybarberou.fr/",
    images: [
      {
        url: `${env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr.png`,
        width: 800,
        height: 600,
        alt: "Lily Barberou | Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://lilybarberou.fr/",
  },
};

export default function Home() {
  return <HomeView />;
}
