import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';
import { createUseStyles } from 'react-jss';
import Button from '@components/Button';
import Separation from '@components/Separation';
import { renderHtml, t } from 'contexts/Utils';
import BrushFrame from '../public/static/svg/brushFrame.svg';
import Link from 'next/link';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 70,
    },
    hello: {
        fontSize: 50,
        marginBottom: 50,
    },
    lily: {
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
    works: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 1.5,
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
    },
    carouselContainer: {
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
    },
    carousel: {
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollBehavior: 'smooth',
        height: 120,
        gap: 20,
    },
    arrow: {
        width: 130,
        height: 0.5,
        background: '#818181',
        margin: '25px 25px 40px 0',
        alignSelf: 'flex-end',
        position: 'relative',
        borderRadius: '0 20px 20px 0',

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
    },
    contact: {
        fontSize: 32,
        marginBottom: 30,
    },
});

const Home = ({ lang }) => {
    const classes = useStyle();
    const translations = t('home', lang);

    // get translated html into innerHtml
    useEffect(() => {
        renderHtml('#home-title', translations.title);
        renderHtml('#things-ive-built', translations.somethings);
        renderHtml('#lovejsreact', translations.lovejsreact);
    }, []);

    const works = [
        {
            img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Charlemagne/Client/Accueil_Connecte.png',
            name: 'Charlemagne',
            link: '/works#charlemagne',
        },
        { img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Quote%20Wars/banner.png', name: 'Quote Wars', link: '/works#quotewars' },
        { img: 'https://raw.githubusercontent.com/Nahay/Assets/master/Chat/banner.png', name: 'U Speak', link: '/works#uspeak' },
    ];

    const handleScroll = () => {
        const carousel = document.querySelector('#home-carousel');
        carousel.scrollLeft = carousel.scrollLeft + 200;
    };

    return (
        <div className={classes.container}>
            <Head>
                <meta property="og:title" content="Lily Barberou | Développeuse web" />
                <meta
                    property="og:description"
                    content="Bienvenue sur le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js."
                />
                <meta property="og:url" content="lilybarberou.fr/" />

                <meta name="description" content="Bienvenue sur le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js." />
                <title>Lily Barberou | Développeuse web</title>
            </Head>

            {/* ----- LILY PART --------------------------------------------------------- */}
            <span className={classes.hello}>HELLO</span>
            <h1 className={classes.lily} id="home-title"></h1>
            <Button text={translations.knowmemore} link="/about" />
            <Separation />

            {/* ----- WORKS PART --------------------------------------------------------- */}
            <h2 className={classes.works} id="things-ive-built"></h2>
            <div className={classes.brushFrame}>
                <p id="lovejsreact"></p>
                <BrushFrame />
            </div>
            <div className={classes.carouselContainer}>
                <div className={classes.carousel} id="home-carousel">
                    {works.map((e) => (
                        <Link key={e.name} href={e.link}>
                            <a>
                                <Image src={e.img} width="200" height="120" alt={e.name} className="bnw" />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <span onClick={handleScroll} className={classes.arrow}></span>
            <Button text={translations.showmore} link="/works" />
            <Separation />

            {/* ----- CONTACT PART --------------------------------------------------------- */}
            <h2 className={classes.contact}>{translations.getintouch}</h2>
            <Button text={translations.sayhello} link="/contact" />
        </div>
    );
};

export default Home;
