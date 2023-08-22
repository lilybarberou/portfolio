import { useContext } from 'react';
import { t } from '@contexts/Utils';
import { Context } from '@pages/_app';

const MusicCursor = () => {
    const { lang } = useContext(Context);
    const text = t('clickonmusic', lang);

    return <span id='musique-cursor'>{text}</span>;
};

export default MusicCursor;
