import { env } from "@/lib/env";
import { WorksView } from "@/views/WorksView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations | Lily Barberou", // TODO dynamic lang title
  description:
    "Découvrez les réalisations web de Lily Barberou, de son autoportrait au chat uspeak, plateforme de vente Charlemagne, API QuoteWars, etc...",
  openGraph: {
    title: "Réalisations | Lily Barberou",
    description:
      "Découvrez les réalisations web de Lily Barberou, de son autoportrait au chat uspeak, plateforme de vente Charlemagne, API QuoteWars, etc...",
    url: "https://lilybarberou.fr/realisations",
    images: [
      {
        url: `${env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr-realisations.png`,
        width: 800,
        height: 600,
        alt: `Réalisations | Lily Barberou`,
      },
    ],
  },
  alternates: {
    canonical: "https://lilybarberou.fr/realisations",
  },
};

export default function Page() {
  return <WorksView />;
}
