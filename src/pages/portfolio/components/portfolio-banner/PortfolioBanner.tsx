import React from "react";
import styles from "./PortfolioBanner.module.css";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const PortfolioBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.portfolio__banner_section}>
      <div className="container">
        <div className={styles.portfolio__banner_wrapper}>
          <h2 className={styles.portfolio__banner_title}>
            {t("portfolio.portfolioTitle")}
          </h2>
          <p className={styles.portfolio__banner_text}>
            {t("portfolio.portfolioSubtitle")}
          </p>
          <Button type={"button"}>Lorem, ipsum dolor.</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
