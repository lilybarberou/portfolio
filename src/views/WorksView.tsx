'use client';

import { Fragment } from 'react';
import styled from 'styled-components';
import { Separation } from '@/components/Separation';
import { Work } from '@/components/Work';
import { t } from '@/lib/utils';
import { useLang } from '@/components/Providers';
import worksList from '@/lib/worksList.json';

export const WorksView = () => {
  const { lang } = useLang();
  const translations = t('navigation', lang);

  return (
    <S.Container>
      <S.Title>
        <h1 className={`${lang === 'fr-FR' ? '' : 'en'}`}>{translations.works}</h1>
      </S.Title>
      <Separation />
      {worksList.map((work, i) => (
        <Fragment key={i}>
          <Work opt={work} />
          {i !== worksList.length - 1 && <Separation />}
        </Fragment>
      ))}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: calc(10vw + 9px);
      font-weight: lighter;
      margin-bottom: 50px;
      pointer-events: none;
    }

    @media (min-width: 600px) {
      flex-direction: row;

      h1 {
        transform: rotate(-90deg);
        font-size: calc(10vh + 9px);
        margin-bottom: 0;

        &.en {
          font-size: calc(14vh + 9px);
        }
      }
    }
  `,

  Title: styled.div`
    & + .separation {
      display: none;
    }

    @media (min-width: 600px) {
      width: 170px;
      display: flex;
      justify-content: center;
      margin-left: 80px;

      & + .separation {
        display: block;
      }
    }
  `,
};
