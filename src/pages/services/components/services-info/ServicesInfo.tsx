import React from "react";
import styles from "./ServicesInfo.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const ServicesInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__info_section}>
      <div className="container">
        <div className={styles.services__info_wrapper}>
          <h2 className={styles.services__info_title}>
            {t("services.servicesInfo.servicesInfoTitle")}
          </h2>
          <div className={styles.services__info_main}>
            <div className={styles.services__main_banner}>
              <img
                src="../../images/services-info.webp"
                alt="services img"
                className={styles.services__banner_image}
              />
            </div>
            <div className={styles.services__main_inner}>
              <Card>
                <h3>{t("services.servicesInfo.servicesInfoCard1Title1")}</h3>
                <p>{t("services.servicesInfo.servicesInfoCard1Text1")}</p>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("services.servicesInfo.servicesInfoCard1Text2")}</p>
                </div>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("services.servicesInfo.servicesInfoCard1Text3")}</p>
                </div>
                <p>{t("services.servicesInfo.servicesInfoCard1Text4")}</p>
              </Card>
            </div>
          </div>
          <Button type={"button"}>
            {t("services.servicesInfo.servicesInfoButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
