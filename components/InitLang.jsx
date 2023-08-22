import { switchLanguage } from '@slices/lang';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const InitLang = ({ children }) => {
    const dispatch = useDispatch();
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        setUpdated(true);
        const userLang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
        dispatch(switchLanguage(userLang));
    }, [dispatch]);

    return updated ? children : null;
};

export default InitLang;
