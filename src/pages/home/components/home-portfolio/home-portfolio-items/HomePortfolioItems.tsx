import React from "react";
import styles from "./HomePortfolioItems.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";
import PortfolioWork from "../../../../../components/portfolio-work/PortfolioWork";

const HomePortfolioItems: React.FC = () => {
  const swiper = useSwiper();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.home__portfolio_content}>
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
          <SwiperSlide key={"uniq1"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Классическая музыка
                </span>
                <h3 className={styles.home__portfolio_name}>
                  Оркестровая симфония
                </h3>
                <p className={styles.home__portfolio_description}>
                  Недавно мы работали с талантливым композитором, который
                  доверил нам сведение и мастеринг своей новой оркестровой
                  симфонии. Проект включал более десяти отдельных записей
                  инструментов, которые необходимо было гармонично объединить в
                  единую композицию.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq2"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Рок
                </span>
                <h3 className={styles.home__portfolio_name}>
                  Дебютный альбом молодой группы
                </h3>
                <p className={styles.home__portfolio_description}>
                  Молодая рок-группа, готовившая свой дебютный альбом,
                  обратилась к нам за помощью. Музыканты стремились к мощному и
                  чистому звучанию, которое передало бы энергию их живых
                  выступлений. Мы тщательно работали над сведением гитар,
                  барабанов и вокала, чтобы добиться идеального баланса и
                  динамики.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq3"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Электронная музыка
                </span>
                <h3 className={styles.home__portfolio_name}>
                  Трек для танцевального фестиваля
                </h3>
                <p className={styles.home__portfolio_description}>
                  Популярный диджей доверил нам мастеринг своего нового трека,
                  который должен был стать хедлайнером на международном
                  танцевальном фестивале. Наша задача заключалась в том, чтобы
                  трек звучал мощно и чисто на больших звуковых системах.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq4"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Джаз
                </span>
                <h3 className={styles.home__portfolio_name}>Живой альбом</h3>
                <p className={styles.home__portfolio_description}>
                  Известный джазовый коллектив записал живой альбом и доверил
                  нам его сведение и мастеринг. Наша задача была не из легких:
                  нужно было сохранить теплую, интимную атмосферу живого
                  выступления, при этом обеспечив четкость и баланс всех
                  инструментов.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq5"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Поп-музыка
                </span>
                <h3 className={styles.home__portfolio_name}>
                  Сингл для радиоротации
                </h3>
                <p className={styles.home__portfolio_description}>
                  Один из наших клиентов, поп-исполнитель, обратился к нам с
                  просьбой сделать его новый сингл готовым для радиоротации. Мы
                  сосредоточились на том, чтобы каждый элемент трека звучал ярко
                  и привлекательно, от вокала до инструментальных партий.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq6"}>
            <div className={styles.home__portfolio_item}>
              <div className={styles.home__portfolio_work}>
                <PortfolioWork key={"uniq1"} />
              </div>
              <div className={styles.home__portfolio_info}>
                <span className={styles.home__portfolio_category}>
                  Категорія: Хип-хоп
                </span>
                <h3 className={styles.home__portfolio_name}>
                  Микстейп молодого исполнителя
                </h3>
                <p className={styles.home__portfolio_description}>
                  Мы помогли молодому хип-хоп исполнителю подготовить его
                  микстейп к выпуску. Работа над проектом включала сведение
                  сложных ритмических структур, усиление басов и создание
                  мощного звучания. Мы также уделили внимание деталям, таким как
                  вокальные эффекты и обработка битов, чтобы создать уникальное
                  и профессиональное звучание.
                </p>
                {/* <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homePortfolio.homePortfolioButtonText")}
                  </Button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
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
