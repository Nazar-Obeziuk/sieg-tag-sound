import React from "react";
import styles from "./HomeServices.module.css";
import Card from "../../../../components/UI/card/Card";
import { useTranslation } from "react-i18next";

const HomeServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__services_section}>
      <div className="container">
        <div className={styles.home__services_wrapper}>
          <div className={styles.home__services_heading}>
            <h2 className={styles.home__services_title}>
              {t("home.homeServices.homeServicesTitle")}
            </h2>
            <p className={styles.home__services_subtitle}>
              {t("home.homeServices.homeServicesSubtitle")}
            </p>
          </div>
          <ul className={styles.home__services_list}>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>1</span>
              </div>
              <Card>
                <h3>{t("home.homeServices.homeServicesFirstTitle")}</h3>
                <p>{t("home.homeServices.homeServicesFirstText")}</p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>2</span>
              </div>
              <Card>
                <h3>{t("home.homeServices.homeServicesSecondTitle")}</h3>
                <p>{t("home.homeServices.homeServicesSecondText")}</p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>3</span>
              </div>
              <Card>
                <h3>{t("home.homeServices.homeServicesThirdTitle")}</h3>
                <p>{t("home.homeServices.homeServicesThirdText")}</p>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
