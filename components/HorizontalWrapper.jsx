import { useContext } from 'react';
import { Context } from '@pages/_app';
import styled from 'styled-components';

const HorizontalWrapper = ({ children }) => {
    // pass lang as props for children components
    const { lang } = useContext(Context);
    const content = children.map((e) => ({ ...e, props: { lang } }));

    return (
        <div className='app'>
            <S.Container className='container'>{content}</S.Container>
        </div>
    );
};

const S = {};
S.Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: Aboreto;

    @media (min-width: 600px) {
        height: 100%;
        width: fit-content;
    }
`;

export default HorizontalWrapper;
