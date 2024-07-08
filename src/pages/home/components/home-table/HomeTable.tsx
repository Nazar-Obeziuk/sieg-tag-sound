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
            {/* <table className={styles.home__table_item}>
              <thead>
                <th>Стилистика треков</th>
                <th>Мастеринг</th>
                <th>Сведение</th>
                <th>Вместе</th>
                <th>Цена за EP (от 2-5 треков)</th>
                <th>Цена за альбом (от 6-12 треков)</th>
              </thead>
              <tbody>
                <tr>
                  <td>Електроника</td>
                  <td>€150-€250</td>
                  <td>€200-€300</td>
                  <td>€300-€400</td>
                  <td>€250-€800</td>
                  <td>€800-€1200</td>
                </tr>
                <tr>
                  <td>Хип-Хоп</td>
                  <td>€120-€200</td>
                  <td>€150-€250</td>
                  <td>€250-€350</td>
                  <td>€200-€600</td>
                  <td>€600-€1000</td>
                </tr>
                <tr>
                  <td>Рок</td>
                  <td>€180-€300</td>
                  <td>€250-€350</td>
                  <td>€350-€500</td>
                  <td>€300-€1000</td>
                  <td>€1000-€1500</td>
                </tr>
                <tr>
                  <td>Поп</td>
                  <td>€150-€250</td>
                  <td>€200-€300</td>
                  <td>€300-€400</td>
                  <td>€250-€800</td>
                  <td>€800-€1200</td>
                </tr>
                <tr>
                  <td>Живые выступления</td>
                  <td>Нужно уточнять</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Кино</td>
                  <td>Нужно уточнять</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table> */}
            <table className={styles.home__table_item}>
              <thead>
                <th>Услуга</th>
                <th>Трек (€)</th>
                <th>EP (4-6 треков) (€)</th>
                <th>Альбом (10-12 треков) (€)</th>
              </thead>
              <tbody>
                <tr>
                  <td>Сведение</td>
                  <td>250</td>
                  <td>1000-1500</td>
                  <td>2500-3000</td>
                </tr>
                <tr>
                  <td>Мастеринг</td>
                  <td>100</td>
                  <td>400-600</td>
                  <td>1000-1200</td>
                </tr>
                <tr>
                  <td>Сведение и мастеринг вместе</td>
                  <td>300</td>
                  <td>1200-1800</td>
                  <td>3000-3600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button buttonText={"lorem dolor asit"} type={"button"} />
        </div>
      </div>
    </section>
  );
};

export default HomeTable;
