import styled from 'styled-components';

type Props = {
  title: string;
  file: string;
  musicList: HTMLDivElement;
};

export const MusicPlayer = ({ title, file, musicList }: Props) => {
  const handleAudio = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const audio = e.currentTarget.nextElementSibling as HTMLAudioElement;
    const paused = audio.paused;

    Array.from(musicList.children).forEach((musicPlayerContainer) => {
      const audioTag = musicPlayerContainer.children[1] as HTMLAudioElement;
      audioTag.pause();
    });
    paused ? audio.play() : audio.pause();
  };

  return (
    <S.Container>
      <p onClick={handleAudio}>{title}</p>
      <audio src={file} preload="none"></audio>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
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
  `,
};
