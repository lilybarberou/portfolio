import styled from 'styled-components';

const MusicPlayer = (props) => {
    const { title, file, musicList } = props;

    const handleAudio = (e) => {
        const audio = e.target.nextElementSibling;
        const paused = audio.paused;

        Array.from(musicList.current.children).forEach((musicPlayerContainer) => {
            const audioTag = musicPlayerContainer.children[1];
            audioTag.pause();
        });
        paused ? audio.play() : audio.pause();
    };

    return (
        <S.Container>
            <p onClick={handleAudio}>{title}</p>
            <audio src={file} preload='none'></audio>
        </S.Container>
    );
};

const S = {};
S.Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;

    p {
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
