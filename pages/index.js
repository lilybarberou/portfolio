import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import { createUseStyles } from 'react-jss';
import Button from '@components/Button';
import Separation from '@components/Separation';
import Parallax, { renderHtml, t } from '@contexts/Utils';
import BrushFrame from '@public/static/svg/brushFrame.svg';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 70,

        '@media (min-width: 600px)': {
            flexDirection: 'row',
            paddingBottom: 0,
        },
    },
    hello: {
        fontSize: 50,
        marginBottom: 50,

        '@media (min-width: 600px)': {
            fontSize: 150,
            marginBottom: 0,
            margin: '0 170px',
        },
    },
    lily: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > h1': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'lighter',
            fontSize: 21,
            gap: 5,
            marginBottom: 50,
            textAlign: 'center',
            lineHeight: 1.6,

            '& > span:first-child': {
                fontSize: 35,
            },
        },
        '@media (min-width: 600px)': {
            alignItems: 'flex-start',

            '& > h1': {
                fontSize: 30,
                marginBottom: 40,
                marginRight: 50,
                whiteSpace: 'nowrap',
                alignItems: 'flex-start',

                '& > span:first-child': {
                    fontSize: '40px !important',
                    marginBottom: 20,
                },
                '& > span:last-child': {
                    display: 'flex',
                    gap: 10,
                    alignSelf: 'center',
                },
                '& .svg': {
                    alignSelf: 'center',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    '&::after': {
                        content: 'url(/static/svg/activeMenu.svg)',
                        position: 'absolute',
                        top: '20%',
                        zIndex: -1,
                        transform: (props) => (props.fr ? 'scale(1.5, 1)' : 'scale(1.1, 1)'),
                        transition: '.3s',
                    },
                },
            },
        },
    },
    works: {
        display: 'flex',
        flexDirection: 'column',

        '@media (min-width: 600px)': {
            alignItems: 'flex-end',
            marginRight: 250,
        },
    },
    worksText: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 1.5,

        '@media (min-width: 600px)': {
            fontSize: 40,
            whiteSpace: 'nowrap',
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    brushFrame: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 55,
        fontWeight: 'lighter',
        marginBottom: 70,

        '& > svg': {
            position: 'absolute',
        },
        '@media (min-width: 600px)': {
            fontSize: 13,

            '& > svg': {
                transform: 'scale(1.2)',
            },
        },
    },
    worksContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',

        '@media (min-width: 600px)': {
            position: 'relative',
            justifyContent: 'space-between',

            '& .button': {
                width: '100%',
                boxSizing: 'border-box',
                padding: '14px 25px',
            },
        },
    },
    carouselContainer: {
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',

        '@media (min-width: 600px)': {
            width: 'fit-content',
            maxWidth: 'unset',
            height: '100%',
            marginBottom: 15,
        },
    },
    carousel: {
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollBehavior: 'smooth',
        height: 120,
        gap: 20,

        '& img': {
            width: 200,
            height: 120,
        },
        '@media (min-width: 600px)': {
            flexDirection: 'column',
            overflowX: 'hidden',
            overflowY: 'auto',
            height: '100%',
            gap: 10,

            '& img': {
                width: 400,
                height: 220,
            },
        },
    },
    arrowContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',

        '@media (min-width: 600px)': {
            width: 130,
            height: 50,
            flexDirection: 'column',
            position: 'absolute',
            cursor: 'pointer',
            bottom: 0,
            left: 0,
            transformOrigin: 'bottom left',
            transform: 'rotate(90deg) translate(-100%, 130%)',
            marginBottom: 62,
            marginRight: 20,
        },
    },
    arrow: {
        width: 130,
        height: 0.5,
        background: '#818181',
        margin: '25px 25px 40px 0',
        alignSelf: 'flex-end',
        position: 'relative',

        '&::after': {
            content: '""',
            position: 'absolute',
            right: -0.5,
            bottom: 0,
            transformOrigin: 'right bottom',
            transform: 'rotate(-45deg)',
            width: 5,
            height: 5,
            borderRight: '0.7px solid #818181',
            borderBottom: '0.7px solid #818181',
        },
        '@media (min-width: 600px)': {
            margin: 0,
        },
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > h2': {
            fontSize: 32,
            marginBottom: 30,
        },
        '@media (min-width: 600px)': {
            marginRight: 80,

            '& > h2': {
                fontSize: 60,
                whiteSpace: 'nowrap',
                marginBottom: 40,
            },
        },
    },
});

const Home = ({ lang }) => {
    const classes = useStyle({ fr: lang === 'fr-FR' });
    const translations = t('home', lang);

    useEffect(() => {
        // ─── TRANSLATIONS RENDER ─────────────────────────────────────────
        renderHtml('#home-title', translations.title);
        renderHtml('#things-ive-built', translations.somethings);
        renderHtml('#lovejsreact', translations.lovejsreact);

        // ─── PARALLAX ─────────────────────────────────────────
        if (window.matchMedia('(min-width: 600px)').matches) {
            new Parallax({
                reference: '#separation',
                target: '#home-title > span',
                styles: {
                    transform: 'translateX(${-coef*100}px)',
                },
            });

            new Parallax({
                reference: '#home-carousel',
                target: '#things-ive-built > span',
                styles: {
                    transform: 'translateX(${coef*100}px)',
                },
            });
        }
    }, [lang, translations]);

    const works = [
        {
            img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Charlemagne/Client/Accueil_Connecte.png',
            name: 'Charlemagne',
            link: '/works#charlemagne',
        },
        { img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Quote%20Wars/banner.png', name: 'Quote Wars', link: '/works#quotewars' },
        { img: 'https://raw.githubusercontent.com/Nahay/Assets/master/SpotYou/banner.png', name: 'SpotYou', link: '/works#spotyou' },
        { img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Chat/banner.png', name: 'U Speak', link: '/works#uspeak' },
    ];

    const handleScroll = () => {
        const carousel = document.querySelector('#home-carousel');

        if (window.matchMedia('(max-width: 600px)').matches) {
            carousel.scrollLeft = carousel.scrollLeft + 200;
        } else carousel.scrollTop = carousel.scrollTop + 200;
    };

    const handleWorksClick = () => (document.querySelector('.app').scrollTop = 0);

    return (
        <div className={classes.container}>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/' />
                <meta property='og:title' content={`Lily Barberou | ${translations.webDev}`} />
                <meta property='og:url' content='lilybarberou.fr/' />
                <title>Lily Barberou | {translations.webDev}</title>
            </Head>

            {/* ----- LILY PART --------------------------------------------------------- */}
            <span className={classes.hello}>HELLO</span>
            <div className={classes.lily}>
                <h1 id='home-title'></h1>
                <Button text={translations.knowmemore} link='/about' />
            </div>
            <Separation id='separation' />

            {/* ----- WORKS PART --------------------------------------------------------- */}
            <div className={classes.works}>
                <h2 className={classes.worksText} id='things-ive-built'></h2>
                <div className={classes.brushFrame}>
                    <p id='lovejsreact'></p>
                    <BrushFrame />
                </div>
            </div>
            <div className={classes.worksContainer}>
                <div className={classes.carouselContainer}>
                    <div className={classes.carousel} id='home-carousel'>
                        {works.map((e) => (
                            <Link key={e.name} href={e.link}>
                                <a>
                                    <Image src={e.img} width='400' height='220' alt={e.name} className='bnw' />
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <span onClick={handleScroll} className={classes.arrowContainer}>
                    <span className={classes.arrow}></span>
                </span>
                <Button text={translations.showmore} link='/works' onClick={handleWorksClick} />
            </div>
            <Separation />

            {/* ----- CONTACT PART --------------------------------------------------------- */}
            <div className={classes.contact}>
                <h2>{translations.getintouch}</h2>
                <Button text={translations.sayhello} link='/contact' />
            </div>
        </div>
    );
};

export default Home;
