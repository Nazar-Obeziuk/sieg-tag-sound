import React from "react";
import styles from "./AdminCodeTable.module.css";
import { IPromocode } from "../../../../../../services/promocode/promocode.interface";

interface Props {
  adminPromocodes: IPromocode[];
  handleEditBlog: (promocode: IPromocode) => void;
  handleDeleteBlog: (_id: string) => void;
}

const AdminCodeTable: React.FC<Props> = ({
  adminPromocodes,
  handleEditBlog,
  handleDeleteBlog,
}) => {
  return (
    <div className={styles.admin__table_block}>
      {adminPromocodes.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Промокод</th>
              <th className={styles.admin__table_th}>Знижка</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminPromocodes.map((adminPromocode: IPromocode, index) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td className={styles.admin__table_td}>
                  {adminPromocode.promocode}
                </td>
                <td className={styles.admin__table_td}>
                  {adminPromocode.discount}
                </td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeleteBlog(adminPromocode._id)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditBlog(adminPromocode)}
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
          Промокоду ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminCodeTable;
