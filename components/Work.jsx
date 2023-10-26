import Image from 'next/image';
import styled from 'styled-components';
import BrushFrame from '@public/static/svg/brushFrame.svg';

const Work = ({ opt, lang }) => {
    const language = lang === 'fr-FR' ? 'fr' : 'en';
    const title = opt.title ? opt.title : language === 'fr' ? opt.frTitle : opt.enTitle;
    const desc = language === 'fr' ? opt.frDesc : opt.enDesc;

    return (
        <S.Work id={title.toLowerCase().replace(/\s/g, '')}>
            <a aria-label='Link to the website' href={opt.url} target='_blank' rel='noopener noreferrer'>
                <Image src={opt.img} alt={title} width='560' height='240' className='bnw' />
            </a>
            <S.DesktopTech>
                {opt.techs.map((e, i) => (
                    <div key={i}>
                        <BrushFrame />
                        <span>{e}</span>
                    </div>
                ))}
            </S.DesktopTech>

            <span>{title}</span>
            <p>{desc}</p>
            <S.WorkFooter>
                <div>
                    {opt.techs.map((e, i) => (
                        <span key={i}>{e}</span>
                    ))}
                </div>
                <S.WorkSocial>
                    {opt.github && <a aria-label='Github' href={opt.github} target='_blank' rel='noopener noreferrer'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                            <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                        </svg>
                    </a>}
                    <a aria-label='Link to the website' href={opt.url} target='_blank' rel='noopener noreferrer'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                            <path d='M272 40C272 35.58 275.6 32 280 32H440C444.4 32 448 35.58 448 40V208C448 212.4 444.4 216 440 216C435.6 216 432 212.4 432 208V59.31L173.7 317.7C170.5 320.8 165.5 320.8 162.3 317.7C159.2 314.5 159.2 309.5 162.3 306.3L420.7 48H280C275.6 48 272 44.42 272 40V40zM0 136C0 113.9 17.91 96 40 96H160C164.4 96 168 99.58 168 104C168 108.4 164.4 112 160 112H40C26.75 112 16 122.7 16 136V440C16 453.3 26.75 464 40 464H344C357.3 464 368 453.3 368 440V320C368 315.6 371.6 312 376 312C380.4 312 384 315.6 384 320V440C384 462.1 366.1 480 344 480H40C17.91 480 0 462.1 0 440V136z' />
                        </svg>
                    </a>
                </S.WorkSocial>
            </S.WorkFooter>
        </S.Work>
    );
};

const S = {};
S.Work = styled.div`
    width: 100%;
    font-family: var(--poppins);

    > a > img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        margin-bottom: 5px;
        cursor: pointer;
    }

    > span {
        font-size: 18px;
        text-transform: uppercase;
    }

    > p {
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 30px;
    }

    :last-child {
        margin-bottom: 30px;
    }

    @media (min-width: 600px) {
        padding: 20px 0;
        box-sizing: border-box;
        width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 10px;

        > a > img {
            height: 240px;
            width: 400px;
        }

        > span {
            font-size: 24px;
            margin-top: 35px;
            margin-bottom: 15px;
        }

        > p {
            font-size: 13px;
        }

        :last-child {
            margin-bottom: 0;
            margin-right: 100px;
        }
    }
`;

S.DesktopTech = styled.div`
    display: none;

    @media (min-width: 600px) {
        display: flex;
        margin-top: 15px;
        gap: 5px;

        > div {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 40px;

            > svg {
                position: absolute;
                transform: scale(0.5, 0.7);
            }

            > span {
                font-size: 13px;
            }
        }
    }
`;

S.WorkFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    // techs
    > div:first-child {
        display: flex;
        gap: 10px;

        > span {
            padding: 5px 10px;
            height: fit-content;
            font-size: 12px;
            background: var(--color-pink-darker);
        }
    }

    @media (min-width: 600px) {
        justify-content: flex-end;
        margin-top: auto;

        // techs
        > div:first-child {
            display: none;
        }
    }
`;

S.WorkSocial = styled.div`
    display: flex;
    gap: 10px;

    > a {
        border-radius: 50%;
        display: flex;
        background: var(--color-pink-darker);
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        height: 35px;
        width: 35px;

        > svg {
            fill: #fff;
            padding: 6px;
        }

        :last-child > svg {
            width: 16px;
            padding: 0;
        }
    }

    @media (min-width: 600px) {
        gap: 15px;

        > a {
            height: 40px;
            width: 40px;
        }
    }
`;

export default Work;
