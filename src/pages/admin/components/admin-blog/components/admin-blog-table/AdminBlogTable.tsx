import React from "react";
import styles from "./AdminBlogTable.module.css";
import { IBlog } from "../../../../../../services/blog/blog.interface";

interface Props {
  handleEditBlog: (blog: IBlog) => void;
  handleDeleteBlog: (id: string) => void;
  adminBlogs: IBlog[];
}

const AdminBlogTable: React.FC<Props> = ({
  handleEditBlog,
  handleDeleteBlog,
  adminBlogs,
}) => {
  return (
    <div className={styles.admin__table_block}>
      {adminBlogs.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Зображення</th>
              <th
                className={`${styles.admin__table_th} ${styles.admin__table_descriptions}`}
              >
                Описи
              </th>
              <th className={styles.admin__table_th}>Мова блогу</th>
              <th className={styles.admin__table_th}>Заголовок</th>
              <th className={styles.admin__table_th}>Підзаголовок</th>
              <th className={styles.admin__table_th}>Текст</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminBlogs.map((adminBlog: IBlog, index) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td className={styles.admin__table_td}>
                  <img src={adminBlog.image_url} alt="blog img" />
                </td>
                <td className={styles.admin__table_td}>
                  {adminBlog.descriptions.map(
                    (description: string, index: number) => (
                      <p className={styles.admin__table_text} key={index}>
                        {description}
                      </p>
                    )
                  )}
                </td>
                <td className={styles.admin__table_td}>
                  {adminBlog.blog_language}
                </td>
                <td className={styles.admin__table_td}>{adminBlog.title}</td>
                <td className={styles.admin__table_td}>{adminBlog.subtitle}</td>
                <td className={styles.admin__table_td}>{adminBlog.text}</td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeleteBlog(adminBlog._id)}
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
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Блогів ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminBlogTable;
