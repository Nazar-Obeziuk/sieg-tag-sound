import React from "react";
import styles from "./AdminCodeTable.module.css";
import { IPromocode } from "../../../../../../services/promocode/promocode.interface";

interface Props {
  adminPromocodes: IPromocode[];
  handleEditBlog: (promocode: IPromocode) => void;
  handleDeleteBlog: (id: number) => void;
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
              <th className={styles.admin__table_th}>Зображення</th>
              <th className={styles.admin__table_th}>Ім'я (Укр)</th>
              <th className={styles.admin__table_th}>Ім'я (Англ)</th>
              <th className={styles.admin__table_th}>Напрямок (Укр)</th>
              <th className={styles.admin__table_th}>Напрямок (Англ)</th>
              <th className={styles.admin__table_th}>Перший опис (Укр)</th>
              <th className={styles.admin__table_th}>Перший опис (Англ)</th>
              <th className={styles.admin__table_th}>Другий опис (Укр)</th>
              <th className={styles.admin__table_th}>Другий опис (Англ)</th>
              <th className={styles.admin__table_th}>Третій опис (Укр)</th>
              <th className={styles.admin__table_th}>Третій опис (Англ)</th>
              <th className={styles.admin__table_th}>Слайдер зображення</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          {/* <tbody className={styles.admin__table_body}>
                {adminBlogs.map((adminBlog: IBlog, index) => (
                  <tr key={index} className={styles.admin__table_tr}>
                    <td className={styles.admin__table_td}>
                      <img src={adminBlog.image_url} alt="worker banner" />
                    </td>
                    <td className={styles.admin__table_td}>{adminBlog.name_ua}</td>
                    <td className={styles.admin__table_td}>{adminBlog.name_en}</td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.subtitle_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.subtitle_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.first_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.first_description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.second_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.second_description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.third_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminBlog.third_description_en}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() => handleDeleteBlog(adminBlog.id)}
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() => handleEditBlog(adminBlog)}
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Редагувати
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody> */}
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Блогів ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminCodeTable;
