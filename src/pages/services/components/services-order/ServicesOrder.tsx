import React from "react";
import styles from "./ServicesOrder.module.css";
import Card from "../../../../components/UI/card/Card";
import { useTranslation } from "react-i18next";

const ServicesOrder: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__order_section}>
      <div className="container">
        <div className={styles.services__order_wrapper}>
          <div className={styles.services__order_heading}>
            <h2 className={styles.services__heading_title}>
              {t("services.servicesOrder.servicesOrderTitle")}
            </h2>
            <p className={styles.services__heading_subtitle}>
              {t("services.servicesOrder.servicesOrderSubtitle")}
            </p>
          </div>
          <div className={styles.services__order_main}>
            <Card>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-order-1.svg"
                  alt="services card icon"
                  className={styles.services__item_icon}
                />
              </div>
              <h3>{t("services.servicesOrder.servicesOrderCard1Title1")}</h3>
              <p>{t("services.servicesOrder.servicesOrderCard1Text1")}</p>
            </Card>
            <Card>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-order-2.svg"
                  alt="services card icon"
                  className={styles.services__item_icon}
                />
              </div>
              <h3>{t("services.servicesOrder.servicesOrderCard2Title1")}</h3>
              <p>{t("services.servicesOrder.servicesOrderCard2Text1")}</p>
            </Card>
            <Card>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-order-3.svg"
                  alt="services card icon"
                  className={styles.services__item_icon}
                />
              </div>
              <h3>{t("services.servicesOrder.servicesOrderCard3Title1")}</h3>
              <p>{t("services.servicesOrder.servicesOrderCard3Text1")}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOrder;
