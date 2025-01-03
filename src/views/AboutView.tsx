"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Parallax, t } from "@/lib/utils";
import { AboutDev } from "@/containers/AboutDev";
import { AboutInfo } from "@/containers/AboutInfo";
import { useLang } from "@/components/Providers";
import { ArrowIcon } from "@/lib/icons";

export const AboutView = () => {
  const { lang } = useLang();
  const translations = t("about", lang);
  const dev = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLDivElement>(null);
  const devBtn = useRef<HTMLButtonElement>(null);
  const infoBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // ─── PARALLAX ─────────────────────────────────────────
    if (window.matchMedia("(min-width: 600px)").matches) {
      new Parallax({
        reference: ".dev-content",
        target: ".dev-content > h2 > span:first-child",
        styles: {
          transform: "translateX(${coef*100}px)",
        },
      });

      new Parallax({
        reference: ".info-content",
        target: ".info-content > h2 > span:first-child",
        styles: {
          transform: "translateX(${coef*50}px)",
        },
      });
    }
  }, [lang, translations]);

  const handleClick = (el?: "dev" | "info") => {
    if (dev.current?.classList.contains("active") && el === "dev") return;
    if (info.current?.classList.contains("active") && el === "info") return;

    devBtn.current?.classList.toggle("active");
    infoBtn.current?.classList.toggle("active");
    dev.current?.classList.toggle("active");
    info.current?.classList.toggle("active");

    // scroll to left on desktop
    if (window.matchMedia("(max-width: 600px)").matches) return;
    (document.querySelector(".app") as HTMLDivElement).scrollTop = 1300;
  };

  return (
    <S.Container id="container">
      {/* ----- HEADER PART --------------------------------------------------------- */}
      <h1 dangerouslySetInnerHTML={{ __html: translations.aboutLily }}></h1>

      <S.SwitchBtn>
        <button className="active" ref={devBtn} onClick={() => handleClick("dev")}>
          {translations.lilyndev} <ArrowIcon />
        </button>
        <button ref={infoBtn} onClick={() => handleClick("info")}>
          {translations.whoislily} <ArrowIcon />
        </button>
      </S.SwitchBtn>

      {/* ----- DEV PART --------------------------------------------------------- */}
      <S.Content className={`active dev-content`} ref={dev} lang={lang}>
        <AboutDev onClick={() => handleClick()} translations={translations} />
      </S.Content>

      {/* ----- INFO PART --------------------------------------------------------- */}
      <S.Content className={`info-content`} ref={info} lang={lang}>
        <AboutInfo onClick={() => handleClick()} translations={translations} />
      </S.Content>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-size: calc(11vw + 11px);
      font-weight: lighter;
      text-align: center;
      line-height: 1.4;
      margin-bottom: 75px;
    }

    @media (min-width: 600px) {
      flex-direction: row;

      > h1 {
        font-size: 130px;
        white-space: nowrap;
        margin-bottom: 0;
        margin-left: 100px;
        margin-right: 200px;
      }
    }
  `,

  SwitchBtn: styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 70px;

    > button {
      background: var(--color-pink-darker);
      border: 2px solid var(--color-pink-darker);
      color: #fff;
      fill: #fff;
      font-size: 11px;
      font-family: var(--poppins);
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 11px 23px;
      justify-content: center;
      width: fit-content;
      gap: 10px;
      line-height: 1;
      min-width: 90px;

      > svg {
        transform: rotate(90deg) scaleY(1.1);
        width: 16px;
        height: 16px;
      }

      &.active {
        background: none;
      }
    }

    @media (min-width: 600px) {
      flex-direction: column;
      margin-bottom: 0;
      margin-right: 180px;
      gap: 100px;

      > button {
        white-space: nowrap;
        font-size: 14px;
        min-width: 180px;
        gap: 15px;
        cursor: pointer;

        > svg {
          transform: rotate(0deg) scaleY(1.1) !important;
          height: 16px;
        }
      }
    }
  `,

  Content: styled.div`
    display: none;
    width: 100%;
    padding: 0 50px;

    &.active {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > h2 {
      display: flex;
      flex-direction: column;
    }

    /* front / back title */
    > h2:first-child {
      font-size: 35px;
      text-align: center;
      line-height: 1.5;
      margin-bottom: 70px;

      &[id="about-info-title"] {
        margin-bottom: 0;
      }
    }

    @media (min-width: 600px) {
      height: 100%;

      /* front / back title */
      &.active {
        flex-direction: row;
      }

      > h2:first-child {
        font-size: 50px;
        margin-bottom: 0;
        margin-right: 150px;
        white-space: nowrap;
        text-align: left;
      }

      > h2[id="about-info-title"] {
        > span {
          display: flex;
          gap: 10px;

          .svg {
            align-self: center;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            ::after {
              content: url(/static/svg/activeMenu.svg);
              position: absolute;
              top: 12%;
              z-index: -1;
              transform: ${(props) => (props.lang === "fr-FR" ? "scale(1.1, 1.2)" : "scale(2.4, 1.2)")};
              transition: 0.3s;
            }
          }
        }
      }
    }
  `,
};
