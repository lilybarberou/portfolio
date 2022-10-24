import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,

        '& p': {
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: '.3s color',

            '&:hover': {
                color: 'var(--color-pink)',
            },
        },

        '@media (min-width: 600px)': {
            fontSize: 15,
        },
    },
});

const MusicPlayer = ({ opt }) => {
    const { title, file, index } = opt;
    const classes = useStyle();
    const [audios, setAudios] = useState([]);

    useEffect(() => {
        setAudios(document.querySelectorAll('.music-player audio'));
    }, []);

    const handleAudio = (e) => {
        const id = e.target.id;
        const audio = document.querySelector(`#${id} + audio`);
        const paused = audio.paused;
        audios.forEach((e) => e.pause());
        paused ? audio.play() : audio.pause();
    };

    return (
        <div className={`${classes.container} music-player`}>
            <p onClick={(e) => handleAudio(e)} id={`music-label-${index}`}>
                {title}
            </p>
            <audio src={file} preload="none"></audio>
        </div>
    );
};

export default MusicPlayer;
