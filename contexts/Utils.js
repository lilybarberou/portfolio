import fr from '@langs/fr.json';
import en from '@langs/en.json';

export const t = (key, lang = 'fr-FR') => {
    return lang === 'fr-FR' ? fr[key] : en[key];
};

export const getFormData = (el) => {
    const form = document.querySelector(el);
    const data = new FormData(form);

    const obj = {};
    for (const i of data.entries()) {
        obj[i[0]] = i[1];
    }
    return obj;
};

export default class Parallax {
    constructor(data) {
        this.target = document.querySelector(data.target);
        if (!this.target) return;
        this.reference = document.querySelector(data.reference);
        this.styles = data.styles;

        // set global transitions
        this.target.style.transition = '.5s';
        this.target.style.transitionTimingFunction = 'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)';

        document.querySelector('.app').addEventListener(
            'scroll',
            () => {
                this.applyStyles();
            },
            { passive: true }
        );
    }
    applyStyles() {
        let coef = 1 - this.reference.getBoundingClientRect().left / window.innerWidth;
        if (coef <= 0) coef = 0;
        if (coef >= 1) coef = 1;

        for (const key in this.styles) {
            this.target.style.setProperty(key, eval('`' + this.styles[key] + '`'));
        }
    }
}
