import { Fragment } from 'react';
import Image from 'next/future/image';
import { createUseStyles } from 'react-jss';
import Separation from '@components/Separation';
import worksList from '@public/static/worksList.json';
import BrushFrame from '@public/static/svg/brushFrame.svg';
import Head from 'next/head';
import { t } from '@contexts/Utils';
import Link from 'next/link';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& h1': {
            fontSize: 'calc(10vw + 9px)',
            fontWeight: 'lighter',
            marginBottom: 50,
            pointerEvents: 'none',
        },
        '@media (min-width: 600px)': {
            flexDirection: 'row',

            '& h1': {
                transform: 'rotate(-90deg)',
                fontSize: 'calc(10vh + 9px)',
                marginBottom: 0,

                '&.en': {
                    fontSize: 'calc(14vh + 9px)',
                },
            },
        },
    },
    title: {
        '& + .separation': {
            display: 'none',
        },

        '@media (min-width: 600px)': {
            width: 170,
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 80,

            '& + .separation': {
                display: 'block',
            },
        },
    },
    work: {
        width: '100%',
        fontFamily: 'Poppins',

        '& > a > img': {
            width: '100%',
            height: 180,
            objectFit: 'cover',
            marginBottom: 5,
            cursor: 'pointer',
        },
        // title
        '& > span': {
            fontSize: 18,
            textTransform: 'uppercase',
        },
        // desc
        '& > p': {
            fontSize: 12,
            marginTop: 5,
            marginBottom: 30,
        },
        '&:last-child': {
            marginBottom: 30,
        },
        '@media (min-width: 600px)': {
            padding: '20px 0',
            boxSizing: 'border-box',
            width: 400,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 10px',

            '& > a > img': {
                height: 240,
                width: 400,
            },
            // title
            '& > span': {
                fontSize: 24,
                marginTop: 35,
                marginBottom: 15,
            },
            // desc
            '& > p': {
                fontSize: 13,
            },
            '&:last-child': {
                marginBottom: 0,
                marginRight: 100,
            },
        },
    },
    desktopTech: {
        display: 'none',

        '@media (min-width: 600px)': {
            display: 'flex',
            marginTop: 15,
            gap: 5,

            '& > div': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 40,

                '& > svg': {
                    position: 'absolute',
                    transform: 'scale(0.5, 0.7)',
                },
                '& > span': {
                    fontSize: 13,
                },
            },
        },
    },
    workFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        // techs
        '& > div:first-child': {
            display: 'flex',
            gap: 10,

            '& > span': {
                padding: '5px 10px',
                height: 'fit-content',
                fontSize: 12,
                background: 'var(--color-pink)',
            },
        },
        '@media (min-width: 600px)': {
            justifyContent: 'flex-end',
            marginTop: 'auto',

            // techs
            '& > div:first-child': {
                display: 'none',
            },
        },
    },
    workSocial: {
        display: 'flex',
        gap: 10,

        '& > a': {
            borderRadius: '50%',
            display: 'flex',
            background: 'var(--color-pink)',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '.3s',
            height: 35,
            width: 35,

            '& > svg': {
                fill: '#fff',
                padding: 6,
            },
            '&:last-child > svg': {
                width: 16,
                padding: 0,
            },
        },
        '@media (min-width: 600px)': {
            gap: 15,

            '& > a': {
                height: 40,
                width: 40,
            },
        },
    },
});

const Works = ({ lang }) => {
    const classes = useStyle();
    const translations = t('navigation', lang);

    const Work = ({ opt }) => {
        const language = lang === 'fr-FR' ? 'fr' : 'en';
        const title = opt.title ? opt.title : language === 'fr' ? opt.frTitle : opt.enTitle;
        const desc = language === 'fr' ? opt.frDesc : opt.enDesc;

        return (
            <div className={classes.work} id={title.toLowerCase().replace(/\s/g, '')}>
                <a aria-label='Link to the website' href={opt.url} target='_blank' rel='noopener noreferrer'>
                    <Image src={opt.img} alt={title} width='560' height='240' className='bnw' />
                </a>
                <div className={classes.desktopTech}>
                    {opt.techs.map((e, i) => (
                        <div key={i}>
                            <BrushFrame />
                            <span>{e}</span>
                        </div>
                    ))}
                </div>

                <span>{title}</span>
                <p>{desc}</p>
                <div className={classes.workFooter}>
                    <div>
                        {opt.techs.map((e, i) => (
                            <span key={i}>{e}</span>
                        ))}
                    </div>
                    <div className={classes.workSocial}>
                        <a aria-label='Github' href={opt.github} target='_blank' rel='noopener noreferrer'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                            </svg>
                        </a>
                        <a aria-label='Link to the website' href={opt.url} target='_blank' rel='noopener noreferrer'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                                <path d='M272 40C272 35.58 275.6 32 280 32H440C444.4 32 448 35.58 448 40V208C448 212.4 444.4 216 440 216C435.6 216 432 212.4 432 208V59.31L173.7 317.7C170.5 320.8 165.5 320.8 162.3 317.7C159.2 314.5 159.2 309.5 162.3 306.3L420.7 48H280C275.6 48 272 44.42 272 40V40zM0 136C0 113.9 17.91 96 40 96H160C164.4 96 168 99.58 168 104C168 108.4 164.4 112 160 112H40C26.75 112 16 122.7 16 136V440C16 453.3 26.75 464 40 464H344C357.3 464 368 453.3 368 440V320C368 315.6 371.6 312 376 312C380.4 312 384 315.6 384 320V440C384 462.1 366.1 480 344 480H40C17.91 480 0 462.1 0 440V136z' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={classes.container}>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/works' />
                <meta property='og:title' content={`Lily Barberou | ${translations.works}`} />
                <meta property='og:url' content='https://lilybarberou.fr/works' />
                <title>Lily Barberou | {translations.works}</title>
            </Head>
            <div className={classes.title}>
                <h1 className={`${lang === 'fr-FR' ? '' : 'en'}`}>{translations.works}</h1>
            </div>
            <Separation />
            {Object.values(worksList)[0].map((work, i) => (
                <Fragment key={i}>
                    <Work opt={work} />
                    {i !== Object.values(worksList)[0].length - 1 && <Separation />}
                </Fragment>
            ))}
        </div>
    );
};

export default Works;
