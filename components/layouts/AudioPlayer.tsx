import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import styles from './AudioPlayer.module.css';
interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateCurrentTime = () => setCurrentTime(audio.currentTime);
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', updateCurrentTime);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = (Number(event.target.value) / 100) * duration;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newVolume = Number(event.target.value) / 100;
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button className={styles.btnPlay} onClick={togglePlayPause}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      {/* <input className={styles.inputRange}
        type="range"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      /> */}
      {/* <span className={styles.span}>{formatTime(currentTime)}</span><span className={styles.span}> / </span> */}
      {/* <span className={styles.span}>{formatTime(duration)}</span> */}
      <div className={styles.controlGroup}>
        <button className={styles.btnMut} onClick={toggleMute}>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
        <input className={styles.inputRange}
          type="range"
          value={volume * 100}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
