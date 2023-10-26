import About from "@views/About";
import Head from "next/head";

export default function Page() {
    return <>
        <Head>
            <link rel='canonical' href='https://lilybarberou.fr/a-propos-de-lily' />
            <meta property='og:url' content='https://lilybarberou.fr/a-propos-de-lily' />
        </Head>
        <About lang='en'/>
    </>
}