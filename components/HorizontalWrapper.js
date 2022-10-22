import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

const useStyle = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        fontFamily: 'Aboreto',

        '@media (min-width: 600px)': {
            height: '100%',
            width: 'fit-content',
        },
    },
});

const HorizontalWrapper = ({ children }) => {
    const classes = useStyle();

    // pass lang as props for children components
    const lang = useSelector((state) => state.lang.value);
    const content = children.map((e) => ({ ...e, props: { lang } }));

    return (
        <div className="app">
            <div className={`${classes.container} container`}>{content}</div>
        </div>
    );
};

export default HorizontalWrapper;
