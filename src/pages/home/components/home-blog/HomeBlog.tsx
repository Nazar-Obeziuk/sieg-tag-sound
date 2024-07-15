import React from "react";
import styles from "./HomeBlog.module.css";
import HomeBlogItems from "./home-blog-items/HomeBlogItems";
import { useTranslation } from "react-i18next";

const HomeBlog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__blog_section}>
      <div className="container">
        <div className={styles.home__blog_wrapper}>
          <h2 className={styles.home__blog_title}>
            {t("home.homeBlog.homeBlogTitle")}
          </h2>
          <div className={styles.home__blog_main}>
            <HomeBlogItems key={"uniq1"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
