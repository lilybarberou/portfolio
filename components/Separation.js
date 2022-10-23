import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    separation: {
        height: '1px',
        width: '100%',
        backgroundColor: 'var(--color-grey)',
        marginTop: '70px',
        marginBottom: '70px',

        '@media (min-width: 600px)': {
            width: '1px',
            height: '100%',
            margin: '0',
            marginLeft: '80px',
            marginRight: '80px',
        },
    },
});

const Separation = () => {
    const classes = useStyle();

    return <div className={classes.separation}></div>;
};

export default Separation;