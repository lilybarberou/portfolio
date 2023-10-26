import styled from 'styled-components';

const HorizontalWrapper = ({ children }) => {
    return (
        <div className='app'>
            <S.Container className='container'>{children}</S.Container>
        </div>
    );
};

const S = {};
S.Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: var(--aboreto);

    @media (min-width: 600px) {
        height: 100%;
        width: fit-content;
    }
`;

export default HorizontalWrapper;
