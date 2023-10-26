import { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Separation from '@components/Separation';
import Work from '@components/Work';
import { t } from '@contexts/Utils';
import worksList from '@public/static/worksList.json';

const Works = ({ lang }) => {
    const translations = t('navigation', lang);

    return (
        <S.Container>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/realisations' />
                <meta property='og:title' content={`${translations.works} | Lily Barberou`} />
                <meta property='og:url' content='https://lilybarberou.fr/realisations' />
                <meta property='og:image' content={`${process.env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr-realisations.png`} />
                <meta
                    property='og:description'
                    content='Découvrez les réalisations web de Lily Barberou, de son autoportrait au chat uspeak, plateforme de vente Charlemagne, API QuoteWars, etc...'
                />
                <meta
                    name='description'
                    content='Découvrez les réalisations web de Lily Barberou, de son autoportrait au chat uspeak, plateforme de vente Charlemagne, API QuoteWars, etc...'
                />
                <title>{translations.works} | Lily Barberou</title>
            </Head>
            <S.Title>
                <h1 className={`${lang === 'fr-FR' ? '' : 'en'}`}>{translations.works}</h1>
            </S.Title>
            <Separation />
            {worksList.map((work, i) => (
                <Fragment key={i}>
                    <Work opt={work} lang={lang} />
                    {i !== worksList.length - 1 && <Separation />}
                </Fragment>
            ))}
        </S.Container>
    );
};

const S = {};
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: calc(10vw + 9px);
        font-weight: lighter;
        margin-bottom: 50px;
        pointer-events: none;
    }

    @media (min-width: 600px) {
        flex-direction: row;

        h1 {
            transform: rotate(-90deg);
            font-size: calc(10vh + 9px);
            margin-bottom: 0;

            &.en {
                font-size: calc(14vh + 9px);
            }
        }
    }
`;

S.Title = styled.div`
    & + .separation {
        display: none;
    }

    @media (min-width: 600px) {
        width: 170px;
        display: flex;
        justify-content: center;
        margin-left: 80px;

        & + .separation {
            display: block;
        }
    }
`;

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Works;
