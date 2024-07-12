import React from "react";
import styles from "./HomeBlog.module.css";
import HomeBlogItems from "./home-blog-items/HomeBlogItems";

const HomeBlog: React.FC = () => {
  return (
    <section className={styles.home__blog_section}>
      <div className="container">
        <div className={styles.home__blog_wrapper}>
          <h2 className={styles.home__blog_title}>Блог</h2>
          <div className={styles.home__blog_main}>
            <HomeBlogItems key={"uniq1"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
