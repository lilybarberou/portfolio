import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import Separation from '@components/Separation';
import BrushFrame from '../public/static/svg/brushFrame.svg';
import Arrow from '../public/static/svg/arrow.svg';
import AboutDev from 'containers/AboutDev';
import AboutInfo from 'containers/AboutInfo';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > h1': {
            fontSize: 60,
            fontWeight: 'lighter',
            textAlign: 'center',
            lineHeight: 1.4,
            marginBottom: 75,
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
                transform: 'rotate(90deg)',
            },
            '&.active': {
                background: 'none',
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
        },
    },
});

const Home = () => {
    const classes = useStyle();

    const handleClick = (el) => {
        if (document.querySelector('#dev').classList.contains('active') && el === 'dev') return;
        if (document.querySelector('#info').classList.contains('active') && el === 'info') return;

        document.querySelector('#dev-btn').classList.toggle('active');
        document.querySelector('#info-btn').classList.toggle('active');
        document.querySelector('#dev').classList.toggle('active');
        document.querySelector('#info').classList.toggle('active');
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
            <h1>
                ABOUT
                <br />
                LILY
            </h1>

            <div className={classes.switchBtn}>
                <button className="active" id="dev-btn" onClick={() => handleClick('dev')}>
                    Lily et le Dev <Arrow />
                </button>
                <button id="info-btn" onClick={() => handleClick('info')}>
                    Qui est Lily ? <Arrow />
                </button>
            </div>

            {/* ----- DEV PART --------------------------------------------------------- */}
            <div className={`${classes.content} active`} id="dev">
                <AboutDev onClick={handleClick} />
            </div>

            {/* ----- INFO PART --------------------------------------------------------- */}
            <div className={classes.content} id="info">
                <AboutInfo onClick={handleClick} />
            </div>
        </div>
    );
};

export default Home;
