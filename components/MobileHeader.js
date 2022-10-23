import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 50,

        '@media (min-width: 600px)': {
            display: 'none',
        },
        // logo
        '& > span': {
            padding: '0px 15px',
            transition: '.3s',
            fontSize: 40,
            color: '#fff',
            textDecoration: 'none',
            background: '#262626'
        }
    },
})

const MobileHeader = () => {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <span>L</span>
            <p>Menu</p>
        </div>
    )
}

export default MobileHeader;