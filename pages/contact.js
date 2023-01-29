import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { getFormData, t } from '@contexts/Utils';
import Separation from '@components/Separation';
import Arrow from '@public/static/svg/arrow.svg';
import Head from 'next/head';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& h1': {
            fontSize: 'calc(10vw + 10px)',
            fontWeight: 'lighter',
            marginBottom: 50,
            pointerEvents: 'none',
        },
        '@media (min-width: 600px)': {
            flexDirection: 'row',
            minWidth: 'calc(100vw - 85px)',

            '& h1': {
                transform: 'rotate(-90deg)',
                fontSize: 'calc(14vh + 9px)',
                marginBottom: 0,
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

        // form left/right container
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            alignItems: 'center',

            // container of label/input
            '& > div': {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',

                '& > textarea': {
                    padding: 10,
                    minHeight: 150,
                    fontWeight: 'lighter',
                },
                '& > label': {
                    color: '#fff',
                    fontSize: 12,
                    fontFamily: 'Poppins',
                    marginBottom: 3,
                    width: '100%',
                },
            },
            '& > div > input, & > div > textarea, & > button': {
                border: '1px solid #818181',
                background: 'none',
                color: '#fff',
                transition: '.3s',
                height: 40,
                width: '100%',
                marginBottom: 20,
                padding: '0 10px',
                boxSizing: 'border-box',
                fontFamily: 'Poppins',

                '&:focus': {
                    borderColor: 'var(--color-pink)',
                    outline: 'none',
                },
                '&[id="captcha"]': {
                    maxWidth: 100,
                    alignSelf: 'flex-start',
                },
            },
            '& > button': {
                marginTop: 10,
                background: 'var(--color-pink)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15,
                textTransform: 'uppercase',

                '& svg': {
                    fill: '#fff',
                    height: 17,
                    maxWidth: 17,
                },
            },
        },
        '@media (min-width: 600px)': {
            width: 760,
            marginRight: 140,
            flexWrap: 'wrap',
            height: 450,
            justifyContent: 'center',
            gap: 60,
            marginLeft: 'auto',

            // form left/right container
            '& > div': {
                width: 'unset',
                height: '100%',
                justifyContent: 'space-between',

                // container of label/input
                '& > div': {
                    width: 'unset',

                    '&.captcha': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        width: '100%',
                    },
                    '& > textarea': {
                        maxWidth: 350,
                        minWidth: 350,
                        minHeight: '169px !important',
                        maxHeight: 220,
                    },
                    '& > label[for="captcha"]': {
                        alignSelf: 'flex-end',
                        width: 120,
                    },
                },
                '& > div > input, & > div > textarea, & > button': {
                    height: '50px !important',
                    width: '350px !important',

                    '&[id="captcha"]': {
                        alignSelf: 'flex-end !important',
                        maxWidth: '120px !important',
                    },
                },
                '& > button': {
                    marginTop: 22,
                },
            },
        },
    },
    social: {
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 10,

        '& > div, & > a': {
            border: '1px solid #818181',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '.3s',

            '& > svg': {
                padding: '10px 10px',
                width: 30,
                height: 30,
                fill: '#fff',
            },
            '&:hover, &:focus': {
                borderColor: 'var(--color-pink)',
                background: 'var(--color-pink)',
            },
        },
        '@media (min-width: 600px)': {
            width: 'unset',
            height: '90%',
            justifyContent: 'space-around',
            flexDirection: 'column',
            margin: '0 50px 0 auto',

            '& > div': {
                cursor: 'pointer',
            },
        },
    },
});

const Contact = ({ lang }) => {
    const classes = useStyle();
    const translations = t('contact', lang);
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState([]);

    useEffect(() => {
        setCaptcha([Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = getFormData('#form');

        // check email
        if (!data.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) return toast.error(translations.invalidmail);

        // check captcha
        const trueAnswer = captcha[0] + captcha[1] === parseInt(data.captcha);
        if (!trueAnswer) return toast.error(translations.wronganswer);

        // send mail
        setLoading(true);
        emailjs
            .sendForm('service_cxoxesr', 'TEMP', document.querySelector('#form'), 'user_YiCuJS7dEJZjxxcrfEK5I')
            .then(
                (res) => toast.success(translations.emailsent),
                (err) => toast.error(t(translations.emailnotsent, lang))
            )
            .then(() => setLoading(false));
    };

    const handleDiscordClick = () => {
        navigator.clipboard.writeText('Lily.#7476');
        toast.success(translations.discord);
    };

    return (
        <div className={classes.container}>
            <Head>
                <link rel='canonical' href='https://lilybarberou.fr/contact' />
                <meta property='og:title' content='Lily Barberou | Contact' />
                <meta property='og:url' content='https://lilybarberou.fr/contact' />
                <title>Lily Barberou | Contact</title>
            </Head>
            <div className={classes.title}>
                <h1>CONTACT</h1>
            </div>
            <Separation />
            <form className={classes.form} id='form' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor='firstname'>{translations.firstname} *</label>
                        <input type='text' id='firstname' name='firstname' required={true} />
                    </div>
                    <div>
                        <label htmlFor='name'>{translations.name} *</label>
                        <input type='text' id='name' name='name' required={true} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email *</label>
                        <input type='email' id='email' name='email' required={true} />
                    </div>
                    <div>
                        <label htmlFor='subject'>{translations.subject}</label>
                        <input type='text' id='subject' name='subject' />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor='message'>Message *</label>
                        <textarea id='message' name='message' required={true} />
                    </div>
                    <div className='captcha'>
                        <label htmlFor='captcha'>
                            {captcha[0]} + {captcha[1]} *
                        </label>
                        <input type='number' id='captcha' name='captcha' required={true} />
                    </div>
                    <button>
                        {translations.sendit}{' '}
                        {loading ? (
                            <svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'>
                                <defs>
                                    <linearGradient x1='8.042%' y1='0%' x2='65.682%' y2='23.865%' id='a'>
                                        <stop stop-color='#fff' stop-opacity='0' offset='0%' />
                                        <stop stop-color='#fff' stop-opacity='.631' offset='63.146%' />
                                        <stop stop-color='#fff' offset='100%' />
                                    </linearGradient>
                                </defs>
                                <g fill='none' fill-rule='evenodd'>
                                    <g transform='translate(1 1)'>
                                        <path d='M36 18c0-9.94-8.06-18-18-18' id='Oval-2' stroke='url(#a)' stroke-width='2'>
                                            <animateTransform
                                                attributeName='transform'
                                                type='rotate'
                                                from='0 18 18'
                                                to='360 18 18'
                                                dur='0.9s'
                                                repeatCount='indefinite'
                                            />
                                        </path>
                                        <circle fill='#fff' cx='36' cy='18' r='1'>
                                            <animateTransform
                                                attributeName='transform'
                                                type='rotate'
                                                from='0 18 18'
                                                to='360 18 18'
                                                dur='0.9s'
                                                repeatCount='indefinite'
                                            />
                                        </circle>
                                    </g>
                                </g>
                            </svg>
                        ) : (
                            <Arrow />
                        )}
                    </button>
                </div>
            </form>
            <div className={classes.social}>
                <a aria-label='Github' href='https://github.com/Nahay' target='_blank' rel='noopener noreferrer'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                    </svg>
                </a>
                <a aria-label='Linkedin' href='https://www.linkedin.com/in/lilybarberou' target='_blank' rel='noopener noreferrer'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                    </svg>
                </a>
                <div onClick={handleDiscordClick}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                        <path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z' />
                    </svg>
                </div>
                <a aria-label='Email' href='mailto:lily.barberou@gmail.com'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                        <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Contact;
