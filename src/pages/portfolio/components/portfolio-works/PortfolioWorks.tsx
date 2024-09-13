import React, { useEffect, useRef, useState } from "react";
import styles from "./PortfolioWorks.module.css";
import PortfolioWork from "../../../../components/portfolio-work/PortfolioWork";
import Loader from "../../../../components/loader/Loader";
import { IPortfolio } from "../../../../services/portfolio/portfolio.interface";
import { getAllPortfoliosByLang } from "../../../../services/portfolio/portfolio";
import { useTranslation } from "react-i18next";

const PortfolioWorks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const audioWrapper = useRef<any>(null);

  const getPortfolios = async () => {
    try {
      const response = await getAllPortfoliosByLang(i18n.language);
      setPortfolios(response);
    } catch (error) {
      console.log(error);
    }
  };

  const playAudio = (index: number, music: any) => {
    if (audioWrapper.current) {
      const audios = audioWrapper.current.querySelectorAll("audio");

      audios.forEach((audio: any) => {
        audio.pause();
      });

      music.current.play();
      setActiveBlock(index);
    }
  };

  const pauseAudio = (index: number, music: any) => {
    music.current.pause();
    setActiveBlock(index);
  };

  useEffect(() => {
    getPortfolios();
  }, [i18n.language, audioWrapper]);

  if (!portfolios) {
    return <Loader />;
  }

  return (
    <section id="portfolios" className={styles.portfolio__works_section}>
      <div className="container">
        <div className={styles.portfolio__works_wrapper}>
          {portfolios.length > 0 ? (
            <ul className={styles.portfolio__works_list} ref={audioWrapper}>
              {portfolios.map((portfolio: IPortfolio, index: number) => (
                <div key={index} className={styles.portfolio_work_item}>
                  <PortfolioWork
                    portfolio={portfolio}
                    index={index}
                    key={index}
                    playAudio={playAudio}
                    pauseAudio={pauseAudio}
                    activeBlock={activeBlock!}
                  />
                  <div className={styles.portfolio__item_info}>
                    <span className={styles.portfolio__item_category}>
                      {t("home.homePortfolio.homePortfolioCategory")}:{" "}
                      {portfolio.category}
                    </span>
                    <h3 className={styles.portfolio__item_name}>
                      {portfolio.title}
                    </h3>
                    <p className={styles.portfolio__item_description}>
                      {portfolio.text}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p className={styles.portfolio__works_empty}>
              {t("portfolio.portfolioEmpty")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioWorks;
