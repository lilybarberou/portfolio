import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    separation: {
        height: 1,
        width: '100%',
        backgroundColor: 'var(--color-grey)',
        marginTop: 70,
        marginBottom: 70,

        '@media (min-width: 600px)': {
            width: 1,
            height: '100%',
            margin: '0',
            marginLeft: 80,
            marginRight: 80,
        },
    },
});

const Separation = () => {
    const classes = useStyle();

    return <div className={`${classes.separation} separation`}></div>;
};

export default Separation;
