import React from "react";
import styles from "./BlogMain.module.css";
import BlogItem from "../../../../components/blog-item/BlogItem";
import { useTranslation } from "react-i18next";

const BlogMain: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.blog__main_section}>
      <div className="container">
        <div className={styles.blog__main_wrapper}>
          <h2 className={styles.blog__main_title}>{t("blog.blogTitle")}</h2>
          <div className={styles.blog__main_block}>
            <ul className={styles.blog__block_list}>
              <BlogItem key={"uniq1"} />
              <BlogItem key={"uniq2"} />
              <BlogItem key={"uniq3"} />
              <BlogItem key={"uniq4"} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
