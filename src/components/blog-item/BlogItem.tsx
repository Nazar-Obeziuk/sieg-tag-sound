import React from "react";
import styles from "./BlogItem.module.css";
import Button from "../UI/button/Button";
import { useTranslation } from "react-i18next";

const BlogItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <li className={styles.blog__list_item}>
      <div className={styles.blog__item_banner}>
        <img
          src="../../images/home-blog-1.jpg"
          alt="blog img"
          className={styles.blog__banner_item}
        />
      </div>
      <div className={styles.blog__item_info}>
        <h3 className={styles.blog__info_title}>Lorem ipsum dolor sit.</h3>
        <p className={styles.blog__info_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores
          deserunt, pariatur quia nihil facere laudantium?
        </p>
        <Button type={"button"}>{t("blog.blogItemButtonText")}</Button>
      </div>
    </li>
  );
};

export default BlogItem;
