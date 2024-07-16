import React from "react";
import styles from "./ServicesMain.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const ServicesMain: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__main_section}>
      <div className="container">
        <div className={styles.services__main_wrapper}>
          <div className={styles.services__main_heading}>
            <h2 className={styles.services__heading_title}>
              {t("services.servicesMain.servicesMainTitle")}
            </h2>
            <p className={styles.services__heading_subtitle}>
              {t("services.servicesMain.servicesMainSubtitle")}
            </p>
          </div>
          <div className={styles.services__main_block}>
            <div className={styles.services__block_item}>
              <div className={styles.services__item_inner}>
                <Card>
                  <img
                    src="../../images/services-icon-1.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>{t("services.servicesMain.servicesMainCard1Title1")}</h3>
                  <p>{t("services.servicesMain.servicesMainCard1Text1")}</p>
                  <ul>
                    <li>{t("services.servicesMain.servicesMainCard1Text2")}</li>
                    <li>{t("services.servicesMain.servicesMainCard1Text3")}</li>
                  </ul>
                  <p>{t("services.servicesMain.servicesMainCard1Text4")}</p>
                </Card>
              </div>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-item-1.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
            </div>
            <div className={styles.services__block_item}>
              <div
                className={`${styles.services__item_banner} ${styles.services__banner_special}`}
              >
                <img
                  src="../../images/services-item-2.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
              <div
                className={`${styles.services__item_inner} ${styles.services__inner_special}`}
              >
                <Card>
                  <img
                    src="../../images/services-icon-2.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>{t("services.servicesMain.servicesMainCard2Title1")}</h3>
                  <p>{t("services.servicesMain.servicesMainCard2Text1")}</p>
                  <ul>
                    <li>{t("services.servicesMain.servicesMainCard2Text2")}</li>
                    <li>{t("services.servicesMain.servicesMainCard2Text3")}</li>
                    <li>{t("services.servicesMain.servicesMainCard2Text4")}</li>
                    <li>{t("services.servicesMain.servicesMainCard2Text5")}</li>
                    <li>{t("services.servicesMain.servicesMainCard2Text6")}</li>
                  </ul>
                </Card>
              </div>
            </div>
            <div className={styles.services__block_item}>
              <div className={styles.services__item_inner}>
                <Card>
                  <img
                    src="../../images/services-icon-3.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>{t("services.servicesMain.servicesMainCard3Title1")}</h3>
                  <p>{t("services.servicesMain.servicesMainCard3Text1")}</p>
                  <ul>
                    <li>{t("services.servicesMain.servicesMainCard3Text2")}</li>
                    <li>{t("services.servicesMain.servicesMainCard3Text3")}</li>
                    <li>{t("services.servicesMain.servicesMainCard3Text4")}</li>
                    <li>{t("services.servicesMain.servicesMainCard3Text5")}</li>
                    <li>{t("services.servicesMain.servicesMainCard3Text6")}</li>
                  </ul>
                </Card>
              </div>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-item-3.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
            </div>
          </div>
          <Button type={"button"}>
            {t("services.servicesMain.servicesMainButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
