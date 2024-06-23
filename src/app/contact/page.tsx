import { ContactView } from '@/views/ContactView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lily Barberou',
  description: 'Contactez Lily Barberou via le formulaire de contact, ou consultez ses réseaux sociaux Linkedin, Github et Discord.',
  openGraph: {
    title: 'Contact | Lily Barberou',
    description: 'Contactez Lily Barberou via le formulaire de contact, ou consultez ses réseaux sociaux Linkedin, Github et Discord.',
    url: 'https://lilybarberou.fr/contact',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr-contact.png`,
        width: 800,
        height: 600,
        alt: 'Contact | Lily Barberou',
      },
    ],
  },
  alternates: {
    canonical: 'https://lilybarberou.fr/contact',
  },
};

export default function Page() {
  return <ContactView />;
}
