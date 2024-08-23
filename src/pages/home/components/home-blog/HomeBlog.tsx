import React, { useEffect, useState } from "react";
import styles from "./HomeBlog.module.css";
import HomeBlogItems from "./home-blog-items/HomeBlogItems";
import { useTranslation } from "react-i18next";
import { getAllBlogsByLang } from "../../../../services/blog/blog";
import { IBlog } from "../../../../services/blog/blog.interface";
import Loader from "../../../../components/loader/Loader";

const HomeBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { t, i18n } = useTranslation();

  const getBlogs = async () => {
    try {
      const response = await getAllBlogsByLang(i18n.language);
      setBlogs(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [i18n.language]);

  if (!blogs) {
    return <Loader />;
  }

  return (
    <>
      {blogs.length > 0 && (
        <section className={styles.home__blog_section}>
          <div className="container">
            <div className={styles.home__blog_wrapper}>
              <h2 className={styles.home__blog_title}>
                {t("home.homeBlog.homeBlogTitle")}
              </h2>
              <div className={styles.home__blog_main}>
                <HomeBlogItems blogs={blogs} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeBlog;
