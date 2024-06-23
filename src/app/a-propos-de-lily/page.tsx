import { AboutView } from '@/views/AboutView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | Lily Barberou', // TODO dynamic lang title
  description: 'Apprenez-en plus sur Lily Barberou, que ce soit dans sa vie de développeuse web, ou encore ses passions, tout en un mot.',
  openGraph: {
    title: 'À propos | Lily Barberou',
    description: 'Apprenez-en plus sur Lily Barberou, que ce soit dans sa vie de développeuse web, ou encore ses passions, tout en un mot.',
    url: 'https://lilybarberou.fr/a-propos-de-lily',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr-a-propos-de-lily.png`,
        width: 800,
        height: 600,
        alt: 'À propos | Lily Barberou',
      },
    ],
  },
  alternates: {
    canonical: 'https://lilybarberou.fr/a-propos-de-lily',
  },
};

export default function Page() {
  return <AboutView />;
}
