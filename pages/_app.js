import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Navigation from '@components/Navigation';
import HorizontalWrapper from '@components/HorizontalWrapper';
import '@styles/globals.scss';
import MobileHeader from '@components/MobileHeader';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    // remove server side style from react jss
    useEffect(() => {
        const jssStyles = document.querySelector('#server-side-styles');
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HorizontalWrapper>
                <Navigation />
                <MobileHeader />
                <Component {...pageProps} />
            </HorizontalWrapper>
        </Provider>
    );
}

export default MyApp;
