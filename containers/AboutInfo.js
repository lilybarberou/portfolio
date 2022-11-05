import { createUseStyles } from 'react-jss';
import Image from 'next/future/image';
import Separation from '@components/Separation';
import Info from '@components/Info';
import MusicPlayer from '@components/MusicPlayer';
import BrushFrame from '../public/static/svg/brushFrame.svg';
import Arrow from '../public/static/svg/arrow.svg';
import * as i from '../public/static/imagesIndex';
import { songs } from '../public/static/songs';

const useStyle = createUseStyles({
    gourmetContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 40,
        padding: '0 20px',
        boxSizing: 'border-box',

        '& img:first-child': {
            width: '100%',
            height: 300,
            order: '2',
        },

        '& img:nth-child(2)': {
            width: 150,
            height: 200,
            alignSelf: 'flex-end',
            marginRight: '5%',
            transform: 'translateY(-100px)',
            order: '3',
        },

        '@media (min-width: 600px)': {
            position: 'relative',
            flexDirection: 'row',
            width: 'unset',
            marginRight: 650,
            marginTop: '0',

            '& img': {
                position: 'absolute',
            },

            '& img:first-child': {
                top: '0',
                marginLeft: 110,
                zIndex: '0',
                order: 'unset',
                width: 800,
                height: 600,
            },

            '& img:nth-child(2)': {
                width: 300,
                height: 480,
                zIndex: '1',
                bottom: '0',
                right: -222,
                order: 'unset',
                marginRight: '0',
                alignSelf: 'unset',
                transform: 'unset',
            },
        },
    },
    gourmetText: {
        zIndex: '2',
        order: '1',

        '& h2': {
            fontSize: 'calc(7vw + 11px)',
        },

        '& .info': {
            transform: 'translate(-20px, 360px)',
        },

        '@media (min-width: 600px)': {
            order: 'unset',

            '& h2': {
                fontSize: 150,
            },
        },
    },
    otakuContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 65,
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',

        '& img:first-child': {
            order: '2',
            width: 'fit-content',
            height: 300,
            alignSelf: 'flex-end',
        },
        '& img:nth-child(2)': {
            order: '3',
            width: 120,
            height: 170,
            position: 'absolute',
            transform: 'translate(0, 80px)',
        },

        '@media (min-width: 600px)': {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 140,
            width: 940,
            marginBottom: '0',

            '& img': {
                position: 'absolute',
            },

            '& img:first-child': {
                height: '100%',
                width: 'auto',
                right: 220,
                zIndex: '0',
                marginLeft: 110,
                order: 'unset',
            },

            '& img:nth-child(2)': {
                width: 270,
                height: 360,
                bottom: 40,
                left: '0',
                zIndex: '1',
                order: 'unset',
            },
        },
    },
    otakuText: {
        zIndex: '2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        order: '1',

        '& h2': {
            fontSize: 'calc(7vw + 11px)',
        },

        '& .info': {
            alignSelf: 'flex-start',
            transform: 'translateY(360px)',
        },

        '@media (min-width: 600px)': {
            order: 'unset',
            alignItems: 'flex-end',

            '& h2': {
                fontSize: 150,
            },

            '& .info': {
                alignSelf: 'unset',
                transform: 'unset',
            },
        },
    },
    musicContainer: {
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        '@media (min-width: 600px)': {
            flexDirection: 'row',
        },
    },
    musicText: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40,

        '& h2': {
            fontSize: 'calc(8vw + 7px)',
            color: 'var(--color-pink)',
        },

        '& p': {
            fontFamily: 'Poppins',
            fontSize: 12,
        },

        '@media (min-width: 600px)': {
            width: 'fit-content',
            flexDirection: 'row-reverse',
            transition: '.5s all',
            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
            transform: 'rotate(-180deg) translateY(-620px)',
            marginBottom: '0',

            '& h2': {
                fontSize: 120,
                writingMode: 'vertical-lr',
            },

            '& p': {
                fontSize: 20,
                writingMode: 'vertical-lr',
            },
        },
    },
    musicList: {
        display: 'flex',
        flexDirection: 'column',
        height: 250,
        justifyContent: 'space-around',
        alignItems: 'center',

        '@media (min-width: 600px)': {
            alignItems: 'flex-start',
            paddingLeft: 120,
            height: '100%',
        },
    },
    badContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        gap: 15,
        height: 450,
        marginBottom: 30,
        width: '100%',

        '& h2': {
            fontSize: 'calc(7vw + 11px)',
            color: '#fff',
        },
        '& > .info': {
            position: 'absolute',
            top: 330,
            right: 20,
        },
        '& > .info:nth-child(3)': {
            marginTop: 45,
            marginRight: 40,
        },
        '& img': {
            position: 'absolute',
            height: 'fit-content',
            zIndex: '2',
        },
        // raquette
        '& > img:nth-child(4)': {
            width: 200,
            top: 80,
            left: '5%',
        },
        '& > img:nth-child(5)': {
            display: 'none',
            bottom: '0',
            right: '45%',
            transform: 'rotate(80deg)',
        },
        '& > img:nth-child(6)': {
            display: 'none',
            bottom: '15%',
            left: '0',
            transform: 'rotate(-60deg)',
        },
        // volant
        '& > img:nth-child(7)': {
            width: 70,
            height: 'auto',
            top: 120,
            right: '20%',
            transform: 'rotate(90deg)',
        },

        '@media (min-width: 600px)': {
            alignItems: 'unset',
            justifyContent: 'center',
            width: 1000,
            padding: '0 200px',
            marginBottom: '0',
            height: 'unset',

            '& h2': {
                fontSize: 120,
            },

            '& > .info': {
                right: 'unset',
                top: '65%',
                left: '50%',
            },

            '& > .info:nth-child(3)': {
                marginTop: 70,
                marginLeft: 70,
                marginRight: '0',
            },

            '& > img:nth-child(4)': {
                top: '0',
                left: '0',
                width: 360,
            },

            '& > img:nth-child(5)': {
                display: 'block',
            },

            '& > img:nth-child(6)': {
                display: 'block',
            },

            '& > img:nth-child(7)': {
                top: '10%',
                width: 195,
            },
        },
    },
    gamesContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        padding: '0 20px',
        boxSizing: 'border-box',

        // elden ring
        '& img:nth-child(2)': {
            width: '100%',
            height: 'fit-content',
        },
        // hollow knight
        '& img:nth-child(3)': {
            width: 'fit-content',
            maxHeight: 300,
        },

        '@media (min-width: 600px)': {
            width: 'fit-content',

            '& img': {
                maxHeight: 'unset',
                marginTop: '0',
                width: 'fit-content',
                height: '90%',
            },

            '& img:nth-child(2)': {
                display: 'block',
                marginLeft: 150,
            },
        },
    },
    gamesText: {
        zIndex: '2',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        marginBottom: 40,

        '@media (min-width: 600px)': {
            gap: 15,
        },
    },
    drawingsContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: 955,
        alignItems: 'center',
        width: '100%',

        '& h2': {
            fontSize: 'calc(7vw + 11px)',
        },

        '& .info': {
            position: 'absolute',
            top: 260,
            right: '0',
            zIndex: '9',
        },

        '@media (min-width: 600px)': {
            width: 3400,
            display: 'block',
            height: 'unset',

            '& h2': {
                fontSize: 150,
                position: 'absolute',
                left: '0',
                bottom: '10%',
            },

            '& .info': {
                right: 'unset',
                top: '50%',
                left: 350,
            },
        },
    },
    drawings: {
        '& img': {
            position: 'absolute',
        },

        '& img:nth-child(2)': {
            height: 'fit-content',
            width: 150,
            top: 110,
            left: 0,
            zIndex: '2',
        },
        '& img:nth-child(3)': {
            height: 'fit-content',
            width: 150,
            top: 110,
            right: 0,
            zIndex: '3',
        },
        '& img:nth-child(4)': {
            width: '50%',
            height: 120,
            top: 380,
            right: '0',
            zIndex: '4',
        },
        '& img:nth-child(5)': {
            height: 'fit-content',
            width: '60%',
            top: 400,
            left: '0',
            zIndex: '10',
        },
        '& img:nth-child(6)': {
            width: '50%',
            height: 'fit-content',
            top: 550,
            right: '0',
            zIndex: '7',
        },
        '& img:nth-child(7)': {
            width: '55%',
            height: 'fit-content',
            top: 610,
            left: '0',
            zIndex: '6',
        },
        '& img:nth-child(8)': {
            width: '70%',
            height: 'fit-content',
            top: 810,
            right: '0',
            zIndex: '7',
        },
        '@media (min-width: 600px)': {
            '& img:nth-child(2)': {
                width: 240,
                height: 'fit-content',
                top: '10%',
                left: 650,
            },
            '& img:nth-child(3)': {
                width: 240,
                height: 'fit-content',
                top: 'unset',
                right: 'unset',
                bottom: '10%',
                left: 800,
            },
            '& img:nth-child(4)': {
                width: 500,
                height: 260,
                right: 'unset',
                top: '5%',
                left: 1050,
            },
            '& img:nth-child(5)': {
                height: 490,
                width: 500,
                zIndex: '5',
                top: 'unset',
                bottom: 0,
                left: 1100,
            },
            '& img:nth-child(6)': {
                width: 560,
                height: 'auto',
                maxHeight: '100%',
                right: 'unset',
                top: '0',
                left: 1650,
                zIndex: '6',
            },
            '& img:nth-child(7)': {
                width: 520,
                height: 'auto',
                maxHeight: '100%',
                top: 'unset',
                bottom: '0',
                left: 2250,
                zIndex: '7',
            },
            '& img:nth-child(8)': {
                width: 648,
                height: 440,
                right: 'unset',
                top: '20%',
                left: 2650,
                zIndex: '8',
            },
        },
    },
    brushFrame: {
        alignSelf: 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'lighter',
        marginBottom: 50,
        marginLeft: 40,
        marginTop: 20,

        '& > svg': {
            position: 'absolute',
            transform: 'scale(1.1, 1)',
        },
    },
    devBtn: {
        background: 'var(--color-pink)',
        border: '2px solid var(--color-pink)',
        color: '#fff',
        fill: '#fff',
        fontSize: 11,
        fontFamily: 'Poppins',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '11px 18px',
        justifyContent: 'center',
        width: 'fit-content',
        gap: 10,
        lineHeight: 1,
        minWidth: 150,
        alignSelf: 'flex-end',
        marginBottom: 40,
        marginRight: 20,

        '& > svg': {
            height: 17,
        },
    },
});

const AboutInfo = ({ onClick, translations }) => {
    const classes = useStyle();

    return (
        <>
            <h2 id="about-info-title"></h2>

            {/* ----- GOURMET PART --------------------------------------------------------- */}
            <section className={classes.gourmetContainer} id="gourmet">
                <Image className="bnw" src={i.Pho} alt="Pho" width={800} height={600} />
                <Image className="bnw" src={i.Glace} alt="Glace" width={300} height={480} />
                <div className={classes.gourmetText}>
                    <h2>GOURMET</h2>
                    <Info text="Phô > Couscous > all" />
                </div>
            </section>

            {/* ----- OTAKU PART --------------------------------------------------------- */}
            <section className={classes.otakuContainer} id="otaku">
                <Image className="bnw" src={i.Totoro} alt="Totoro" width={650} height={800} />
                <Image className="bnw" src={i.Bouba} alt="Bouba" width={270} height={360} />
                <div className={classes.otakuText}>
                    <h2>OTAKU</h2>
                    <Info text={translations.bouba} />
                </div>
            </section>
            <Separation />

            {/* ----- MUSIC PART --------------------------------------------------------- */}
            <section className={classes.musicContainer} id="musique">
                <div className={`${classes.musicText} title`}>
                    <h2>{translations.melophile}</h2>
                    <p>{translations.reggae}</p>
                </div>
                <div className={classes.musicList}>
                    {songs.map((e, i) => (
                        <MusicPlayer opt={{ ...e, index: i }} key={i} />
                    ))}
                </div>
            </section>
            <Separation />

            {/* ----- BADMINTON PART --------------------------------------------------------- */}
            <section className={classes.badContainer} id="badminton">
                <h2>{translations.addict}</h2>
                <Info text={translations.justbad} />
                <Info text={translations.sporty} />
                <Image className="bnw" src={i.Racket} alt="Racket" width={360} height={360} />
                <Image className="bnw" src={i.Racket} alt="Racket" width={300} height={300} />
                <Image className="bnw" src={i.Volant} alt="Volant" width={140} height={126} />
                <Image className="bnw" src={i.Volant2} alt="Volant" width={195} height={204} />
            </section>

            {/* ----- VIDEO GAMES PART --------------------------------------------------------- */}
            <section className={classes.gamesContainer} id="jeux-videos">
                <div className={classes.gamesText}>
                    <Info text={translations.videogames} />
                    <Info text="LILY.GEEK = 100" />
                </div>
                <Image className="bnw" src={i.EldenRing} alt="Elden Ring" width={1236} height={928} />
                <Image className="bnw" src={i.HollowKnight} alt="Hollow Knight" width={1256} height={1440} />
            </section>
            <Separation />

            {/* ----- ARTIST PART --------------------------------------------------------- */}
            <section className={classes.drawingsContainer} id="artiste">
                <h2>{translations.artist}</h2>
                <div className={classes.drawings} id="drawings">
                    <Info text={translations.complicated} />
                    <Image className="bnw" src={i.Dessin1} width={1236} height={1684} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin2} width={1328} height={1740} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin3} width={500} height={196} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin4} width={3000} height={3000} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin5} width={1920} height={2560} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin6} width={1920} height={2560} alt="Dessin" />
                    <Image className="bnw" src={i.Dessin7} width={1402} height={944} alt="Dessin" />
                </div>
            </section>
            <Separation />

            {/* ----- FOOTER PART --------------------------------------------------------- */}
            <div className={classes.brushFrame}>
                <p>{translations.theresdev}</p>
                <BrushFrame />
            </div>
            <button
                className={classes.devBtn}
                onClick={() => {
                    window.scrollTo(0, 0);
                    onClick('dev');
                }}
            >
                {translations.whereithappens} <Arrow />
            </button>
        </>
    );
};

export default AboutInfo;
