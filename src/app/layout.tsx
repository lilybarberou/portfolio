import { HorizontalWrapper } from "@/components/HorizontalWrapper";
import { MusicCursor } from "@/components/MusicCursor";
import { Navigation } from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import { env } from "@/lib/env";
import { Metadata } from "next";
import Script from "next/script";
import { PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}}');
                `}
      </Script>
      <Script src="https://cloud.umami.is/script.js" data-website-id={env.NEXT_PUBLIC_UMAMI_ID} />
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
