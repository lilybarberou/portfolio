'use client';

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const HorizontalWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="app">
      <S.Container className="container">{children}</S.Container>
    </div>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    font-family: var(--aboreto);

    @media (min-width: 600px) {
      height: 100%;
      width: fit-content;
    }
  `,
};
