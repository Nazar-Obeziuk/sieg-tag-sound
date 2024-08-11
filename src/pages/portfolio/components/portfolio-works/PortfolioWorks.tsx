import React, { useEffect, useState } from "react";
import styles from "./PortfolioWorks.module.css";
import PortfolioWork from "../../../../components/portfolio-work/PortfolioWork";
import Loader from "../../../../components/loader/Loader";
import { IPortfolio } from "../../../../services/portfolio/portfolio.interface";
import { getAllPortfolios } from "../../../../services/portfolio/portfolio";

const PortfolioWorks: React.FC = () => {
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

  const getPortfolios = async () => {
    try {
      const response = await getAllPortfolios();
      setPortfolios(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  if (!portfolios) {
    return <Loader />;
  }

  return (
    <section className={styles.portfolio__works_section}>
      <div className="container">
        <div className={styles.portfolio__works_wrapper}>
          <ul className={styles.portfolio__works_list}>
            {portfolios.map((portfolio: IPortfolio, index: number) => (
              <PortfolioWork portfolio={portfolio} index={index} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWorks;
