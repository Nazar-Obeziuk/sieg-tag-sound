import React, { useRef, useState } from "react";
import styles from "./PortfolioWork.module.css";

const PortfolioWork: React.FC = () => {
  const [isAudioPlayAfter, setIsAudioPlayAfter] = useState(false);
  const [isAudioPlayBefore, setIsAudioPlayBefore] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudioAfter = () => {
    if (audioRef.current) {
      setIsAudioPlayAfter(true);
      audioRef.current.play();
    }
  };

  const handlePauseAudioAfter = () => {
    if (audioRef.current) {
      setIsAudioPlayAfter(false);
      audioRef.current.pause();
    }
  };

  const handlePlayAudioBefore = () => {
    if (audioRef.current) {
      setIsAudioPlayBefore(true);
      audioRef.current.play();
    }
  };

  const handlePauseAudioBefore = () => {
    if (audioRef.current) {
      setIsAudioPlayBefore(false);
      audioRef.current.pause();
    }
  };

  return (
    <li className={styles.portfolio__work_item}>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>01.</span>
        <p className={styles.portfolio__work_text}>Alternativ(Before)</p>
        {!isAudioPlayBefore ? (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={handlePlayAudioBefore}
          />
        ) : (
          <img
            src="../../images/pause-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={handlePauseAudioBefore}
          />
        )}
        <audio ref={audioRef} src="../../images/work-1-before.mp3" />
      </div>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>01.</span>
        <p className={styles.portfolio__work_text}>Alternativ(After)</p>
        {!isAudioPlayAfter ? (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={handlePlayAudioAfter}
          />
        ) : (
          <img
            src="../../images/pause-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={handlePauseAudioAfter}
          />
        )}
        <audio ref={audioRef} src="../../images/work-1-after.mp3" />
      </div>
    </li>
  );
};

export default PortfolioWork;
