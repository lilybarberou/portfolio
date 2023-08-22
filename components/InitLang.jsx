import { useEffect, useState, useContext } from 'react';
import { Context } from '@pages/_app';

const InitLang = ({ children }) => {
    const { setLang } = useContext(Context);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        console.log('ok');
        setUpdated(true);
        const userLang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
        setLang(userLang);
    }, [setLang]);

    return updated ? children : null;
};

export default InitLang;
