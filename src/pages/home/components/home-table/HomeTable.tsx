import React from "react";
import styles from "./HomeTable.module.css";
import Button from "../../../../components/UI/button/Button";

const HomeTable: React.FC = () => {
  return (
    <section className={styles.home__table_section}>
      <div className="container">
        <div className={styles.home__table_wrapper}>
          <h2 className={styles.home__table_title}>Сравнение цен</h2>
          <div className={styles.home__table_block}>
            <table className={styles.home__table_item}>
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Трек (€)</th>
                  <th>EP (4-6 треков) (€)</th>
                  <th>Альбом (10-12 треков) (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Сведение</td>
                  <td>250</td>
                  <td>1000-1500</td>
                  <td>2500-3000</td>
                </tr>
                <tr>
                  <td>Сведение и мастеринг вместе</td>
                  <td>300</td>
                  <td>1200-1800</td>
                  <td>3000-3600</td>
                </tr>
                <tr>
                  <td>Мастеринг</td>
                  <td>100</td>
                  <td>400-600</td>
                  <td>1000-1200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button type={"button"}>Заказать услуги</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTable;
