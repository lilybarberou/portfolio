import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';
import { store } from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '@components/Navigation';
import HorizontalWrapper from '@components/HorizontalWrapper';
import '@styles/globals.scss';
import { t } from '@contexts/Utils';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // remove server side style from react jss
    useEffect(() => {
        const jssStyles = document.querySelector('#server-side-styles');
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);

        document.documentElement.lang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
    }, []);

    // management for google analytics spa
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    // must be a component to get translation
    const MusicCursor = () => {
        const lang = useSelector((state) => state.lang.value);
        const text = t('clickonmusic', lang);

        return <span id='musique-cursor'>{text}</span>;
    };

    return (
        <>
            {/* <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-17M60GEGB9'></Script>
            <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-17M60GEGB9', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            /> */}

            <Provider store={store}>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <ToastContainer
                    position='top-right'
                    autoClose={3500}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={false}
                    progress={undefined}
                    theme='dark'
                />
                <MusicCursor />
                <HorizontalWrapper>
                    <Navigation />
                    <Component {...pageProps} />
                </HorizontalWrapper>
            </Provider>
        </>
    );
}

export default MyApp;
