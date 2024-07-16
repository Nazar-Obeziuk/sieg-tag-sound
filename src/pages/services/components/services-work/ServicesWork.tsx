import React from "react";
import styles from "./ServicesWork.module.css";
import Card from "../../../../components/UI/card/Card";
import { useTranslation } from "react-i18next";

const ServicesWork: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__work_section}>
      <div className="container">
        <div className={styles.services__work_wrapper}>
          <h2 className={styles.services__work_title}>
            {t("services.servicesWork.servicesWorkTitle")}
          </h2>
          <ul className={styles.services__work_list}>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>1</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard1Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard1Text1")}</p>
              </Card>
            </li>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>2</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard2Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard2Text1")}</p>
              </Card>
            </li>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>3</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard3Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard3Text1")}</p>
              </Card>
            </li>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>4</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard4Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard4Text1")}</p>
              </Card>
            </li>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>5</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard5Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard5Text1")}</p>
              </Card>
            </li>
            <li className={styles.services__list_block}>
              <div className={styles.services__list_circle}>
                <span className={styles.services__circle_text}>6</span>
              </div>
              <Card>
                <h3>{t("services.servicesWork.servicesWorkCard6Title1")}</h3>
                <p>{t("services.servicesWork.servicesWorkCard6Text1")}</p>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesWork;
