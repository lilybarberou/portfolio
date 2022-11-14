import Head from 'next/head';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '@components/Navigation';
import HorizontalWrapper from '@components/HorizontalWrapper';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
    // remove server side style from react jss
    useEffect(() => {
        const jssStyles = document.querySelector('#server-side-styles');
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);

        document.documentElement.lang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                progress={undefined}
                theme="dark"
            />
            <span id="musique-cursor">Clique sur une musique !</span>
            <HorizontalWrapper>
                <Navigation />
                <Component {...pageProps} />
            </HorizontalWrapper>
        </Provider>
    );
}

export default MyApp;
