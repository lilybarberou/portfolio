import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Parallax from '@contexts/Utils';
import Separation from '@components/Separation';
import BrushFrame from '@public/static/svg/brushFrame.svg';
import Arrow from '@public/static/svg/arrow.svg';

const useStyle = createUseStyles({
    title: {
        '@media (min-width: 600px)': {
            marginRight: '280px !important',
        },
    },
    devDesign: {
        display: 'flex',
        fontFamily: 'Poppins',
        fontSize: 17,
        gap: 40,

        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,

            '& > span': {
                whiteSpace: 'nowrap',

                '&:first-child': {
                    color: 'var(--color-pink)',
                    marginBottom: 15,
                },
            },
        },
        '& > svg': {
            transform: 'scale(1, 1.1)',
        },
        '@media (min-width: 600px)': {
            fontSize: 19,
            alignItems: 'center',
            gap: 80,
            marginRight: 200,

            '& > div': {
                gap: 10,

                '& > span:first-child': {
                    marginBottom: '30px !important',
                    fontSize: 22,
                },
            },
            '& > svg': {
                transform: 'scale(1.2, 1.5)',
            },
        },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        fontFamily: 'Poppins',
        fontSize: 12,
        width: '100%',
        marginTop: 70,
        padding: '0 20px',
        boxSizing: 'border-box',

        '& > p': {
            maxWidth: 160,

            '& > span': {
                color: 'var(--color-pink)',
            },
            '&:nth-child(2)': {
                alignSelf: 'flex-end',
            },
        },
        '@media (min-width: 600px)': {
            flexDirection: 'row',
            gap: 100,
            fontSize: 16,
            marginTop: 0,
            height: '50%',
            width: 'fit-content',

            '& > p': {
                maxWidth: 220,
                width: 220,
            },
        },
    },
    experienceTitle: {
        '& > h2': {
            fontSize: 40,
            marginBottom: 15,
        },

        '@media (min-width: 600px)': {
            width: 110,
            marginRight: 100,
            display: 'flex',
            justifyContent: 'center',

            '& > h2': {
                transform: 'rotate(-90deg)',
                fontSize: 'calc(14vh - 9px)',
                pointerEvents: 'none',
            },
        },
    },
    experiences: {
        '@media (min-width: 600px)': {
            marginRight: 260,

            '& + .separation': {
                display: 'none',
            },
        },
    },
    experience: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins',
        position: 'relative',
        paddingBottom: 30,
        paddingTop: 30,
        width: 300,

        '& > p:first-child': {
            fontSize: 17,
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 5,
            width: '100%',

            '& > span:first-child': {
                color: 'var(--color-pink)',
            },
        },
        '& > p:last-child': {
            fontSize: 12,
            width: '100%',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            height: 1,
            backgroundColor: 'var(--color-grey)',
            width: 180,
        },
        '&.last': {
            paddingBottom: 0,
            '&::after': {
                display: 'none',
            },
        },
        '@media (min-width: 600px)': {
            paddingBottom: 40,
            paddingTop: 40,

            '& > p:first-child': {
                fontSize: 18,
            },
            '& > p:last-child': {
                fontSize: 13,
            },
            '&:first-child': {
                paddingTop: 0,
            },
        },
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        '@media (min-width: 600px)': {
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            gap: 40,
            marginRight: 100,
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
        margin: '20px 0 50px 40px',

        '& > svg': {
            position: 'absolute',
            transform: 'scaleX(1.1)',
        },
        '@media (min-width: 600px)': {
            whiteSpace: 'nowrap',
            margin: 0,
            marginRight: 400,
            fontSize: 14,

            '& > svg': {
                position: 'absolute',
                transform: 'scaleX(1.4)',
            },
        },
    },
    infoBtn: {
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
        minWidth: 150,
        alignSelf: 'flex-end',
        marginBottom: 40,
        marginRight: 20,

        '& > svg': {
            height: 17,
        },
        '@media (min-width: 600px)': {
            alignSelf: 'flex-end',
            fontSize: 14,
            gap: 15,
            minWidth: 215,
            cursor: 'pointer',
        },
    },
});

const AboutDev = ({ onClick, translations, lang }) => {
    const classes = useStyle();

    useEffect(() => {
        // ─── PARALLAX ─────────────────────────────────────────
        if (window.matchMedia('(min-width: 600px)').matches) {
            // ─── BRUSH ─────────────────────────────────────────
            new Parallax({
                reference: '.dev-content > h2 > span:first-child',
                target: '#dev-design-brush',
                styles: {
                    transform: 'scaleY(${coef*1.7})',
                },
            });
            // ─── TEXTS ─────────────────────────────────────────
            new Parallax({
                reference: '#texts',
                target: '#text1',
                styles: {
                    transform: 'translateY(${coef*50}px)',
                },
            });
            new Parallax({
                reference: '#texts',
                target: '#text2',
                styles: {
                    transform: 'translateY(${-coef*50}px)',
                },
            });
            new Parallax({
                reference: '#texts',
                target: '#text3',
                styles: {
                    transform: 'translateY(${coef*50}px)',
                },
            });
        }
    }, []);

    const frExperience = [
        { company: 'Olwe Développement', desc: 'web dev full-stack react/node.js - designer', duration: 'Now' },
        { company: 'Lycée Charles Pointet', desc: 'web dev full-stack react/node.js', duration: '2 mois' },
        { company: 'ITDM', desc: 'web dev front - Wordpress', duration: '2 mois' },
        { company: 'Rainbow Studio', desc: 'web dev front', duration: '1 mois' },
    ];

    const enExperience = [
        { company: 'Olwe Développement', desc: 'web dev full-stack react/node.js - designer', duration: 'Now' },
        { company: 'Lycée Charles Pointet', desc: 'web dev full-stack react/node.js', duration: '2 months' },
        { company: 'ITDM', desc: 'web dev front - Wordpress', duration: '2 months' },
        { company: 'Rainbow Studio', desc: 'web dev front', duration: '1 month' },
    ];

    const renderExperiences = (obj) => (
        <div className={classes.experiences}>
            {obj.map((e, i) => (
                <div key={i} className={`${classes.experience} ${i === obj.length - 1 ? 'last' : ''}`}>
                    <p>
                        <span>{e.company}</span>
                        <span>{e.duration}</span>
                    </p>
                    <p>{e.desc}</p>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h2 className={classes.title}>
                <span>{translations.front}</span>
                <span>{translations.back}</span>
            </h2>
            <div className={classes.devDesign}>
                <div>
                    <span>Web Dev</span>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Node.js</span>
                </div>
                <svg id="dev-design-brush" width="30" height="172" viewBox="0 0 30 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.12371 5.10857C1.04913 2.43134 1.06515 0.185494 1.15958 0.117962C1.35515 -0.0222002 3.34131 -0.0425991 4.41393 0.0845377C5.04899 0.159857 5.13414 0.261105 5.13414 0.940537C5.13414 1.41808 5.0125 1.67773 4.81405 1.6235C4.63192 1.57367 4.49396 1.69557 4.49396 1.90666C4.49396 2.11775 4.63192 2.23965 4.81405 2.18981C5.02018 2.13347 5.13414 2.66311 5.13414 3.67638C5.13414 4.68965 5.02018 5.21929 4.81405 5.16295C4.638 5.11481 4.49175 4.80842 4.48919 4.48209C4.48631 4.15575 4.37039 3.80948 4.23115 3.71264C3.87937 3.46757 3.81982 7.36604 4.15816 8.49002C4.40271 9.3031 4.42928 9.20839 4.38447 7.67581C4.35662 6.72172 4.35823 5.94134 4.38768 5.94148C4.41744 5.94148 4.63768 5.90836 4.87742 5.86759C5.23721 5.80657 5.29645 6.20992 5.21643 8.16822C5.02981 12.7374 4.98884 13.0629 4.58969 13.123C4.32497 13.1631 4.17001 12.9034 4.09126 12.2867C4.02853 11.7949 3.92163 14.1956 3.85409 17.6218C3.78623 21.048 3.70495 25.0935 3.67294 26.612C3.64125 28.1304 3.59415 31.5547 3.56822 34.2218C3.52597 38.5894 3.33551 39.6925 2.78496 38.7612C2.68445 38.5908 2.67935 38.1927 2.77409 37.8763C2.86852 37.5599 2.80768 37.1418 2.63835 36.9471C2.38452 36.6549 2.29336 36.7905 2.11539 37.7258C1.74601 39.6651 1.70148 39.5175 1.65667 36.2038C1.62978 34.2059 1.73093 32.983 1.92331 32.983C2.10128 32.983 2.27667 33.7228 2.33428 34.7173C2.38966 35.6712 2.46616 34.811 2.50425 32.806C2.55835 29.9521 2.48667 29.168 2.1733 29.1958C1.94444 29.216 1.72803 29.0562 1.66753 28.8223C1.58399 28.4979 1.66657 28.4312 2.06764 28.4993C2.47672 28.5687 2.57341 28.4767 2.57341 28.0171C2.57341 27.5546 2.46938 27.4568 2.01325 27.4906C1.48671 27.5297 1.45114 27.1283 1.42106 20.7928C1.40345 17.086 1.31579 13.9961 1.22585 13.9263C1.1359 13.8564 1.17906 13.3532 1.32119 12.8081C1.46363 12.2631 1.5706 11.5623 1.55875 11.2508C1.53859 10.7139 1.52546 10.7066 1.30556 11.1092C1.1087 11.4695 1.03506 11.4947 0.819637 11.2756C0.680078 11.1334 0.722015 10.783 0.912789 10.4969C1.14453 10.1492 1.21461 8.36231 1.12371 5.10857Z"
                        fill="#C15959"
                    />
                    <path
                        d="M26.6637 29.6559C26.3228 23.8334 25.9263 0.272999 26.1663 0.0940444C26.2502 0.0316086 26.4858 0.00485823 26.6897 0.0347311C26.9262 0.0694177 27.0939 0.570453 27.1535 1.42134C27.2047 2.154 27.3801 2.81261 27.5434 2.88481C27.7258 2.96551 27.7651 2.46956 27.6448 1.5973C27.502 0.560956 27.5539 0.149981 27.8362 0.0728217C28.0491 0.0146333 28.275 -0.0100305 28.3384 0.0180018C28.4207 0.0543873 29.3938 31.1175 29.5663 39.2124C29.5721 39.4849 29.5391 41.6192 29.493 43.9552C29.437 46.7933 29.5327 48.4488 29.7811 48.9446C30.1063 49.5933 30.0849 49.7166 29.6108 49.9263C29.114 50.1459 29.0753 50.7323 29.1476 56.9003C29.259 66.4096 29.1153 71.9623 28.7898 70.7134C28.5484 69.7876 27.8634 57.2539 27.8305 53.1578C27.8221 52.1455 27.7178 51.208 27.5981 51.0744C27.4783 50.9409 27.3804 54.0149 27.3804 57.9056C27.3804 61.7961 27.5017 64.9794 27.6503 64.9794C27.7985 64.9795 27.8253 65.3459 27.7101 65.7936C27.5949 66.2413 27.488 67.0218 27.4723 67.5279C27.4496 68.2722 27.8263 78.452 27.9152 79.4912C27.9284 79.647 27.9044 80.0292 27.8618 80.3407C27.6889 81.6013 28.1515 160.345 28.3647 165.979C28.5606 171.145 28.5282 172.04 28.1477 171.985C27.8961 171.948 27.6215 171.645 27.5197 171.293L27.3391 170.667L27.1996 171.304C27.1026 171.749 26.9153 171.941 26.5802 171.941C26.1561 171.941 26.0815 169.196 25.94 148.369C25.7864 125.747 25.8517 120.947 26.3091 121.257C26.424 121.335 26.5238 121.74 26.5312 122.157C26.5382 122.574 26.6244 122.951 26.7223 122.995C26.8203 123.038 26.8855 121.168 26.8676 118.838C26.8478 116.305 26.7297 114.8 26.5732 115.094C26.4291 115.365 26.3798 115.635 26.463 115.695C26.5466 115.755 26.4867 115.905 26.3302 116.029C26.0693 116.235 25.715 106.809 25.4724 93.2243C25.4253 90.5768 25.2121 82.3582 24.999 74.9607C24.7858 67.5633 24.5835 58.6439 24.5492 55.1399C24.5153 51.6358 24.3706 48.3866 24.2275 47.9194C24.0495 47.3365 24.0697 47.1344 24.2919 47.2749C24.9612 47.6987 25.0767 46.5993 24.8889 41.5887C24.677 35.935 24.9922 24.7842 25.3264 26.1164C25.4436 26.5836 25.6346 30.024 25.7511 33.7616C25.8676 37.4993 26.0447 41.736 26.1445 43.1766C26.5155 48.522 26.7402 47.2793 26.7402 39.8849C26.7402 35.5103 26.6186 32.2751 26.4541 32.2751C26.2883 32.2751 26.279 31.8443 26.4326 31.2486C26.578 30.684 26.682 29.9674 26.6637 29.6559Z"
                        fill="#C15959"
                    />
                    <path
                        d="M24.8971 15.2504C24.8354 15.776 24.7852 15.3459 24.7852 14.2947C24.7852 13.2435 24.8354 12.8134 24.8971 13.3391C24.9586 13.8647 24.9586 14.7247 24.8971 15.2504Z"
                        fill="#C15959"
                    />
                    <path
                        d="M4.45137 14.1909C4.25195 14.1027 4.17545 13.9307 4.2814 13.8087C4.57428 13.471 4.81405 13.5431 4.81405 13.9691C4.81405 14.2538 4.72152 14.3104 4.45137 14.1909Z"
                        fill="#C15959"
                    />
                    <path
                        d="M4.49396 15.7813C4.31791 15.7331 4.17387 15.5664 4.17387 15.4106C4.17387 15.2549 4.31791 15.1668 4.49396 15.215C4.67001 15.2631 4.81405 15.4299 4.81405 15.5856C4.81405 15.7413 4.67001 15.8294 4.49396 15.7813Z"
                        fill="#C15959"
                    />
                    <path
                        d="M24.9797 19.1083C24.6168 19.1083 24.5604 18.1939 24.8632 17.2169C24.9753 16.8555 25.1193 16.5599 25.1833 16.5599C25.2473 16.5599 25.2998 17.1333 25.2998 17.8341C25.2998 18.5892 25.1696 19.1083 24.9797 19.1083Z"
                        fill="#C15959"
                    />
                    <path
                        d="M4.81405 19.887C4.61207 19.9422 4.49396 19.6026 4.49396 18.9668C4.49396 18.3309 4.61207 17.9913 4.81405 18.0465C4.9901 18.0947 5.13414 18.5088 5.13414 18.9668C5.13414 19.4248 4.9901 19.8389 4.81405 19.887Z"
                        fill="#C15959"
                    />
                    <path
                        d="M25.1984 21.4002C25.0963 21.513 25.0204 21.4795 25.0051 21.3146C24.9913 21.1653 25.0668 21.0818 25.1731 21.1288C25.2793 21.1758 25.2909 21.298 25.1984 21.4002Z"
                        fill="#C15959"
                    />
                    <path
                        d="M25.1984 21.9665C25.0963 22.0794 25.0204 22.0458 25.0051 21.8809C24.9913 21.7316 25.0668 21.6481 25.1731 21.6951C25.2793 21.7421 25.2909 21.8643 25.1984 21.9665Z"
                        fill="#C15959"
                    />
                    <path
                        d="M25.1984 23.6654C25.0963 23.7783 25.0204 23.7447 25.0051 23.5798C24.9913 23.4306 25.0668 23.347 25.1731 23.394C25.2793 23.441 25.2909 23.5632 25.1984 23.6654Z"
                        fill="#C15959"
                    />
                    <path
                        d="M4.45973 24.4883C4.12523 24.4883 4.073 24.0137 4.39213 23.8727C4.70102 23.736 5.1079 24.0705 4.91009 24.2984C4.81982 24.4029 4.61689 24.4883 4.45973 24.4883Z"
                        fill="#C15959"
                    />
                    <path
                        d="M5.35279 28.1959C5.25068 28.3088 5.17482 28.2752 5.15945 28.1103C5.14569 27.9611 5.2212 27.8775 5.32747 27.9245C5.43374 27.9715 5.4453 28.0937 5.35279 28.1959Z"
                        fill="#C15959"
                    />
                    <path
                        d="M4.97409 30.0098C4.71002 30.0098 4.49395 29.9143 4.49395 29.7975C4.49395 29.6807 4.71002 29.5851 4.97409 29.5851C5.23816 29.5851 5.45423 29.6807 5.45423 29.7975C5.45423 29.9143 5.23816 30.0098 4.97409 30.0098Z"
                        fill="#C15959"
                    />
                    <path
                        d="M2.00364 46.2057C1.61313 45.3673 1.48161 40.5128 1.83883 40.1253C1.98127 39.9711 2.16788 41.3159 2.26231 43.1766C2.35513 45.0064 2.46332 46.4241 2.50238 46.3267C2.54143 46.2294 2.69534 46.1497 2.8445 46.1497C2.99367 46.1497 3.19696 50.3068 3.29651 55.3876C3.4319 62.3038 3.57816 64.7323 3.87776 65.0503C4.19369 65.3857 4.26798 71.144 4.22989 92.4362C4.20108 108.547 4.06378 119.43 3.88901 119.478C3.51099 119.581 3.52215 125.452 3.90081 125.663C4.06854 125.757 4.06755 126.293 3.89855 126.962C3.73914 127.592 3.73019 128.375 3.87807 128.714C4.28043 129.635 4.24046 133.275 3.82595 133.459C3.48025 133.612 3.57528 134.872 4.03077 136.17C4.16649 136.556 4.11433 136.842 3.88995 136.942C3.36532 137.174 3.45655 137.979 4.03655 138.236C4.31343 138.358 4.38605 138.458 4.19816 138.458C3.96386 138.458 3.86239 139.746 3.87455 142.564C3.88512 145.026 4.01287 146.67 4.19308 146.67C4.56759 146.67 4.59481 147.478 4.22254 147.543C4.07306 147.569 3.8586 148.979 3.74561 150.677C3.60381 152.814 3.64382 153.735 3.87588 153.672C4.06698 153.62 4.12328 153.403 4.00709 153.169C3.85665 152.866 3.92228 152.758 4.25646 152.758C4.63673 152.758 4.74423 153.686 4.92188 158.515C5.193 165.871 5.19013 168.545 4.91133 168.422C4.51794 168.247 4.49108 167.917 4.46323 162.88C4.44787 160.155 4.32268 157.639 4.18472 157.288L3.93379 156.651L3.87362 157.217C3.78591 158.042 3.92129 166.756 4.03108 167.34C4.0823 167.613 4.234 168.6 4.36844 169.535C4.52337 170.614 4.69591 171.105 4.84123 170.88C5.0192 170.605 5.07744 170.675 5.10209 171.192C5.13314 171.839 5.10338 171.86 4.06437 171.947C3.47605 171.995 2.57951 172.014 2.07217 171.988C1.26042 171.947 1.1154 171.865 0.86253 171.304C0.671756 170.881 0.704079 170.378 0.959511 169.804C1.24983 169.151 1.25462 168.794 0.979985 168.343C0.199925 167.061 -0.413668 110.671 0.349108 110.334C0.762985 110.151 0.802955 96.8053 0.474224 68.3727C0.257524 49.614 0.279965 48.0338 0.766183 47.8187C1.05586 47.6905 1.29305 47.4887 1.29305 47.3702C1.29305 47.2517 1.52544 47.0973 1.80968 47.0269C2.24852 46.9183 2.27764 46.7943 2.00364 46.2057Z"
                        fill="#C15959"
                    />
                    <path
                        d="M28.9101 81.1902L28.8858 79.6328C28.8701 78.6319 28.9601 78.1835 29.1374 78.3777C29.2888 78.5439 29.3 79.2447 29.1617 79.9351L28.9101 81.1902Z"
                        fill="#C15959"
                    />
                    <path
                        d="M29.3672 83.7015C29.2907 83.8776 29.2251 83.7669 29.2216 83.4554C29.218 83.1439 29.2808 82.9998 29.3608 83.1352C29.4408 83.2705 29.4437 83.5253 29.3672 83.7015Z"
                        fill="#C15959"
                    />
                    <path
                        d="M26.2601 119.204C26.0732 119.204 25.94 118.729 25.94 118.063C25.94 117.338 26.0568 116.954 26.2601 117.009C26.4361 117.057 26.5802 117.571 26.5802 118.15C26.5802 118.758 26.4448 119.204 26.2601 119.204Z"
                        fill="#C15959"
                    />
                    <path
                        d="M25.94 120.105C25.94 119.869 26.0482 119.627 26.1801 119.568C26.3119 119.508 26.4675 119.633 26.5251 119.845C26.583 120.056 26.4748 120.298 26.285 120.382C26.0382 120.491 25.94 120.412 25.94 120.105Z"
                        fill="#C15959"
                    />
                </svg>
                <div>
                    <span>Design</span>
                    <span>Figma</span>
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>Brain Ideas</span>
                </div>
            </div>

            {/* ─── TEXTS ───────────────────────────────────────── */}
            <div className={classes.text} id="texts">
                <p id="text1"></p>
                <p id="text2"></p>
                <p id="text3"></p>
            </div>
            <Separation />

            {/* ─── EXPERIENCE ───────────────────────────────────────── */}
            <div className={classes.experienceTitle}>
                <h2>{translations.experience}</h2>
            </div>
            {renderExperiences(lang === 'fr-FR' ? frExperience : enExperience)}
            <Separation />

            {/* ─── FOOTER ───────────────────────────────────────── */}
            <div className={classes.footer}>
                <div className={classes.brushFrame}>
                    <p>{translations.apartdev}</p>
                    <BrushFrame />
                </div>
                <button
                    className={classes.infoBtn}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        onClick('info');
                    }}
                >
                    {translations.comesee} <Arrow />
                </button>
            </div>
        </>
    );
};

export default AboutDev;
