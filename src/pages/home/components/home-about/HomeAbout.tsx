import React from "react";
import Card from "../../../../components/UI/card/Card";
import styles from "./HomeAbout.module.css";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const HomeAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.home__about_section}>
      <div className="container">
        <div className={styles.home__about_wrapper}>
          <h2 className={styles.home__about_title}>
            {t("home.homeAbout.homeAboutTitle")}
          </h2>
          <div className={styles.home__about_main}>
            <div className={styles.home__main_banner}>
              <div className={styles.home__banner_item}>
                <img
                  src="../../images/home-about.webp"
                  alt="about banner"
                  className={styles.home__banner_image}
                />
              </div>
              <div className={styles.home__banner_card}>
                <Card>
                  <p className={styles.home__about_text}>
                    {t("home.homeAbout.homeAboutFirstText")}
                  </p>
                  <p className={styles.home__about_text}>
                    {t("home.homeAbout.homeAboutSecondText")}
                  </p>
                  <p className={styles.home__about_text}>
                    {t("home.homeAbout.homeAboutThirdText")}
                  </p>
                </Card>
              </div>
            </div>
            <Card>
              <h3 className={styles.home__about_subtitle}>
                {t("home.homeAbout.homeAboutCardTitle")}
              </h3>
              <p className={styles.home__about_text}>
                {t("home.homeAbout.homeAboutFourthText")}
              </p>
              <p className={styles.home__about_text}>
                {t("home.homeAbout.homeAboutFifthText")}
              </p>
              <p className={styles.home__about_text}>
                {t("home.homeAbout.homeAboutSixthText")}
              </p>
            </Card>
          </div>
          <Button type="button">
            {t("home.homeAbout.homeAboutButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
