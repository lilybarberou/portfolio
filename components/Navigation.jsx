import { useRef, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Context } from '@pages/_app';
import { t } from '@contexts/Utils';

const Navigation = ({ lang }) => {
    const router = useRouter();
    const { setLang } = useContext(Context);
    const navigation = useRef(null);
    const openIcon = useRef(null);
    const closeIcon = useRef(null);
    const mobileMenu = useRef(null);
    const translations = t('navigation', lang);

    const handleMobileMenu = (e, logo) => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            const active = navigation.current.classList.contains('active');

            // logo must not display menu
            if (logo && !active) return;

            navigation.current.classList.toggle('active');
            closeIcon.current.classList.toggle('active');
            openIcon.current.classList.toggle('active');
            mobileMenu.current.classList.toggle('active');
            document.body.style.overflowY = active ? 'unset' : 'hidden';
        }
    };

    return (
        <S.Container ref={navigation}>
            <S.MobileNav>
                <Link href='/' onClick={(e) => handleMobileMenu(e, true)}>
                    L
                </Link>
                <svg ref={closeIcon} onClick={handleMobileMenu} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                    <path d='M317.7 402.3c3.125 3.125 3.125 8.188 0 11.31c-3.127 3.127-8.186 3.127-11.31 0L160 267.3l-146.3 146.3c-3.127 3.127-8.186 3.127-11.31 0c-3.125-3.125-3.125-8.188 0-11.31L148.7 256L2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7l146.3-146.3c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256L317.7 402.3z' />
                </svg>
                <svg className='active' ref={openIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' onClick={handleMobileMenu}>
                    <path d='M0 88C0 83.58 3.582 80 8 80H440C444.4 80 448 83.58 448 88C448 92.42 444.4 96 440 96H8C3.582 96 0 92.42 0 88zM0 248C0 243.6 3.582 240 8 240H440C444.4 240 448 243.6 448 248C448 252.4 444.4 256 440 256H8C3.582 256 0 252.4 0 248zM440 416H8C3.582 416 0 412.4 0 408C0 403.6 3.582 400 8 400H440C444.4 400 448 403.6 448 408C448 412.4 444.4 416 440 416z' />
                </svg>
            </S.MobileNav>
            <S.Menu ref={mobileMenu}>
                <S.Links>
                    <S.Logo href='/' className={`${router.pathname == '/' ? 'active' : ''}`}>
                        L
                    </S.Logo>
                    <Link href='/a-propos-de-lily' className={router.pathname == '/a-propos-de-lily' ? 'active' : ''} onClick={handleMobileMenu}>
                        {translations.aboutme}
                    </Link>
                    <Link href='/realisations' className={router.pathname == '/realisations' ? 'active' : ''} onClick={handleMobileMenu}>
                        {translations.works}
                    </Link>
                    <Link href='/contact' className={router.pathname == '/contact' ? 'active' : ''} onClick={handleMobileMenu}>
                        CONTACT
                    </Link>
                    <a href='https://lilyscript.fr' target='_blank' rel='noreferrer'>
                        Blog
                    </a>
                </S.Links>
                <S.Lang>{lang === 'fr-FR' ? <span onClick={() => setLang('en-US')}>EN</span> : <span onClick={() => setLang('fr-FR')}>FR</span>}</S.Lang>
            </S.Menu>
        </S.Container>
    );
};

const S = {};
S.Container = styled.div`
    overflow: hidden;
    height: 100px;
    transition: 0.3s;

    &.active {
        height: 100vh;
    }

    @media (min-width: 600px) {
        height: 100%;
        width: 85px;
        min-width: 85px;
        max-width: 85px;
    }
`;

S.MobileNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    /* logo */
    > a {
        padding: 0 15px;
        transition: 0.3s;
        font-size: 40px;
        color: #fff;
        height: fit-content;
        text-decoration: none;
        background: #262626;
    }
    > svg {
        width: 30px;
        fill: #fff;
        display: none;

        &.active {
            display: block;
        }

        &[id='close'] {
            width: 25px;
        }
    }

    @media (min-width: 600px) {
        display: none;
    }
`;

S.Menu = styled.div`
    width: 100%;
    background: #1f1f1f;
    z-index: 10;
    padding-left: 40px;
    height: calc(100% - 188px);

    @media (min-width: 600px) {
        height: 100%;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

S.Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 70px;
    gap: 40px;

    a:not(:first-child) {
        z-index: 2;
        white-space: nowrap;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;

        &.active::after {
            transform: translateX(-50%) translateY(-10%) scaleX(1.7);
        }
        ::after {
            content: url(/static/svg/activeMenu.svg);
            position: absolute;
            left: 50%;
            top: 40%;
            z-index: -1;
            transform: translateX(-50%) scale(0);
            transform-origin: center center;
            transition: 0.3s;
        }
    }
    @media (max-width: 600px) {
        a:first-child {
            display: none;
        }
    }
    @media (min-width: 600px) {
        margin-top: 0;
        gap: 100px;
        align-items: center;

        a:not(:first-child) {
            transform: rotate(-90deg);
            font-family: var(--poppins);
            font-size: 14px;

            &.active::after {
                transform: translateX(-50%) scale(0.8) !important;
            }
        }
    }
`;

S.Logo = styled(Link)`
    cursor: pointer;

    @media (min-width: 600px) {
        padding: 3px 17px;
        transition: 0.3s;
        font-size: 40px;
        color: #fff;
        text-decoration: none;

        :hover,
        &.active {
            background: var(--color-pink-darker);
        }
    }
`;

S.Lang = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;
    margin-top: 110px;
    font-family: var(--poppins);

    > span {
        font-size: 16px;
        color: #fff;
        transition: 0.3s;

        :hover {
            color: var(--color-pink);
        }
    }

    @media (min-width: 600px) {
        cursor: pointer;
        margin-top: 0;
        font-family: var(--aboreto);
        align-self: unset;
        gap: 25px;

        > span {
            font-size: 15px;
        }
    }
`;

export default Navigation;
