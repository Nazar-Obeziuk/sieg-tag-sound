import React from "react";
import styles from "./HomeServices.module.css";
import Card from "../../../../components/UI/card/Card";

const HomeServices: React.FC = () => {
  return (
    <section className={styles.home__services_section}>
      <div className="container">
        <div className={styles.home__services_wrapper}>
          <div className={styles.home__services_heading}>
            <h2 className={styles.home__services_title}>Наши Услуги</h2>
            <p className={styles.home__services_subtitle}>
              Наша компания надает наилучшие услуги на рынке
            </p>
          </div>
          <ul className={styles.home__services_list}>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>1</span>
              </div>
              <Card>
                <h3>Мастеринг музыкальных треков</h3>
                <p>
                  Наши эксперты используют передовые технологии и оборудование
                  для придания вашему треку профессионального, сбалансированного
                  звучания.
                </p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>2</span>
              </div>
              <Card>
                <h3>Сведение мультитрековых записей</h3>
                <p>
                  Наши звукоинженеры выполнят высококачественное сведение вашей
                  композиции, сохраняя ее творческий замысел и подчеркивая
                  лучшие аспекты каждого элемента.
                </p>
              </Card>
            </li>
            <li className={styles.home__list_block}>
              <div className={styles.home__list_circle}>
                <span className={styles.home__circle_text}>3</span>
              </div>
              <Card>
                <h3>Микширование и обработка звука</h3>
                <p>
                  Мы предлагаем услуги по микшированию вокала, инструментов и
                  ритм-секции, а также по применению различных звуковых эффектов
                  для достижения желаемого звучания.
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
