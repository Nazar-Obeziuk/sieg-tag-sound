import React from "react";
import styles from "./AdminFullPricesTable.module.css";
import { IFullPrices } from "../../../../../../services/full-prices/fullPrices.interface";

interface Props {
  adminFullPrices: IFullPrices[];
  handleEditFullPrice: (fullPrice: IFullPrices) => void;
  handleDeleteFullPrice: (_id: string) => void;
}

const AdminFullPricesTable: React.FC<Props> = ({
  adminFullPrices,
  handleEditFullPrice,
  handleDeleteFullPrice,
}) => {
  return (
    <div className={styles.admin__table_block}>
      {adminFullPrices.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Кількість</th>
              <th className={styles.admin__table_th}>Категорія</th>
              <th className={styles.admin__table_th}>Ціна за мікс. та мас.</th>
              <th className={styles.admin__table_th}>Ціна за мікс.</th>
              <th className={styles.admin__table_th}>Ціна за макс.</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminFullPrices
              .reverse()
              .map((adminFullPrice: IFullPrices, index: number) => (
                <tr key={index} className={styles.admin__table_tr}>
                  <td className={styles.admin__table_td}>
                    {adminFullPrice.count}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminFullPrice.category}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminFullPrice.mixingAndMastering}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminFullPrice.mixing}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminFullPrice.mastering}
                  </td>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                  >
                    <button
                      onClick={() => handleDeleteFullPrice(adminFullPrice._id)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Видалити
                    </button>
                    <button
                      onClick={() => handleEditFullPrice(adminFullPrice)}
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
          Повноцінної ціни ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminFullPricesTable;
