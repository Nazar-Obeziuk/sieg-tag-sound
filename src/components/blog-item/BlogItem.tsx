import React from "react";
import styles from "./BlogItem.module.css";
import Button from "../UI/button/Button";
import { useTranslation } from "react-i18next";
import { IBlog } from "../../services/blog/blog.interface";
import { useNavigate } from "react-router-dom";

interface Props {
  blog: IBlog;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (langID: string) => {
    navigate(`/blog/${langID}`);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <li className={styles.blog__list_item}>
      <div className={styles.blog__item_banner}>
        <img
          src={blog.image_url}
          alt="blog img"
          className={styles.blog__banner_item}
        />
      </div>
      <div className={styles.blog__item_info}>
        <div className={styles.blog__info_wrapper}>
          <h3 className={styles.blog__info_title}>{blog.title}</h3>
          <p className={styles.blog__info_description}>
            {truncateText(blog.subtitle, 150)}
          </p>
        </div>
        <Button handleClick={() => handleNavigate(blog.langID)} type={"button"}>
          {t("blog.blogItemButtonText")}
        </Button>
      </div>
    </li>
  );
};

export default BlogItem;
