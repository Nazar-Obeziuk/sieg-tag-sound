import React from "react";
import styles from "./HomeBlogItems.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const HomeBlogItems: React.FC = () => {
  const swiper = useSwiper();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.home__blog_content}>
        <Swiper
          key={"uniq1"}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-blog",
            prevEl: ".arrow-left-blog",
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="blogSwiper"
        >
          <SwiperSlide key={"uniq1"}>
            <div className={styles.home__blog_item}>
              <img
                src="../../images/home-blog-1.jpg"
                alt="portfolio img"
                className={styles.home__blog_image}
              />
              <div className={styles.home__blog_info}>
                <h3 className={styles.home__blog_name}>Полезные статьи</h3>
                <p className={styles.home__blog_description}>
                  Мы публикуем информативные статьи на темы музыкального
                  мастеринга, сведения и аудиопроизводства. Вы найдете здесь
                  советы от наших экспертов, а также интересные кейсы из нашей
                  практики.
                </p>
                <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homeBlog.homeBlogButtonText")}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq2"}>
            <div className={styles.home__blog_item}>
              <img
                src="../../images/home-blog-1.jpg"
                alt="portfolio img"
                className={styles.home__blog_image}
              />
              <div className={styles.home__blog_info}>
                <h3 className={styles.home__blog_name}>Полезные статьи</h3>
                <p className={styles.home__blog_description}>
                  Мы публикуем информативные статьи на темы музыкального
                  мастеринга, сведения и аудиопроизводства. Вы найдете здесь
                  советы от наших экспертов, а также интересные кейсы из нашей
                  практики.
                </p>
                <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homeBlog.homeBlogButtonText")}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq3"}>
            <div className={styles.home__blog_item}>
              <img
                src="../../images/home-blog-1.jpg"
                alt="portfolio img"
                className={styles.home__blog_image}
              />
              <div className={styles.home__blog_info}>
                <h3 className={styles.home__blog_name}>Полезные статьи</h3>
                <p className={styles.home__blog_description}>
                  Мы публикуем информативные статьи на темы музыкального
                  мастеринга, сведения и аудиопроизводства. Вы найдете здесь
                  советы от наших экспертов, а также интересные кейсы из нашей
                  практики.
                </p>
                <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homeBlog.homeBlogButtonText")}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={"uniq4"}>
            <div className={styles.home__blog_item}>
              <img
                src="../../images/home-blog-1.jpg"
                alt="portfolio img"
                className={styles.home__blog_image}
              />
              <div className={styles.home__blog_info}>
                <h3 className={styles.home__blog_name}>Полезные статьи</h3>
                <p className={styles.home__blog_description}>
                  Мы публикуем информативные статьи на темы музыкального
                  мастеринга, сведения и аудиопроизводства. Вы найдете здесь
                  советы от наших экспертов, а также интересные кейсы из нашей
                  практики.
                </p>
                <div className={styles.home__info_action}>
                  <Button type={"button"}>
                    {t("home.homeBlog.homeBlogButtonText")}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-blog ${styles.arrow__slide_left} arrow-blog`}
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
        className={`arrow-right-blog ${styles.arrow__slide_right} arrow-blog`}
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

export default HomeBlogItems;
