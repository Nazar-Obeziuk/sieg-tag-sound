import React, { useEffect, useState } from "react";
import styles from "./HomeTable.module.css";
import Button from "../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";
import { IPrice } from "../../../../services/prices/prices.interface";
import { getAllPrices } from "../../../../services/prices/prices";
import Loader from "../../../../components/loader/Loader";

const HomeTable: React.FC = () => {
  const [prices, setPrices] = useState<IPrice[]>([]);
  const { t } = useTranslation();

  const getPrices = async () => {
    try {
      const response = await getAllPrices();
      setPrices(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrices();
  }, []);

  if (!prices) {
    return <Loader />;
  }

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
                  <td>{prices[0]?.track_mixmas}</td>
                  <td>{prices[0]?.ep_mixmas}</td>
                  <td>{prices[0]?.album_mixmas}</td>
                </tr>
                <tr>
                  <td>{t("home.homeTable.homeTableColumn2")}</td>
                  <td>{prices[0]?.track_mas}</td>
                  <td>{prices[0]?.ep_mas}</td>
                  <td>{prices[0]?.album_mas}</td>
                </tr>
                <tr>
                  <td>{t("home.homeTable.homeTableColumn3")}</td>
                  <td>{prices[0]?.track_mix}</td>
                  <td>{prices[0]?.ep_mix}</td>
                  <td>{prices[0]?.album_mix}</td>
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
