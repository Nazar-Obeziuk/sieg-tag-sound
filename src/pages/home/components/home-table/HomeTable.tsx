import React from "react";
import styles from "./HomeTable.module.css";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const HomeTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__table_section}>
      <div className="container">
        <div className={styles.home__table_wrapper}>
          <h2 className={styles.home__table_title}>
            {t("home.homeTable.homeTableTitle")}
          </h2>
          <div className={styles.home__table_block}>
            <table className={styles.home__table_item}>
              <thead>
                <tr>
                  <th>{t("home.homeTable.homeTableRow1")}</th>
                  <th>{t("home.homeTable.homeTableRow2")}</th>
                  <th>{t("home.homeTable.homeTableRow3")}</th>
                  <th>{t("home.homeTable.homeTableRow4")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("home.homeTable.homeTableColumn1")}</td>
                  <td>300</td>
                  <td>1200-1800</td>
                  <td>3000-3600</td>
                </tr>
                <tr>
                  <td>{t("home.homeTable.homeTableColumn2")}</td>
                  <td>250</td>
                  <td>1000-1500</td>
                  <td>2500-3000</td>
                </tr>
                <tr>
                  <td>{t("home.homeTable.homeTableColumn3")}</td>
                  <td>100</td>
                  <td>400-600</td>
                  <td>1000-1200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button type={"button"}>
            {t("home.homeTable.homeTableButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTable;
