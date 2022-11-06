import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { switchLanguage } from 'slices/lang';
import { t } from '../contexts/Utils';

const useStyle = createUseStyles({
    container: {
        overflow: 'hidden',
        height: 100,
        transition: '.3s',

        '&.active': {
            height: '100vh',
        },
        '@media (min-width: 600px)': {
            height: '100%',
            width: 85,
            minWidth: 85,
            maxWidth: 85,
        },
    },
    mobileNav: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 120,

        // logo
        '& > span': {
            padding: '0px 15px',
            transition: '.3s',
            fontSize: 40,
            color: '#fff',
            height: 'fit-content',
            textDecoration: 'none',
            background: '#262626',
        },
        '& > svg': {
            width: 30,
            fill: '#fff',
            display: 'none',

            '&.active': {
                display: 'block',
            },
        },

        '@media (min-width: 600px)': {
            display: 'none',
        },
    },
    menu: {
        width: '100%',
        background: '#1F1F1F',
        zIndex: 10,
        paddingLeft: 40,
        height: 'calc(100% - 188px)',

        '@media (min-width: 600px)': {
            height: '100%',
            paddingLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 70,
        gap: 40,

        '& > a': {
            zIndex: 2,
            whiteSpace: 'nowrap',
        },
        '& > a:not(:first-child)': {
            color: '#fff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 32,

            '&.active::after': {
                transform: 'translateX(-50%) translateY(-10%) scaleX(1.7)',
            },
            '&::after': {
                content: 'url(/static/svg/activeMenu.svg)',
                position: 'absolute',
                left: '50%',
                top: '40%',
                zIndex: -1,
                transform: 'translateX(-50%) scale(0)',
                transformOrigin: 'center center',
                transition: '.3s',
            },
        },
        '@media (max-width: 600px)': {
            '& > a:first-child': {
                display: 'none',
            },
        },
        '@media (min-width: 600px)': {
            marginTop: 0,
            gap: 100,
            alignItems: 'center',

            '& > a:not(:first-child)': {
                transform: 'rotate(-90deg)',
                fontFamily: 'Poppins',
                fontSize: 14,

                '&.active::after': {
                    transform: 'translateX(-50%) scale(0.8) !important',
                },
            },
        },
    },
    logo: {
        '@media (min-width: 600px)': {
            padding: '3px 17px',
            transition: '.3s',
            fontSize: 40,
            color: '#fff',
            textDecoration: 'none',

            '&:hover, &.active': {
                background: 'var(--color-pink)',
            },
        },
    },
    lang: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        gap: 15,
        marginTop: 150,
        fontFamily: 'Poppins',

        '& > span': {
            fontSize: 16,
            color: '#fff',
            transition: '.3s',

            '&:hover': {
                color: 'var(--color-pink)',
            },
        },
        '@media (min-width: 600px)': {
            cursor: 'pointer',
            marginTop: 0,
            fontFamily: 'Aboreto',
            alignSelf: 'unset',
            gap: 25,
            '& > span': {
                fontSize: 15,
            },
        },
    },
});

const Navigation = ({ lang }) => {
    const router = useRouter();
    const classes = useStyle();
    const dispatch = useDispatch();
    const translations = t('navigation', lang);

    const handleMobileMenu = (e, logo) => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            const active = document.querySelector('#navigation').classList.contains('active');

            // logo must not display menu
            if (logo && !active) return;

            document.querySelector('#navigation').classList.toggle('active');
            document.querySelector('#close').classList.toggle('active');
            document.querySelector('#open').classList.toggle('active');
            document.querySelector('#mobile-menu').classList.toggle('active');
            document.body.style.overflowY = active ? 'unset' : 'hidden';
        }
    };

    return (
        <div className={classes.container} id="navigation">
            <div className={classes.mobileNav}>
                <Link href="/">
                    <span onClick={(e) => handleMobileMenu(e, true)}>L</span>
                </Link>
                <svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={handleMobileMenu}>
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
                <svg className="active" id="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleMobileMenu}>
                    <path d="M0 88C0 83.58 3.582 80 8 80H440C444.4 80 448 83.58 448 88C448 92.42 444.4 96 440 96H8C3.582 96 0 92.42 0 88zM0 248C0 243.6 3.582 240 8 240H440C444.4 240 448 243.6 448 248C448 252.4 444.4 256 440 256H8C3.582 256 0 252.4 0 248zM440 416H8C3.582 416 0 412.4 0 408C0 403.6 3.582 400 8 400H440C444.4 400 448 403.6 448 408C448 412.4 444.4 416 440 416z" />
                </svg>
            </div>
            <div className={classes.menu} id="mobile-menu">
                <div className={classes.links}>
                    <Link href="/">
                        <a className={`${classes.logo} ${router.pathname == '/' ? 'active' : ''}`}>L</a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname == '/about' ? 'active' : ''} onClick={handleMobileMenu}>
                            {translations.aboutme}
                        </a>
                    </Link>
                    <Link href="/works">
                        <a className={router.pathname == '/works' ? 'active' : ''} onClick={handleMobileMenu}>
                            {translations.works}
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.pathname == '/contact' ? 'active' : ''} onClick={handleMobileMenu}>
                            CONTACT
                        </a>
                    </Link>
                </div>
                <div className={classes.lang}>
                    <span onClick={() => dispatch(switchLanguage('fr-FR'))}>FR</span>
                    <span onClick={() => dispatch(switchLanguage('en-EN'))}>EN</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
