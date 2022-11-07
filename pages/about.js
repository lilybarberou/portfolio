import { useEffect } from 'react';
import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import { renderHtml, t } from '../contexts/Utils';
import AboutDev from 'containers/AboutDev';
import AboutInfo from 'containers/AboutInfo';
import Arrow from '../public/static/svg/arrow.svg';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > h1': {
            fontSize: 'calc(11vw + 11px)',
            fontWeight: 'lighter',
            textAlign: 'center',
            lineHeight: 1.4,
            marginBottom: 75,
        },
        '@media (min-width: 600px)': {
            flexDirection: 'row',

            '& > h1': {
                fontSize: 130,
                whiteSpace: 'nowrap',
                marginBottom: 0,
                marginLeft: 100,
                marginRight: 200,
            },
        },
    },
    switchBtn: {
        display: 'flex',
        gap: 25,
        marginBottom: 70,

        '& > button': {
            background: 'var(--color-pink)',
            border: '2px solid var(--color-pink)',
            color: '#fff',
            fill: '#fff',
            fontSize: 11,
            fontFamily: 'Poppins',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '11px 23px',
            justifyContent: 'center',
            width: 'fit-content',
            gap: 10,
            lineHeight: 1,
            minWidth: 90,

            '& > svg': {
                transform: 'rotate(90deg) scaleY(1.1)',
                height: 16,
            },
            '&.active': {
                background: 'none',
            },
        },
        '@media (min-width: 600px)': {
            flexDirection: 'column',
            marginBottom: 0,
            marginRight: 180,
            gap: 100,

            '& > button': {
                whiteSpace: 'nowrap',
                fontSize: 14,
                minWidth: 180,
                gap: 15,
                cursor: 'pointer',

                '& > svg': {
                    transform: 'rotate(0deg) scaleY(1.1) !important',
                    height: 16,
                },
            },
        },
    },
    content: {
        display: 'none',
        width: '100%',
        padding: '0 50px',

        '&.active': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        // front / back title
        '& > h2:first-child': {
            fontSize: 35,
            textAlign: 'center',
            lineHeight: 1.5,
            marginBottom: 70,

            '&[id="about-info-title"]': {
                marginBottom: 0,
            },
        },
        '@media (min-width: 600px)': {
            height: '100%',

            // front / back title
            '&.active': {
                flexDirection: 'row',
            },
            '& > h2:first-child': {
                fontSize: 50,
                marginBottom: 0,
                marginRight: 150,
                whiteSpace: 'nowrap',
            },
        },
    },
});

const About = ({ lang }) => {
    const classes = useStyle();
    const translations = t('about', lang);

    // get translated html into innerHtml
    useEffect(() => {
        renderHtml('#about-title', translations.about);
        renderHtml('#text1', translations.text1);
        renderHtml('#text2', translations.text2);
        renderHtml('#text3', translations.text3);
        renderHtml('#about-info-title', translations.nutshell);
    }, [lang]);

    const handleClick = (el) => {
        if (document.querySelector('#dev').classList.contains('active') && el === 'dev') return;
        if (document.querySelector('#info').classList.contains('active') && el === 'info') return;

        document.querySelector('#dev-btn').classList.toggle('active');
        document.querySelector('#info-btn').classList.toggle('active');
        document.querySelector('#dev').classList.toggle('active');
        document.querySelector('#info').classList.toggle('active');

        // scroll to left on desktop
        if (window.matchMedia('(max-width: 600px)').matches) return;
        document.querySelector('.app').scrollTop = 1300;
    };

    return (
        <div className={classes.container} id="container">
            <Head>
                <meta property="og:title" content="Lily Barberou | À propos" />
                <meta
                    property="og:description"
                    content="À propos de Lily | Portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js."
                />
                <meta property="og:url" content="https://lilybarberou.fr/about" />

                <meta name="description" content="À propos de Lily | Portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js." />
                <title>Lily Barberou | À propos</title>
            </Head>

            {/* ----- HEADER PART --------------------------------------------------------- */}
            <h1 id="about-title"></h1>

            <div className={classes.switchBtn}>
                <button className="active" id="dev-btn" onClick={() => handleClick('dev')}>
                    {translations.lilyndev} <Arrow />
                </button>
                <button id="info-btn" onClick={() => handleClick('info')}>
                    {translations.whoislily} <Arrow />
                </button>
            </div>

            {/* ----- DEV PART --------------------------------------------------------- */}
            <div className={`${classes.content} active`} id="dev">
                <AboutDev onClick={handleClick} translations={translations} lang={lang} />
            </div>

            {/* ----- INFO PART --------------------------------------------------------- */}
            <div className={classes.content} id="info">
                <AboutInfo onClick={handleClick} translations={translations} />
            </div>
        </div>
    );
};

export default About;
