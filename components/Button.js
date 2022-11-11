import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import Arrow from '@public/static/svg/arrow.svg';

const useStyle = createUseStyles({
    container: {
        background: 'var(--color-pink)',
        color: '#fff',
        fill: '#fff',
        fontSize: 11,
        fontFamily: 'Poppins',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '11px 25px',
        justifyContent: 'center',
        width: 'fit-content',
        gap: 10,
        lineHeight: 1,
        minWidth: 90,

        '& > svg': {
            height: 17,
        },
        '@media (min-width: 600px)': {
            fontSize: 13,
            gap: 15,

            '& > svg': {
                height: 19,
            },
        },
    },
});

const Button = ({ text, link }) => {
    const classes = useStyle();

    return (
        <Link href={link}>
            <a className={`${classes.container} button`}>
                {text}
                <Arrow />
            </a>
        </Link>
    );
};

export default Button;
