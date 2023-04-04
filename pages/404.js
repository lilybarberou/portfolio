import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 100,
        gap: 20,

        '& > video': {
            width: '100%',
        },

        '@media(min-width: 600px)': {
            height: '100%',
            justifyContent: 'center',
            marginLeft: 100,

            '& > video': {
                width: 500,
            },
        },
    },
});

const NotFound = () => {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <span>404</span>
            <video muted autoPlay={true} loop={true}>
                <source src='https://i.imgur.com/6NdzIG0.mp4' />
            </video>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default NotFound;
