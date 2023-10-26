import { t } from '@contexts/Utils';

const MusicCursor = () => {
    const text = t('clickonmusic', 'fr');

    return <span id='musique-cursor'>{text}</span>;
};

export default MusicCursor;
