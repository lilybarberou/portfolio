import { createUseStyles } from "react-jss";
import Link from "next/link";

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
        padding: '13px 25px',
        justifyContent: 'center',
        width: 'fit-content',
        gap: 10,
        lineHeight: 1,
        minWidth: 90,
    }
})

const Button = ({text, link}) => {
    const classes = useStyle();

    return (
        <Link href={link}>
            <a className={classes.container}>
                {text}
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.21529 0.0992319C8.19212 0.164328 8.17323 0.238403 8.17323 0.263819C8.17323 0.289162 9.29412 1.52338 10.664 3.0064C12.3323 4.81244 13.123 5.71589 13.0583 5.74232C13.0053 5.76397 10.0539 5.78975 6.49981 5.7996C0.171411 5.81719 0.0371931 5.82045 0.0127475 5.95759C-0.0471945 6.29415 -0.167279 6.28822 6.69464 6.28822H13.1604L10.6668 8.98771C9.29532 10.4724 8.17323 11.7229 8.17323 11.7666C8.17323 11.8845 8.35299 12.0241 8.46919 11.9965C8.63422 11.9573 14 6.13384 14 5.99387C14 5.8114 8.60843 0.0306601 8.41213 0.00278243C8.31669 -0.0108306 8.24121 0.0261707 8.21529 0.0992319Z" fill="white"/></svg>
            </a>
        </Link>
    )
}

export default Button;