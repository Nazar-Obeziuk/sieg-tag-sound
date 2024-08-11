import React, { useEffect, useState } from "react";
import styles from "./HomePortfolio.module.css";
import HomePortfolioItems from "./home-portfolio-items/HomePortfolioItems";
import { useTranslation } from "react-i18next";
import { IPortfolio } from "../../../../services/portfolio/portfolio.interface";
import { getAllPortfoliosByLang } from "../../../../services/portfolio/portfolio";
import Loader from "../../../../components/loader/Loader";
import { NavLink } from "react-router-dom";

const HomePortfolio: React.FC = () => {
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
  const { t, i18n } = useTranslation();

  const getPortfolios = async () => {
    try {
      const response = await getAllPortfoliosByLang(i18n.language);
      setPortfolios(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, [i18n.language]);

  if (!portfolios) {
    return <Loader />;
  }

  return (
    <section className={styles.home__portfolio_section}>
      <div className="container">
        <div className={styles.home__portfolio_wrapper}>
          <h2 className={styles.home__portfolio_title}>
            {t("home.homePortfolio.homePortfolioTitle")}
          </h2>
          <div className={styles.home__portfolio_main}>
            <HomePortfolioItems portfolios={portfolios} />
          </div>
          <NavLink to={"/portfolio"} className={styles.home__portfolio_button}>
            {t("home.homePortfolio.homePortfolioButtonText")}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
