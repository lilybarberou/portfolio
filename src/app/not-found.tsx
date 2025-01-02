"use client";

import styled from "styled-components";

export default function Page() {
  return (
    <S.Container>
      <span>404</span>
      <video muted autoPlay={true} loop={true}>
        <source src="https://i.imgur.com/6NdzIG0.mp4" />
      </video>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 100px;
    gap: 20px;

    > video {
      width: 100%;
    }

    @media (min-width: 600px) {
      height: 100%;
      justify-content: center;
      margin-left: 100px;

      > video {
        width: 500px;
      }
    }
  `,
};
