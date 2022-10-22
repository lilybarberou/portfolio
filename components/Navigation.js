import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { switchLanguage } from 'slices/lang';
import { t } from '../contexts/Utils';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 85,
        height: '100%',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 120,

        '& > a:not(:first-child)': {
            color: '#fff',
            textDecoration: 'none',
            transform: 'rotate(-90deg)',
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 17,

            '&.active::after': {
                transform: 'translateX(-50%) scale(1)',
            },
            '&::after': {
                content: 'url(/static/svg/activeMenu.svg)',
                position: 'absolute',
                zIndex: -1,
                left: '50%',
                top: '40%',
                transform: 'translateX(-50%) scale(0)',
                transformOrigin: 'center center',
                transition: '.3s',
            },
        },
    },
    logo: {
        padding: '5px 19px',
        transition: '.3s',
        fontSize: 40,
        color: '#fff',
        textDecoration: 'none',

        '&:hover, &.active': {
            background: 'var(--color-pink)',
        },
    },
    lang: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        alignItems: 'center',

        '& > span': {
            fontSize: 18,
            cursor: 'pointer',
            color: '#fff',
            transition: '.3s',

            '&:hover': {
                color: 'var(--color-pink)',
            },
        },
    },
});

const Navigation = ({ lang }) => {
    const router = useRouter();
    const classes = useStyle();
    const dispatch = useDispatch();
    const translations = t('navigation', lang);

    return (
        <div className={classes.container}>
            <div className={classes.links}>
                <Link href="/">
                    <a className={`${classes.logo} ${router.pathname == '/' ? 'active' : ''}`}>L</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname == '/about' ? 'active' : ''}>{translations.aboutme}</a>
                </Link>
                <Link href="/works">
                    <a className={router.pathname == '/works' ? 'active' : ''}>{translations.works}</a>
                </Link>
                <Link href="/contact">
                    <a className={router.pathname == '/contact' ? 'active' : ''}>CONTACT</a>
                </Link>
            </div>
            <div className={classes.lang}>
                <span onClick={() => dispatch(switchLanguage('fr-FR'))}>FR</span>
                <span onClick={() => dispatch(switchLanguage('en-EN'))}>EN</span>
            </div>
        </div>
    );
};

export default Navigation;
