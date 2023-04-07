import { useEffect } from 'react';
import Image from 'next/future/image';
import styled from 'styled-components';
import Parallax from '@contexts/Utils';
import Separation from '@components/Separation';
import Info from '@components/Info';
import MusicPlayer from '@components/MusicPlayer';
import BrushFrame from '@public/static/svg/brushFrame.svg';
import Arrow from '@public/static/svg/arrow.svg';
import * as i from '@public/static/imagesIndex';
import { songs } from '@public/static/songs';

const AboutInfo = ({ onClick, translations }) => {
    useEffect(() => {
        // ─── PARALLAX ─────────────────────────────────────────
        if (window.matchMedia('(min-width: 600px)').matches) {
            // ─── GOURMET ─────────────────────────────────────────
            // pho
            new Parallax({
                reference: '#gourmet',
                target: '#gourmet > img:first-child',
                styles: {
                    transform: 'translateX(${-coef*50}px)',
                },
            });

            // glace
            new Parallax({
                reference: '#gourmet',
                target: '#gourmet > img:nth-child(2)',
                styles: {
                    transform: 'translateX(${coef*50}px)',
                },
            });

            // info
            new Parallax({
                reference: '#gourmet',
                target: '#gourmet .info',
                styles: {
                    transform: 'translateX(${coef*100}px)',
                },
            });

            // ─── OTAKU ─────────────────────────────────────────
            // totoro
            new Parallax({
                reference: '#otaku',
                target: '#otaku > img:first-child',
                styles: {
                    transform: 'translateX(${coef*50}px)',
                },
            });

            // bouba
            new Parallax({
                reference: '#otaku',
                target: '#otaku > img:nth-child(2)',
                styles: {
                    transform: 'translateX(${-coef*30}px)',
                },
            });

            // info
            new Parallax({
                reference: '#otaku',
                target: '#otaku .info',
                styles: {
                    transform: 'translateX(${coef*100}px)',
                },
            });

            // ─── MUSIC ─────────────────────────────────────────
            new Parallax({
                reference: '#musique',
                target: '#musique > .title',
                styles: {
                    transform: 'rotate(-180deg) translateY(${coef*500-400}px)',
                },
            });

            let container = document.querySelector('#musique');
            let cursor = document.querySelector('#musique-cursor');

            const onMouseMove = (e) => {
                cursor.style.left = e.pageX + 20 + 'px';
                cursor.style.top = e.pageY + 15 + 'px';
            };

            const toggleOpacity = (val) => (cursor.style.opacity = val);

            container.addEventListener('mouseover', () => toggleOpacity(1));
            container.addEventListener('mouseout', () => toggleOpacity(0));
            container.addEventListener('mousemove', onMouseMove);

            // ─── BADMINTON ─────────────────────────────────────────
            new Parallax({
                reference: '#badminton',
                target: '#badminton > img:nth-child(4)',
                styles: {
                    transform: 'rotate(${coef*100}deg)',
                },
            });
            new Parallax({
                reference: '#badminton',
                target: '#badminton > img:nth-child(5)',
                styles: {
                    transform: 'rotate(${coef*100-100}deg)',
                },
            });
            new Parallax({
                reference: '#badminton',
                target: '#badminton > img:nth-child(6)',
                styles: {
                    transform: 'translate(${-coef*100}px, ${-coef*100}px)',
                },
            });
            new Parallax({
                reference: '#badminton',
                target: '#badminton > img:nth-child(7)',
                styles: {
                    transform: 'rotate(${coef*100}deg) translate(${-coef*100}px, ${-coef*100}px)',
                },
            });
            new Parallax({
                reference: '#badminton',
                target: '#badminton > .info:nth-child(2)',
                styles: {
                    transform: 'translateX(${coef*50}px)',
                },
            });
            new Parallax({
                reference: '#badminton',
                target: '#badminton > .info:nth-child(3)',
                styles: {
                    transform: 'translateX(${coef*200}px)',
                },
            });

            // ─── VIDEO GAMES ─────────────────────────────────────────
            new Parallax({
                reference: '#jeux-videos',
                target: '#jeux-videos > div > .info:first-child',
                styles: {
                    transform: 'translateX(${coef*150}px)',
                },
            });

            new Parallax({
                reference: '#jeux-videos',
                target: '#jeux-videos > div > .info:last-child',
                styles: {
                    transform: 'translateX(${-coef*100}px)',
                },
            });

            // ─── ARTIST ─────────────────────────────────────────
            // info
            new Parallax({
                reference: '#artiste',
                target: '#artiste .info',
                styles: {
                    transform: 'translateX(${coef*150}px)',
                },
            });

            // last pic
            new Parallax({
                reference: '#footer',
                target: '#artiste img:nth-child(8)',
                styles: {
                    transform: 'translateX(${coef*100}px)',
                },
            });
        }
    }, []);

    return (
        <>
            <h2 id='about-info-title' dangerouslySetInnerHTML={{ __html: translations.nutshell }}></h2>
            <Separation />
            {/* ──── GOURMET PART ──────────────────────────────────────────────────────────── */}
            <S.GourmetContainer id='gourmet'>
                <S.GourmetImg>
                    <Image className='bnw' src={i.Pho} alt='Pho' width={800} height={600} />
                </S.GourmetImg>
                <Image className='bnw' src={i.Glace} alt='Glace' width={300} height={480} />
                <S.GourmetText>
                    <h2>GOURMET</h2>
                    <Info text='Phô > Couscous > all' />
                </S.GourmetText>
            </S.GourmetContainer>
            {/* ──── OTAKU PART ──────────────────────────────────────────────────────────── */}
            <S.OtakuContainer id='otaku'>
                <S.OtakuImg>
                    <Image className='bnw' src={i.Totoro} alt='Totoro' width={650} height={800} />
                </S.OtakuImg>
                <Image className='bnw' src={i.Bouba} alt='Bouba' width={270} height={360} />
                <S.OtakuText>
                    <h2>OTAKU</h2>
                    <Info text={translations.bouba} />
                </S.OtakuText>
            </S.OtakuContainer>
            <Separation />
            {/* ──── MUSIC PART ──────────────────────────────────────────────────────────── */}
            <S.MusicContainer id='musique'>
                <S.MusicText className='title'>
                    <h2>{translations.melophile}</h2>
                    <p>{translations.reggae}</p>
                </S.MusicText>
                <S.MusicList>
                    {songs.map((e, i) => (
                        <MusicPlayer opt={{ ...e, index: i }} key={i} />
                    ))}
                </S.MusicList>
            </S.MusicContainer>
            <Separation />
            {/* ──── BADMINTON PART ──────────────────────────────────────────────────────────── */}
            <S.BadContainer id='badminton'>
                <h2>{translations.addict}</h2>
                <Info text={translations.justbad} />
                <Info text={translations.sporty} />
                <Image className='bnw' src={i.Racket} alt='Racket' width={360} height={360} />
                <Image className='bnw' src={i.Racket} alt='Racket' width={300} height={300} />
                <Image className='bnw' src={i.Volant} alt='Volant' width={140} height={126} />
                <Image className='bnw' src={i.Volant2} alt='Volant' width={195} height={204} />
            </S.BadContainer>
            {/* ──── VIDEO GAMES PART ──────────────────────────────────────────────────────────── */}
            <S.GamesContainer id='jeux-videos'>
                <S.GamesText>
                    <Info text={translations.videogames} />
                    <Info text='LILY.GEEK = 100' />
                </S.GamesText>
                <Image className='bnw' src={i.EldenRing} alt='Elden Ring' width={1236} height={928} />
                <Image className='bnw' src={i.HollowKnight} alt='Hollow Knight' width={1256} height={1440} />
            </S.GamesContainer>
            <Separation />
            {/* ──── ARTIST PART ──────────────────────────────────────────────────────────── */}
            <S.DrawingsContainer id='artiste'>
                <h2>{translations.artist}</h2>
                <S.Drawings id='drawings'>
                    <Info text={translations.complicated} />
                    <Image className='bnw' src={i.Dessin1} width={1236} height={1684} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin2} width={1328} height={1740} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin3} width={500} height={196} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin4} width={3000} height={3000} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin5} width={1920} height={2560} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin6} width={1920} height={2560} alt='Dessin' />
                    <Image className='bnw' src={i.Dessin7} width={1402} height={944} alt='Dessin' />
                </S.Drawings>
            </S.DrawingsContainer>
            <Separation />
            {/* ──── FOOTER PART ──────────────────────────────────────────────────────────── */}
            <S.Footer id='footer'>
                <S.BrushFrame>
                    <p>{translations.theresdev}</p>
                    <BrushFrame />
                </S.BrushFrame>
                <S.DevBtn
                    onClick={() => {
                        window.scrollTo(0, 0);
                        onClick('dev');
                    }}
                >
                    {translations.whereithappens} <Arrow />
                </S.DevBtn>
            </S.Footer>
        </>
    );
};

const S = {};
S.GourmetContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    & > img {
        width: 150px;
        height: 200px;
        align-self: flex-end;
        margin-right: 5%;
        transform: translateY(-100px);
        order: 3;
    }

    @media (min-width: 600px) {
        position: relative;
        flex-direction: row;
        width: unset;
        margin-right: 300px;
        height: 100%;

        & > img {
            position: absolute;
            width: 240px;
            height: 380px;
            z-index: 1;
            bottom: 0;
            right: -100px;
            order: unset;
            margin-right: 0;
            align-self: unset;
            transform: unset;
        }
    }
`;

S.GourmetImg = styled.div`
    width: 100%;
    height: 300px;
    order: 2;

    & > img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 600px) {
        width: 600px;
        height: 450px;
        top: 0;
        margin-left: 80px;
        z-index: 0;
        order: unset;
        align-self: center;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            width: 100%;
            height: 100%;
        }

        &::after {
            content: url(/static/svg/frameTop.svg);
            position: absolute;
            z-index: -1;
            transform: scale(0.75);
            transition: 0.3s;
            right: -21%;
            top: -20.5%;
        }
    }
`;

S.GourmetText = styled.div`
    z-index: 2;
    order: 1;

    h2 {
        font-size: calc(7vw + 11px);
    }
    .info {
        transform: translate(-20px, 360px);
    }

    @media (min-width: 600px) {
        order: unset;

        h2 {
            font-size: 120px;
        }
        .info {
            transform: unset;
            margin-left: 20px;
        }
    }
`;

S.OtakuContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 65px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    & > img {
        order: 3;
        width: 120px;
        height: 170px;
        position: absolute;
        transform: translateY(80px);
    }

    @media (min-width: 600px) {
        align-items: center;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 50px;
        width: 830px;
        margin-bottom: 0;
        height: 100%;

        & > img {
            position: absolute;
            width: 215px;
            height: 290px;
            bottom: 100px;
            left: 0;
            z-index: 1;
            order: unset;
        }
    }
`;

S.OtakuImg = styled.div`
    height: 300px;
    width: fit-content;
    align-self: flex-end;
    order: 2;

    & > img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 600px) {
        position: absolute;
        bottom: 0;
        height: 620px;
        width: auto;
        right: 220px;
        margin-left: 110px;
        z-index: 0;
        order: unset;

        & > img {
            height: 100%;
            width: 100%;
        }

        &::after {
            content: url(/static/svg/frameBottom.svg);
            position: absolute;
            z-index: -1;
            transform: scale(0.75, 0.75);
            transition: 0.3s;
            right: -12%;
            top: -13.5%;
        }
    }
`;

S.OtakuText = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;

    & h2 {
        font-size: calc(7vw + 11px);
    }

    & .info {
        align-self: flex-start;
        transform: translateY(360px);
    }

    @media (min-width: 600px) {
        order: unset;
        align-items: flex-end;

        & h2 {
            font-size: 120px;
        }

        & .info {
            align-self: unset;
            transform: unset;
        }
    }
`;

S.MusicContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;

    @media (min-width: 600px) {
        flex-direction: row;
        height: 100%;
    }
`;

S.MusicText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    & h2 {
        font-size: calc(8vw + 7px);
        color: var(--color-pink);
    }

    & p {
        font-family: Poppins;
        font-size: 12px;
    }

    @media (min-width: 600px) {
        width: fit-content;
        flex-direction: row-reverse;
        transition: 0.5s all;
        transform: rotate(-180deg) translateY(-620px);
        margin-bottom: 0;

        & h2 {
            font-size: 92px;
            writing-mode: vertical-lr;
            pointer-events: none;
        }

        & p {
            font-size: 20px;
            writing-mode: vertical-lr;
            pointer-events: none;
        }
    }
`;

S.MusicList = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 600px) {
        align-items: flex-start;
        padding-left: 120px;
        height: 100%;
    }
`;

S.BadContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 15px;
    height: 450px;
    margin-bottom: 30px;
    width: 100%;

    & h2 {
        font-size: calc(7vw + 11px);
        color: #fff;
        z-index: 10;
    }

    & > .info {
        position: absolute;
        top: 330px;
        right: 20px;
    }

    & > .info:nth-child(3) {
        margin-top: 45px;
        margin-right: 40px;
    }

    & img {
        position: absolute;
        height: fit-content;
        z-index: 2;
    }

    /* raquette */
    & > img:nth-child(4) {
        width: 200px;
        top: 80px;
        left: 5%;
    }

    & > img:nth-child(5) {
        display: none;
        bottom: 0;
        right: 45%;
        transform: rotate(80deg);
    }

    & > img:nth-child(6) {
        display: none;
        bottom: 15%;
        left: 0;
        transform: rotate(-60deg);
    }

    /* volant */
    & > img:nth-child(7) {
        width: 70px;
        height: auto;
        top: 120px;
        right: 20%;
        transform: rotate(90deg);
    }

    @media (min-width: 600px) {
        align-items: unset;
        justify-content: center;
        width: 880px;
        padding: 0 200px;
        margin-bottom: 0;
        height: 100%;

        & h2 {
            font-size: 100px;
        }

        & > .info {
            right: unset;
            top: 65%;
            left: 50%;
        }

        & > .info:nth-child(3) {
            margin-top: 70px;
            margin-left: 70px;
            margin-right: 0;
        }

        & > img:nth-child(4) {
            top: 0;
            left: 0;
            width: 260px;
        }

        & > img:nth-child(5) {
            display: block;
            width: 220px;
        }

        & > img:nth-child(6) {
            display: block;
            width: 110px;
        }

        & > img:nth-child(7) {
            top: 10%;
            width: 140px;
        }
    }
`;

S.GamesContainer = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    box-sizing: border-box;

    /* Elden Ring */
    & img:nth-child(2) {
        width: 100%;
        height: fit-content;
    }

    /* Hollow Knight */
    & img:nth-child(3) {
        width: fit-content;
        max-height: 300px;
    }

    @media (min-width: 600px) {
        width: fit-content;
        height: 100%;
        flex-direction: row;

        & img:nth-child(2) {
            max-height: unset;
            margin-top: 0;
            width: fit-content;
            height: 90%;
        }

        & img:nth-child(3) {
            width: 450px;
            max-height: unset;
            height: 90%;
        }
    }
`;

S.GamesText = styled.div`
    z-index: 2;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;

    @media (min-width: 600px) {
        transform: translateX(-70px);
        gap: 15px;
        margin-bottom: 0;
        margin-top: 100px;
        position: absolute;
    }
`;

S.DrawingsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 955px;
    align-items: center;
    width: 100%;

    & h2 {
        font-size: calc(7vw + 11px);
    }

    & .info {
        position: absolute;
        top: 260px;
        right: 0;
        z-index: 9;
    }

    @media (min-width: 600px) {
        width: 2715px;
        display: block;
        height: 100%;

        & h2 {
            font-size: 110px;
            position: absolute;
            left: 0;
            bottom: 10%;
        }

        & .info {
            right: unset;
            top: 50%;
            left: 350px;
        }
    }
`;

S.Drawings = styled.div`
    & img {
        position: absolute;
    }

    & img:nth-child(2) {
        height: fit-content;
        width: 150px;
        top: 110px;
        left: 0;
        z-index: 2;
    }

    & img:nth-child(3) {
        height: fit-content;
        width: 150px;
        top: 110px;
        right: 0;
        z-index: 3;
    }

    & img:nth-child(4) {
        width: 50%;
        height: 120px;
        top: 380px;
        right: 0;
        z-index: 4;
    }

    & img:nth-child(5) {
        height: fit-content;
        width: 60%;
        top: 400px;
        left: 0;
        z-index: 10;
    }

    & img:nth-child(6) {
        width: 50%;
        height: fit-content;
        top: 550px;
        right: 0;
        z-index: 7;
    }

    & img:nth-child(7) {
        width: 55%;
        height: fit-content;
        top: 610px;
        left: 0;
        z-index: 6;
    }

    & img:nth-child(8) {
        width: 70%;
        height: fit-content;
        top: 810px;
        right: 0;
        z-index: 7;
    }

    @media (min-width: 600px) {
        & img:nth-child(2) {
            width: 175px;
            height: fit-content;
            top: 10%;
            left: 490px;
        }

        & img:nth-child(3) {
            width: 175px;
            height: fit-content;
            top: unset;
            right: unset;
            bottom: 10%;
            left: 590px;
        }

        & img:nth-child(4) {
            width: 420px;
            height: 200px;
            right: unset;
            top: 5%;
            left: 860px;
        }

        & img:nth-child(5) {
            width: 380px;
            height: 370px;
            z-index: 5;
            top: unset;
            bottom: 0;
            left: 810px;
        }

        & img:nth-child(6) {
            width: 460px;
            height: auto;
            max-height: 100%;
            right: unset;
            top: 0;
            left: 1240px;
            z-index: 6;
        }

        & img:nth-child(7) {
            width: 460px;
            height: auto;
            max-height: 100%;
            top: unset;
            bottom: 0;
            left: 1740px;
            z-index: 7;
        }

        & img:nth-child(8) {
            width: 560px;
            height: 360px;
            right: unset;
            top: 20%;
            left: 2130px;
            z-index: 8;
        }
    }
`;

S.Footer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 600px) {
        justify-content: center;
        align-items: center;
        width: 300px;
        gap: 40px;
        margin-right: 100px;
        margin-left: 110px;
    }
`;

S.BrushFrame = styled.div`
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-family: 'Poppins';
    text-align: center;
    font-weight: lighter;
    margin-bottom: 50px;
    margin-left: 40px;
    margin-top: 20px;

    & > svg {
        position: absolute;
        transform: scale(1.1, 1);
    }

    @media (min-width: 600px) {
        white-space: nowrap;
        margin: 0;
        margin-right: 400px;
        font-size: 14px;

        & > svg {
            position: absolute;
            transform: scaleX(1.4);
        }
    }
`;

S.DevBtn = styled.button`
  background: var(--color-pink);
  border: 2px solid var(--color-pink);
  color: #fff;
  fill: #fff;
  font-size: 11px;
  font-family: 'Poppins';
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  justify-content: center;
  width: fit-content;
  gap: 10px;
  line-height: 1;
  min-width: 150px;
  align-self: flex-end;
  margin-bottom: 40px;
  margin-right: 20px;

  & > svg {
    height: 17px;
  }

  @media (min-width: 600px) {
    align-self: flex-end;
    font-size: 14px;
    gap: 15px;
    min-width: 215px;
    cursor: pointer;
  }
}
`;

export default AboutInfo;
