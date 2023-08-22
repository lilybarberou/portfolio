import styled from 'styled-components';
import frExperiences from '@contexts/frExperiences.json';
import enExperiences from '@contexts/enExperiences.json';

const Experiences = ({ lang }) => {
    const expObj = lang === 'fr-FR' ? frExperiences : enExperiences;

    return (
        <S.Experiences>
            {expObj.map((exp, i) => (
                <S.Experience key={i} className={`${i === expObj.length - 1 ? 'last' : ''}`}>
                    <p>
                        <span>{exp.company}</span>
                        <span>{exp.duration}</span>
                    </p>
                    <p>{exp.desc}</p>
                </S.Experience>
            ))}
        </S.Experiences>
    );
};

export default Experiences;

const S = {};
S.Experiences = styled.div`
    @media (min-width: 600px) {
        margin-right: 260px;
        & + .separation {
            display: none;
        }
    }
`;

S.Experience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins';
    position: relative;
    padding-bottom: 30px;
    padding-top: 30px;
    width: 300px;

    & > p:first-child {
        font-size: 17px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        width: 100%;

        & > span:first-child {
            color: var(--color-pink);
        }
    }

    & > p:last-child {
        font-size: 12px;
        width: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background-color: var(--color-grey);
        width: 180px;
    }

    &.last {
        padding-bottom: 0;

        &::after {
            display: none;
        }
    }

    @media (min-width: 600px) {
        padding-bottom: 40px;
        padding-top: 40px;

        & > p:first-child {
            font-size: 18px;
        }

        & > p:last-child {
            font-size: 13px;
        }

        &:first-child {
            padding-top: 0;
        }
    }
`;
