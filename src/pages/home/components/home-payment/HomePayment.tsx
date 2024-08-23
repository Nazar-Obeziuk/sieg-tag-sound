import React from "react";
import styles from "./HomePayment.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const HomePayment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__payment_section}>
      <div className="container">
        <div className={styles.home__payment_wrapper}>
          <h2 className={styles.home__payment_title}>
            {t("home.homePayment.homePaymentTitle")}
          </h2>
          <div className={styles.home__payment_main}>
            <div className={styles.home__payment_inner}>
              <Card>
                <h3>{t("home.homePayment.homePaymentFirstTitle")}</h3>
                <p>{t("home.homePayment.homePaymentFirstText")}</p>
                <h3>{t("home.homePayment.homePaymentSecondTitle")}</h3>
                <p>{t("home.homePayment.homePaymentSecondText")}</p>
              </Card>
              <div className={styles.home__payment_banner}>
                <img
                  src="../../images/payment-image.jpeg"
                  alt=""
                  className={styles.home__banner_image}
                />
              </div>
            </div>
            <Card>
              <h3>{t("home.homePayment.homePaymentThirdTitle")}</h3>
              <p>{t("home.homePayment.homePaymentThirdText")}</p>
            </Card>
          </div>
          <Button
            type={"button"}
            handleClick={() =>
              document
                .getElementById("homeForm")!
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("home.homePayment.homePaymentButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePayment;
