import { useEffect, useState, useContext } from 'react';
import { Context } from '@pages/_app';

const InitLang = ({ children }) => {
    const { setLang } = useContext(Context);

    useEffect(() => {
        const userLang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
        setLang(userLang);
    }, [setLang]);

    return children;
};

export default InitLang;
