import React from "react";
import Form from "../../../../components/form/Form";
import styles from "./HomeMain.module.css";
import { useTranslation } from "react-i18next";

const HomeMain: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.home__main_section}>
      <div className="container">
        <div className={styles.home__main_wrapper}>
          <div className={styles.home__wrapper_info}>
            <h1 className={styles.home__info_title}>
              SiegTagSound - Профессиональный мастеринг и сведение музыки
            </h1>
            {/* <h1 className={styles.home__info_title}>{t("companyTitle")}</h1> */}
            <p className={styles.home__info_description}>
              Мы предлагаем широкий спектр услуг по мастерингу и сведению музыки
              любых жанров - от классической до современной. С нашим опытом
              более 6 лет мы поможем вам добиться идеального звучания вашего
              трека или альбома.
            </p>
            <div className={styles.home__info_inner}>
              <span className={styles.home__inner_text}>
                * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
              <div className={styles.home__inner_blocks}>
                <div className={styles.home__blocks_item}>
                  <div className={styles.home__blocks_wrapper}>
                    <span className={styles.home__item_text}>
                      Cделанных треков
                    </span>
                    <h2 className={styles.home__item_title}>21 240+</h2>
                  </div>
                </div>
                <div className={styles.home__blocks_item}>
                  <div className={styles.home__blocks_wrapper}>
                    <span className={styles.home__item_text}>
                      Удовлетворенных клиентов
                    </span>
                    <h2 className={styles.home__item_title}>1672+</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.home__wrapper_form}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
