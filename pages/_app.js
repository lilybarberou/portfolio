import Head from 'next/head';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from 'store';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '@components/Navigation';
import HorizontalWrapper from '@components/HorizontalWrapper';
import { t } from '@contexts/Utils';
import Script from 'next/script';
import InitLang from '@components/InitLang';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.lang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
    }, []);

    // must be a component to get translation
    const MusicCursor = () => {
        const lang = useSelector((state) => state.lang.value);
        const text = t('clickonmusic', lang);

        return <span id='musique-cursor'>{text}</span>;
    };

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy='afterInteractive' />
            <Script id='google-analytics' strategy='afterInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}}');
                `}
            </Script>
            <Provider store={store}>
                <InitLang>
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
                    <GlobalStyle />
                    <MusicCursor />
                    <HorizontalWrapper>
                        <Navigation />
                        <Component {...pageProps} />
                    </HorizontalWrapper>
                </InitLang>
            </Provider>
        </>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Aboreto";
        src: url("../static/fonts/Aboreto-Regular.ttf");
        font-display: swap;
    }

    @font-face {
        font-family: "Poppins";
        src: url("../static/fonts/Poppins-Regular.ttf");
        font-display: swap;
    }

    :root {
        --color-grey: #818181;
        --color-pink: #C15959;
        --toastify-color-success: #C15959 !important;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    *::selection {
        color: #fff;
        background-color: var(--color-pink);
    }

    * {
        margin:0;
        padding:0;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Aboreto';
        overflow-y: unset;
    }

    img {
        object-fit: cover;
    }

    h2 {
        font-weight: normal;
        font-family: 'Aboreto';
    }

    .bnw {
        filter: grayscale(100%);
        transition: .5s all;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1);

        &:hover {
            filter: grayscale(0%);
        }
    }

    .app {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw; 
        min-height: 100vh;
        height: fit-content;
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: none;
        background: #1F1F1F;
        color: #fff;

        .container {
            display: flex;
            flex-direction: column;
            width: 100vw;
            padding: 20px;
            box-sizing: border-box;
        }

        // desktop
        @media(min-width: 600px) {
            width: 100vh; 
            height: 100vw;
            transform-origin: top left;
            transform: rotate(-90deg) translateX(-100vh);

            .container {
                width: fit-content;
                flex-direction: row;
                transform-origin: top left;
                transform: rotate(90deg) translateY(-100vh);
                padding: 0;
                padding-top: 50px;
                padding-bottom: 50px;
                height: 100vh;
            }
        }
    }


    #musique-cursor {
        display: none;

        @media(min-width: 600px) {
            display: block;
            position: fixed;
            padding: 10px 20px;
            background: salmon;
            color: #fff;
            z-index: 10;
            font-size: 14px;
            font-family: 'Poppins';
            opacity: 0;
            transition: .3s opacity;
            white-space: nowrap;
            pointer-events: none;
        }
    }

    // toast overriding
    .Toastify__toast-container {
        width: 300px !important;
        margin-left: auto !important;
        margin-top: 15px !important;
    }
`;
