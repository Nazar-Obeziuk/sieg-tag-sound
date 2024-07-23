import React from "react";
import styles from "./PortfolioBanner.module.css";
import Button from "../../../../components/UI/button/Button";

const PortfolioBanner: React.FC = () => {
  return (
    <section className={styles.portfolio__banner_section}>
      <div className="container">
        <div className={styles.portfolio__banner_wrapper}>
          <h2 className={styles.portfolio__banner_title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.portfolio__banner_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            natus veritatis voluptatibus dicta odit, ipsam aut est magni numquam
            vel porro et ducimus magnam?
          </p>
          <Button type={"button"}>Lorem, ipsum dolor.</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
