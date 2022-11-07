import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    info: {
        width: 'fit-content',
        padding: '8px 15px',
        color: '#fff',
        backgroundColor: 'var(--color-pink)',
        whiteSpace: 'nowrap',
        fontFamily: 'Poppins',
        fontSize: 12,
        transition: '.5s all',
        zIndex: 10,
        transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',

        '@media (min-width: 600px)': {
            fontSize: 15,
        },
    },
});

const Info = ({ text = '' }) => {
    const classes = useStyle();

    return <p className={`${classes.info} info`}>{text}</p>;
};

export default Info;
