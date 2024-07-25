import React from "react";
import styles from "./PortfolioWorks.module.css";
import PortfolioWork from "../../../../components/portfolio-work/PortfolioWork";

const PortfolioWorks: React.FC = () => {
  return (
    <section className={styles.portfolio__works_section}>
      <div className="container">
        <div className={styles.portfolio__works_wrapper}>
          <ul className={styles.portfolio__works_list}>
            <PortfolioWork key={"uniq1"} />
            <PortfolioWork key={"uniq2"} />
            <PortfolioWork key={"uniq3"} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWorks;
