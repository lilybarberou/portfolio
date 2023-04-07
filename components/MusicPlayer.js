import { useState, useEffect } from 'react';
import styled from 'styled-components';

const MusicPlayer = ({ opt }) => {
    const { title, file, index } = opt;
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
        <S.Container className='music-player'>
            <p onClick={(e) => handleAudio(e)} id={`music-label-${index}`}>
                {title}
            </p>
            <audio src={file} preload='none'></audio>
        </S.Container>
    );
};

const S = {};
S.Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;

    & p {
        white-space: nowrap;
        cursor: pointer;
        transition: 0.3s color;

        &:hover {
            color: var(--color-pink);
        }
    }

    @media (min-width: 600px) {
        font-size: 15px;
    }
`;

export default MusicPlayer;
