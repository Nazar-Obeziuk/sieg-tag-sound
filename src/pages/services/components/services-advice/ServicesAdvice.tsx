import React from "react";
import styles from "./ServicesAdvice.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const ServicesAdvice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__advice_section}>
      <div className="container">
        <div className={styles.services__advice_wrapper}>
          <h2 className={styles.servicse__advice_title}>
            {t("services.servicesAdvice.servicesAdviceButtonText")}
          </h2>
          <div className={styles.services__advice_main}>
            <Card>
              <h3>{t("services.servicesAdvice.servicesAdviceCardTitle1")}</h3>
              <div>
                <img
                  src="../../images/circle-list.svg"
                  alt="circle list icon"
                />
                <p>{t("services.servicesAdvice.servicesAdviceCardText1")}</p>
              </div>
              <div>
                <img
                  src="../../images/circle-list.svg"
                  alt="circle list icon"
                />
                <p>{t("services.servicesAdvice.servicesAdviceCardText2")}</p>
              </div>
              <div>
                <img
                  src="../../images/circle-list.svg"
                  alt="circle list icon"
                />
                <p>{t("services.servicesAdvice.servicesAdviceCardText3")}</p>
              </div>
              <div>
                <img
                  src="../../images/circle-list.svg"
                  alt="circle list icon"
                />
                <p>{t("services.servicesAdvice.servicesAdviceCardText4")}</p>
              </div>
              <p>{t("services.servicesAdvice.servicesAdviceCardText5")}</p>
              <p>{t("services.servicesAdvice.servicesAdviceCardText6")}</p>
            </Card>
          </div>
          <Button
            type={"button"}
            handleClick={() =>
              document
                .getElementById("servicesForm")!
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("services.servicesAdvice.servicesAdviceButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesAdvice;
