import React from "react";
import styles from "./HomeServices.module.css";
import Card from "../../../../components/UI/card/Card";

const HomeServices: React.FC = () => {
  return (
    <section className={styles.home__services_section}>
      <div className="container">
        <div className={styles.home__services_wrapper}>
          <div className={styles.home__services_heading}>
            <h2 className={styles.home__services_title}>Наші Послуги</h2>
            <p className={styles.home__services_subtitle}>
              Наша компанія надає найкращі послуги на ринку
            </p>
          </div>
          <ul className={styles.home__services_list}>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>1</span>
              </div>
              <Card>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus quo rerum et, eum architecto quam iste quas
                  voluptas reprehenderit ipsa consectetur similique esse iusto
                  eos provident. Minus neque veritatis cumque!
                </p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>2</span>
              </div>
              <Card>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  fugit autem tempora? Blanditiis, cum! Recusandae soluta nam
                  enim iste quae sint odio. Quo, aperiam facilis quas
                  praesentium neque magnam sunt. Aperiam, accusamus. Eveniet
                  neque, quaerat a quos facilis consequatur. Laboriosam!
                </p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>3</span>
              </div>
              <Card>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia doloribus corporis, voluptates, temporibus provident
                  rem facere modi numquam ratione veritatis nihil vel soluta
                  rerum reprehenderit?
                </p>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
