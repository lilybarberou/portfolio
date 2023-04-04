import { useEffect } from 'react';
import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import Parallax, { t } from '@contexts/Utils';
import AboutDev from '@containers/AboutDev';
import AboutInfo from '@containers/AboutInfo';
import Arrow from '@public/static/svg/arrow.svg';

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
        '& > h2': {
            display: 'flex',
            flexDirection: 'column',
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
                textAlign: 'left',
            },
            '& > h2[id="about-info-title"]': {
                '& > span': {
                    display: 'flex',
                    gap: 10,

                    '& .svg': {
                        alignSelf: 'center',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        '&::after': {
                            content: 'url(/static/svg/activeMenu.svg)',
                            position: 'absolute',
                            top: '12%',
                            zIndex: -1,
                            transform: (props) => (props.fr ? 'scale(1.1, 1.2)' : 'scale(2.4, 1.2)'),
                            transition: '.3s',
                        },
                    },
                },
            },
        },
    },
});

const About = ({ lang }) => {
    const classes = useStyle({ fr: lang === 'fr-FR' });
    const translations = t('about', lang);

    useEffect(() => {
        // ─── PARALLAX ─────────────────────────────────────────
        if (window.matchMedia('(min-width: 600px)').matches) {
            new Parallax({
                reference: '.dev-content',
                target: '.dev-content > h2 > span:first-child',
                styles: {
                    transform: 'translateX(${coef*100}px)',
                },
            });

            new Parallax({
                reference: '.info-content',
                target: '.info-content > h2 > span:first-child',
                styles: {
                    transform: 'translateX(${coef*50}px)',
                },
            });
        }
    }, [lang, translations]);

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
        <div className={classes.container} id='container'>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/a-propos-de-lily' />
                <meta property='og:title' content={`${translations.about} | Lily Barberou`} />
                <meta property='og:url' content='https://lilybarberou.fr/a-propos-de-lily' />
                <meta
                    property='og:description'
                    content='Apprenez-en plus sur Lily Barberou, que ce soit dans sa vie de développeuse web, ou encore ses passions, tout en un mot.'
                />
                <meta
                    name='description'
                    content='Apprenez-en plus sur Lily Barberou, que ce soit dans sa vie de développeuse web, ou encore ses passions, tout en un mot.'
                />
                <title>{translations.about} | Lily Barberou</title>
            </Head>

            {/* ----- HEADER PART --------------------------------------------------------- */}
            <h1 dangerouslySetInnerHTML={{ __html: translations.aboutLily }}></h1>

            <div className={classes.switchBtn}>
                <button className='active' id='dev-btn' onClick={() => handleClick('dev')}>
                    {translations.lilyndev} <Arrow />
                </button>
                <button id='info-btn' onClick={() => handleClick('info')}>
                    {translations.whoislily} <Arrow />
                </button>
            </div>

            {/* ----- DEV PART --------------------------------------------------------- */}
            <div className={`${classes.content} active dev-content`} id='dev'>
                <AboutDev onClick={handleClick} translations={translations} lang={lang} />
            </div>

            {/* ----- INFO PART --------------------------------------------------------- */}
            <div className={`${classes.content} info-content`} id='info'>
                <AboutInfo onClick={handleClick} translations={translations} />
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default About;
