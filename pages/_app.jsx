import { useEffect, useState, createContext } from 'react';
import Head from 'next/head';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '@components/Navigation';
import HorizontalWrapper from '@components/HorizontalWrapper';
import InitLang from '@components/InitLang';
import MusicCursor from '@components/MusicCursor';

export const Context = createContext();

const aboreto = localFont({ src: '../public/static/fonts/Aboreto-Regular.ttf', variable: '--aboreto' });
const poppins = Poppins({ weight: '400', variable: '--poppins', subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
    const [lang, setLang] = useState('fr-FR');

    useEffect(() => {
        document.documentElement.lang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
    }, []);

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <Script id='google-analytics'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}}');
                `}
            </Script>
            <Context.Provider value={{ lang, setLang }}>
                <InitLang>
                    <div className={`${aboreto.variable} ${poppins.variable}`}>
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
                    </div>
                </InitLang>
            </Context.Provider>
        </>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
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
        font-family: var(--aboreto);
        overflow-y: unset;
        background: #1F1F1F;
    }

    img {
        object-fit: cover;
    }

    h2 {
        font-weight: normal;
        font-family: var(--aboreto);
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

                @media (max-height: 680px) {
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
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
            font-family: var(--poppins);
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
