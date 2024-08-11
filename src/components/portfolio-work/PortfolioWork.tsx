import React, { useRef, useState } from "react";
import styles from "./PortfolioWork.module.css";
import { IPortfolio } from "../../services/portfolio/portfolio.interface";

interface Props {
  portfolio: IPortfolio;
  index: number;
}

const PortfolioWork: React.FC<Props> = ({ portfolio, index }) => {
  const [isAudioPlayAfter, setIsAudioPlayAfter] = useState(false);
  const [isAudioPlayBefore, setIsAudioPlayBefore] = useState(false);
  const audioRefBefore = useRef<HTMLAudioElement>(null);
  const audioRefAfter = useRef<HTMLAudioElement>(null);

  const handlePlayAudioAfter = () => {
    if (audioRefAfter.current) {
      setIsAudioPlayAfter(true);
      audioRefAfter.current.play();
    }
  };

  const handlePauseAudioAfter = () => {
    if (audioRefAfter.current) {
      setIsAudioPlayAfter(false);
      audioRefAfter.current.pause();
    }
  };

  const handlePlayAudioBefore = () => {
    if (audioRefBefore.current) {
      setIsAudioPlayBefore(true);
      audioRefBefore.current.play();
    }
  };

  const handlePauseAudioBefore = () => {
    if (audioRefBefore.current) {
      setIsAudioPlayBefore(false);
      audioRefBefore.current.pause();
    }
  };

  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <li className={styles.portfolio__work_item}>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>{formattedIndex}.</span>
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
        <audio ref={audioRefBefore} src={portfolio.track_before} />
      </div>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>{formattedIndex}.</span>
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
        <audio ref={audioRefAfter} src={portfolio.track_after} />
      </div>
    </li>
  );
};

export default PortfolioWork;
