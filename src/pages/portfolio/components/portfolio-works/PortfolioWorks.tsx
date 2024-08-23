import React, { useEffect, useState } from "react";
import styles from "./PortfolioWorks.module.css";
import PortfolioWork from "../../../../components/portfolio-work/PortfolioWork";
import Loader from "../../../../components/loader/Loader";
import { IPortfolio } from "../../../../services/portfolio/portfolio.interface";
import { getAllPortfoliosByLang } from "../../../../services/portfolio/portfolio";
import { useTranslation } from "react-i18next";

const PortfolioWorks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

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
    <section id="portfolios" className={styles.portfolio__works_section}>
      <div className="container">
        <div className={styles.portfolio__works_wrapper}>
          {portfolios.length > 0 ? (
            <ul className={styles.portfolio__works_list}>
              {portfolios.map((portfolio: IPortfolio, index: number) => (
                <PortfolioWork
                  portfolio={portfolio}
                  index={index}
                  key={index}
                />
              ))}
            </ul>
          ) : (
            <p className={styles.portfolio__works_empty}>
              {t("portfolio.portfolioEmpty")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioWorks;
