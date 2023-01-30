import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const registry = new SheetsRegistry();
        const generateId = createGenerateId();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    (
                        <JssProvider registry={registry} generateId={generateId}>
                            <App {...props} />
                        </JssProvider>
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style id='server-side-styles'>{registry.toString()}</style>
                </>
            ),
        };
    }
    render() {
        return (
            <Html lang='fr-FR'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='theme-color' content='#232323' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='apple-touch-icon' href='./apple-touch-icon.png' />

                    <meta property='og:image' content='https://raw.githubusercontent.com/Nahay/Assets/master/Portfolio/home.png' />
                    <meta property='og:type' content='website' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
