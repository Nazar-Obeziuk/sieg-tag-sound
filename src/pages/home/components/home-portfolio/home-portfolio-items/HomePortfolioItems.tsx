import React, { useRef, useState } from "react";
import styles from "./HomePortfolioItems.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import PortfolioWork from "../../../../../components/portfolio-work/PortfolioWork";
import { IPortfolio } from "../../../../../services/portfolio/portfolio.interface";
import PortfolioWorks from "../../../../portfolio/components/portfolio-works/PortfolioWorks";

interface Props {
  portfolios: IPortfolio[];
}

const HomePortfolioItems: React.FC<Props> = ({ portfolios }) => {
  const swiper = useSwiper();
  const { t } = useTranslation();
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const audioWrapper = useRef<any>(null);

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

  return (
    <>
      <div className={styles.home__portfolio_content} ref={audioWrapper}>
        <Swiper
          key={"uniq1"}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-portfolio",
            prevEl: ".arrow-left-portfolio",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="portfolioSwiper"
        >
          {portfolios.map((portfolio: IPortfolio, index: number) => (
            <SwiperSlide key={index}>
              <div className={styles.home__portfolio_item}>
                <div className={styles.home__portfolio_work}>
                  <PortfolioWork
                    portfolio={portfolio}
                    index={index}
                    key={index}
                    playAudio={playAudio}
                    pauseAudio={pauseAudio}
                    activeBlock={activeBlock!}
                  />
                </div>
                <div className={styles.home__portfolio_info}>
                  <span className={styles.home__portfolio_category}>
                    {t("home.homePortfolio.homePortfolioCategory")}:{" "}
                    {portfolio.category}
                  </span>
                  <h3 className={styles.home__portfolio_name}>
                    {portfolio.title}
                  </h3>
                  <p className={styles.home__portfolio_description}>
                    {portfolio.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-portfolio ${styles.arrow__slide_left} arrow-portfolio`}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 17 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4438 31.9999L0.887695 16.4433L16.4438 0.887207"
            stroke="#EE701F"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span
        onClick={() => swiper && swiper.slideNext()}
        className={`arrow-right-portfolio ${styles.arrow__slide_right} arrow-portfolio`}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 18 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999515 1.00009L16.5557 16.5567L0.999515 32.1128"
            stroke="#EE701F"
            strokeWidth="2"
          />
        </svg>
      </span>
    </>
  );
};

export default HomePortfolioItems;
