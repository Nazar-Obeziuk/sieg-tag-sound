import React from "react";
import styles from "./AdminPricesTable.module.css";
import { IPrice } from "../../../../../../services/prices/prices.interface";

interface Props {
  handleEditPrice: (blog: IPrice) => void;
  handleDeletePrice: (id: string) => void;
  adminPrices: IPrice[];
}

const AdminPricesTable: React.FC<Props> = ({
  handleEditPrice,
  handleDeletePrice,
  adminPrices,
}) => {
  return (
    <div className={styles.admin__table_block}>
      {adminPrices.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Трек (Мас. + Микс.)</th>
              <th className={styles.admin__table_th}>Трек (Мас.)</th>
              <th className={styles.admin__table_th}>Трек (Микс.)</th>
              <th className={styles.admin__table_th}>EP (Мас. + Микс.)</th>
              <th className={styles.admin__table_th}>EP (Мас.)</th>
              <th className={styles.admin__table_th}>EP (Микс.)</th>
              <th className={styles.admin__table_th}>Альбом (Мас. + Микс.)</th>
              <th className={styles.admin__table_th}>Альбом (Мас.)</th>
              <th className={styles.admin__table_th}>Альбом (Микс.)</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminPrices.map((adminPrice: IPrice, index) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td className={styles.admin__table_td}>
                  {adminPrice.track_mixmas}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPrice.track_mas}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPrice.track_mix}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPrice.ep_mixmas}
                </td>
                <td className={styles.admin__table_td}>{adminPrice.ep_mas}</td>
                <td className={styles.admin__table_td}>{adminPrice.ep_mix}</td>
                <td className={styles.admin__table_td}>
                  {adminPrice.album_mixmas}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPrice.album_mas}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPrice.album_mix}
                </td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeletePrice(adminPrice._id)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditPrice(adminPrice)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Редагувати
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Цін ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminPricesTable;
