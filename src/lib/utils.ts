import en from "@/langs/en.json";
import fr from "@/langs/fr.json";

export type Lang = "fr-FR" | "en-US";

export const t = <Key extends keyof typeof fr>(key: Key, lang: Lang = "fr-FR"): (typeof fr)[Key] => {
  return lang === "fr-FR" ? fr[key] : en[key];
};

export const getFormData = (formRef: HTMLFormElement): Record<string, FormDataEntryValue> => {
  const data = new FormData(formRef);

  const obj: Record<string, FormDataEntryValue> = {};
  data.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

type ParallaxData = {
  target: string;
  reference: string;
  styles: Record<string, string>;
};

export class Parallax {
  target: HTMLElement | null;
  reference: HTMLElement | null;
  styles: Record<string, string>;

  constructor(data: ParallaxData) {
    this.target = document.querySelector(data.target);
    if (!this.target) return;
    this.reference = document.querySelector(data.reference);
    this.styles = data.styles;

    // set global transitions
    this.target.style.transition = ".5s";
    this.target.style.transitionTimingFunction =
      "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)";

    document.querySelector(".app")?.addEventListener(
      "scroll",
      () => {
        this.applyStyles();
      },
      { passive: true }
    );
  }

  applyStyles() {
    if (!this.reference || !this.target) return;

    let coef = 1 - this.reference.getBoundingClientRect().left / window.innerWidth;
    if (coef <= 0) coef = 0;
    if (coef >= 1) coef = 1;

    for (const key in this.styles) {
      this.target.style.setProperty(key, eval("`" + this.styles[key] + "`"));
    }
  }
}
