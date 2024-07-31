import React from "react";
import styles from "./AdminPortfolioTable.module.css";
import { IPortfolio } from "../../../../../../services/portfolio/portfolio.interface";

interface Props {
  handleEditPortfolio: (blog: IPortfolio) => void;
  handleDeletePortfolio: (id: number) => void;
  adminPortfolio: IPortfolio[];
}

const AdminPortfolioTable: React.FC<Props> = ({
  handleDeletePortfolio,
  handleEditPortfolio,
  adminPortfolio,
}) => {
  return (
    <div className={styles.admin__table_block}>
      {adminPortfolio.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Файл трека до</th>
              <th className={styles.admin__table_th}>Файл трека після</th>
              <th className={styles.admin__table_th}>Назва трека</th>
              <th className={styles.admin__table_th}>Категорія</th>
              <th className={styles.admin__table_th}>Заголовок</th>
              <th className={styles.admin__table_th}>Текст</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminPortfolio.map((item: IPortfolio, index) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td className={styles.admin__table_td}>{item.track_before}</td>
                <td className={styles.admin__table_td}>{item.track_after}</td>
                <td className={styles.admin__table_td}>{item.name}</td>
                <td className={styles.admin__table_td}>{item.category}</td>
                <td className={styles.admin__table_td}>{item.title}</td>
                <td className={styles.admin__table_td}>{item.text}</td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeletePortfolio(item.id)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditPortfolio(item)}
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
          Портфоліо ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminPortfolioTable;
