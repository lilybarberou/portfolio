import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '@components/Button';
import Separation from '@components/Separation';
import Parallax, { t } from '@contexts/Utils';
import BrushFrame from '@public/static/svg/brushFrame.svg';
import Download from '@public/static/svg/download.svg';
import works from '@contexts/works.json';

const Home = ({ lang }) => {
    const translations = t('home', lang);
    const carousel = useRef(null);
    const cvLink = lang === 'fr-FR' ? process.env.NEXT_PUBLIC_CV_FR_LINK : process.env.NEXT_PUBLIC_CV_EN_LINK;

    useEffect(() => {
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

    const handleScroll = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            carousel.current.scrollLeft = carousel.current.scrollLeft + 200;
        } else carousel.current.scrollTop = carousel.current.scrollTop + 200;
    };

    const handleWorksClick = () => (document.querySelector('.app').scrollTop = 0);

    return (
        <S.Container>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/' />
                <meta property='og:title' content='Lily Barberou | Portfolio' />
                <meta property='og:url' content='https://lilybarberou.fr/' />
                <meta property='og:image' content={`${process.env.NEXT_PUBLIC_SCREENSHOT_LINK}/lilybarberou.fr.png`} />
                <meta
                    property='og:description'
                    content='Découvrez le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js. Réalisations et train de vie vous y attendent.'
                />
                <meta
                    name='description'
                    content='Découvrez le portfolio de Lily Barberou, développeuse web full-stack spécialisée en React / Node.js. Réalisations et train de vie vous y attendent.'
                />
                <title>Lily Barberou | Portfolio</title>
            </Head>

            {/* ----- LILY PART --------------------------------------------------------- */}
            <S.Hello>HELLO</S.Hello>
            <S.Lily lang={lang}>
                <h1 id='home-title' dangerouslySetInnerHTML={{ __html: translations.title }}></h1>
                <S.Buttons>
                    <S.Download href={cvLink} target='_blank' rel='noopener noreferrer'>
                        <span>CV</span>
                        <Download />
                    </S.Download>
                    <Button text={translations.knowmemore} link='/a-propos-de-lily' />
                </S.Buttons>
            </S.Lily>
            <Separation id='separation' />

            {/* ----- WORKS PART --------------------------------------------------------- */}
            <S.Works>
                <S.WorksText id='things-ive-built' dangerouslySetInnerHTML={{ __html: translations.somethings }}></S.WorksText>
                <S.BrushFrame>
                    <p dangerouslySetInnerHTML={{ __html: translations.lovejsreact }}></p>
                    <BrushFrame />
                </S.BrushFrame>
            </S.Works>
            <S.WorksContainer>
                <S.CarouselContainer>
                    <S.Carousel id='home-carousel' ref={carousel}>
                        {works.map((e) => (
                            <Link key={e.name} href={e.link}>
                                <Image src={e.img} width='400' height='220' alt={e.name} className='bnw' />
                            </Link>
                        ))}
                    </S.Carousel>
                </S.CarouselContainer>
                <S.ArrowContainer onClick={handleScroll}>
                    <S.Arrow></S.Arrow>
                </S.ArrowContainer>
                <Button text={translations.showmore} link='/realisations' onClick={handleWorksClick} />
            </S.WorksContainer>
            <Separation />

            {/* ----- CONTACT PART --------------------------------------------------------- */}
            <S.Contact>
                <h2>{translations.getintouch}</h2>
                <Button text={translations.sayhello} link='/contact' />
            </S.Contact>
        </S.Container>
    );
};

const S = {};
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;

    @media (min-width: 600px) {
        flex-direction: row;
        padding-bottom: 0;
    }
`;

S.Hello = styled.span`
    font-size: 50px;
    margin-bottom: 50px;

    @media (min-width: 600px) {
        font-size: 150px;
        margin-bottom: 0;
        margin: 0 170px;
    }
`;

S.Lily = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: lighter;
        font-size: 21px;
        gap: 5px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 1.6;

        & > span:first-child {
            font-size: 35px;
        }
    }

    @media (min-width: 600px) {
        align-items: flex-start;

        & > h1 {
            font-size: 30px;
            margin-bottom: 40px;
            margin-right: 50px;
            white-space: nowrap;
            align-items: flex-start;

            & > span:first-child {
                font-size: 40px !important;
                margin-bottom: 20px;
            }

            & > span:last-child {
                display: flex;
                gap: 10px;
                align-self: center;
            }

            & .svg {
                align-self: center;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                &::after {
                    content: url(/static/svg/activeMenu.svg);
                    position: absolute;
                    top: 20%;
                    z-index: -1;
                    transform: ${(props) => (props.lang === 'fr-FR' ? 'scale(1.5, 1)' : 'scale(1.1, 1)')};
                    transition: 0.3s;
                }
            }
        }
    }
`;

S.Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

S.Download = styled.a`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    padding: 11px 25px;
    font-family: Poppins;
    font-size: 11px;
    gap: 10px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    & > svg {
        width: 15px;
        height: auto;
        filter: invert(1);

        & > image {
            width: 15px;
            height: auto;
        }
    }

    & > span {
        line-height: 1;
    }

    @media (min-width: 600px) {
        font-size: 13px;

        & > svg {
            width: 17px;

            & > image {
                width: 17px;
            }
        }
    }
`;

S.Works = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        align-items: flex-end;
        margin-right: 250px;
    }
`;

S.WorksText = styled.h2`
    font-size: 30px;
    text-align: center;
    line-height: 1.5;

    @media (min-width: 600px) {
        font-size: 40px;
        white-space: nowrap;
        text-align: start;
        display: flex;
        flex-direction: column;
    }
`;

S.BrushFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-family: 'Poppins';
    text-align: center;
    margin-top: 55px;
    font-weight: lighter;
    margin-bottom: 70px;

    & > svg {
        position: absolute;
    }

    @media (min-width: 600px) {
        font-size: 13px;

        & > svg {
            transform: scale(1.2);
        }
    }
`;

S.WorksContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;

    @media (min-width: 600px) {
        position: relative;
        justify-content: space-between;

        & .button {
            width: 100%;
            box-sizing: border-box;
            padding: 14px 25px;
        }
    }
`;

S.CarouselContainer = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 100%;

    @media (min-width: 600px) {
        width: fit-content;
        max-width: unset;
        height: 100%;
        margin-bottom: 15px;
    }
`;

S.Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    height: 120px;
    gap: 20px;

    & img {
        width: 200px;
        height: 120px;
    }

    @media (min-width: 600px) {
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        gap: 10px;

        & img {
            width: 400px;
            height: 220px;
        }
    }
`;

S.ArrowContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    @media (min-width: 600px) {
        width: 130px;
        height: 50px;
        flex-direction: column;
        position: absolute;
        cursor: pointer;
        bottom: 0;
        left: 0;
        transform-origin: bottom left;
        transform: rotate(90deg) translate(-100%, 130%);
        margin-bottom: 62px;
        margin-right: 20px;
    }
`;

S.Arrow = styled.span`
    width: 130px;
    height: 0.5px;
    background: #818181;
    margin: 25px 25px 40px 0;
    align-self: flex-end;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: -0.5px;
        bottom: 0;
        transform-origin: right bottom;
        transform: rotate(-45deg);
        width: 5px;
        height: 5px;
        border-right: 0.7px solid #818181;
        border-bottom: 0.7px solid #818181;
    }

    @media (min-width: 600px) {
        margin: 0;
    }
`;

S.Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        font-size: 32px;
        margin-bottom: 30px;
    }

    @media (min-width: 600px) {
        margin-right: 80px;

        & > h2 {
            font-size: 60px;
            white-space: nowrap;
            margin-bottom: 40px;
        }
    }
`;

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Home;
