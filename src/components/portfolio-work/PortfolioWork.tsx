import React from "react";
import styles from "./PortfolioWork.module.css";

const PortfolioWork: React.FC = () => {
  return (
    <li className={styles.portfolio__work_item}>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>01.</span>
        <p className={styles.portfolio__work_text}>Alternativ(Before)</p>
        <img
          src="../../images/play-icon.svg"
          alt="play icon"
          className={styles.portfolio__play_icon}
        />
      </div>
      <div className={styles.portfolio__work_block}>
        <span className={styles.portfolio__work_count}>01.</span>
        <p className={styles.portfolio__work_text}>Alternativ(After)</p>
        <img
          src="../../images/play-icon.svg"
          alt="play icon"
          className={styles.portfolio__play_icon}
        />
      </div>
    </li>
  );
};

export default PortfolioWork;
