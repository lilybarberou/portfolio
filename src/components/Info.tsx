import styled from 'styled-components';

type Props = {
  text?: string;
};

export const Info = ({ text = '' }: Props) => {
  return <S.Info className="info">{text}</S.Info>;
};

const S = {
  Info: styled.p`
    width: fit-content;
    padding: 8px 15px;
    color: #fff;
    background-color: var(--color-pink-darker);
    white-space: nowrap;
    font-family: var(--poppins);
    font-size: 12px;
    transition: 0.5s all;
    z-index: 10;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (min-width: 600px) {
      font-size: 15px;
    }
  `,
};
