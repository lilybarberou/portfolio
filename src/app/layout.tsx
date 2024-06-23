import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation } from '@/components/Navigation';
import { HorizontalWrapper } from '@/components/HorizontalWrapper';
import { MusicCursor } from '@/components/MusicCursor';
import { Providers } from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}}');
                `}
      </Script>
      <body>
        <Providers>
          <MusicCursor />
          <HorizontalWrapper>
            <Navigation />
            {children}
          </HorizontalWrapper>
        </Providers>
      </body>
    </html>
  );
}
