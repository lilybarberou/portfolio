import Link from 'next/link';
import styled from 'styled-components';
import Arrow from '@public/static/svg/arrow.svg';

const Button = ({ text, link, onClick }) => {
    return (
        <Link href={link}>
            <S.Container onClick={onClick} className='button'>
                {text}
                <Arrow />
            </S.Container>
        </Link>
    );
};

const S = {};
S.Container = styled.a`
    background: var(--color-pink);
    color: #fff;
    fill: #fff;
    font-size: 11px;
    font-family: Poppins;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 11px 25px;
    justify-content: center;
    width: fit-content;
    gap: 10px;
    line-height: 1;
    min-width: 90px;
    cursor: pointer;

    > svg {
        height: 17px;
    }

    @media (min-width: 600px) {
        font-size: 13px;
        gap: 15px;

        > svg {
            height: 19px;
        }
    }
`;

export default Button;
