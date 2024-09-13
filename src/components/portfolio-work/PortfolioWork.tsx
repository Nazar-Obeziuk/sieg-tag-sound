import React, { useRef, useState } from "react";
import styles from "./PortfolioWork.module.css";
import { IPortfolio } from "../../services/portfolio/portfolio.interface";
import { useTranslation } from "react-i18next";
import { useAudioContext } from "../../context/AudiContext";

interface Props {
  portfolio: IPortfolio;
  index: number;
  playAudio: (event: any, music: any) => void;
  pauseAudio: (event: any, music: any) => void;
  activeBlock: number;
}

const PortfolioWork: React.FC<Props> = ({
  portfolio,
  index,
  playAudio,
  pauseAudio,
  activeBlock,
}) => {
  const [isAudioPlayingBefore, setIsAudioPlayingBefore] = useState(false);
  const [isAudioPlayingAfter, setIsAudioPlayingAfter] = useState(false);
  const audioRefBefore = useRef<HTMLAudioElement>(null);
  const audioRefAfter = useRef<HTMLAudioElement>(null);
  const { currentAudio, setCurrentAudio } = useAudioContext();
  const { t } = useTranslation();

  const handlePlayAudio = (
    ref: React.RefObject<HTMLAudioElement>,
    isBefore: boolean
  ) => {
    if (
      currentAudio &&
      currentAudio.current &&
      currentAudio.current !== ref.current
    ) {
      currentAudio.current.pause();
      setIsAudioPlayingBefore(false);
      setIsAudioPlayingAfter(false);
    }

    if (ref.current) {
      ref.current.play();
      setCurrentAudio(ref);

      if (isBefore) {
        setIsAudioPlayingBefore(true);
        setIsAudioPlayingAfter(false);
      } else {
        setIsAudioPlayingAfter(true);
        setIsAudioPlayingBefore(false);
      }
    }
  };

  const handlePauseAudio = (
    ref: React.RefObject<HTMLAudioElement>,
    isBefore: boolean
  ) => {
    if (ref.current) {
      ref.current.pause();
      if (isBefore) {
        setIsAudioPlayingBefore(false);
      } else {
        setIsAudioPlayingAfter(false);
      }
    }
  };

  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <li className={styles.portfolio__work_item}>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>{formattedIndex}.</span>
        <p className={styles.portfolio__work_text}>
          {portfolio.name} ({t("portfolio.portfolioBeforeText")})
        </p>
        {!isAudioPlayingBefore ? (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              playAudio(index, audioRefBefore);
              setIsAudioPlayingBefore(true);
              setIsAudioPlayingAfter(false);
            }}
          />
        ) : index === activeBlock ? (
          <img
            src="../../images/pause-icon.svg"
            alt="pause icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              pauseAudio(index, audioRefBefore);
              setIsAudioPlayingBefore(false);
            }}
          />
        ) : (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              playAudio(index, audioRefBefore);
              setIsAudioPlayingBefore(true);
              setIsAudioPlayingAfter(false);
            }}
          />
        )}
        <audio ref={audioRefBefore} src={portfolio.track_before} />
      </div>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>{formattedIndex}.</span>
        <p className={styles.portfolio__work_text}>
          {portfolio.name} ({t("portfolio.portfolioAfterText")})
        </p>
        {!isAudioPlayingAfter ? (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              playAudio(index, audioRefAfter);
              setIsAudioPlayingAfter(true);
              setIsAudioPlayingBefore(false);
            }}
          />
        ) : index === activeBlock ? (
          <img
            src="../../images/pause-icon.svg"
            alt="pause icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              pauseAudio(index, audioRefAfter);
              setIsAudioPlayingAfter(false);
            }}
          />
        ) : (
          <img
            src="../../images/play-icon.svg"
            alt="play icon"
            className={styles.portfolio__play_icon}
            onClick={() => {
              playAudio(index, audioRefAfter);
              setIsAudioPlayingAfter(true);
              setIsAudioPlayingBefore(false);
            }}
          />
        )}

        <audio ref={audioRefAfter} src={portfolio.track_after} />
      </div>
    </li>
  );
};

export default PortfolioWork;
