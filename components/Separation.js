import styled from 'styled-components';

const Separation = ({ id }) => {
    return <S.Separation id={id} className={`separation`}></S.Separation>;
};

const S = {};
S.Separation = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--color-grey);
    margin-top: 70px;
    margin-bottom: 70px;

    @media (min-width: 600px) {
        width: 1px;
        height: 100%;
        margin: 0;
        margin-left: 80px;
        margin-right: 80px;
    }
`;

export default Separation;
