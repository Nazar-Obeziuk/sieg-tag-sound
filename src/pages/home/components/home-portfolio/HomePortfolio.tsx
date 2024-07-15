import React from "react";
import styles from "./HomePortfolio.module.css";
import HomePortfolioItems from "./home-portfolio-items/HomePortfolioItems";
import { useTranslation } from "react-i18next";

const HomePortfolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__portfolio_section}>
      <div className="container">
        <div className={styles.home__portfolio_wrapper}>
          <h2 className={styles.home__portfolio_title}>
            {t("home.homePortfolio.homePortfolioTitle")}
          </h2>
          <div className={styles.home__portfolio_main}>
            <HomePortfolioItems key={"uniq1"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
