import React, { useEffect, useState } from "react";
import styles from "./BlogMain.module.css";
import BlogItem from "../../../../components/blog-item/BlogItem";
import { useTranslation } from "react-i18next";
import { IBlog } from "../../../../services/blog/blog.interface";
import { getAllBlogsByLang } from "../../../../services/blog/blog";
import Loader from "../../../../components/loader/Loader";

const BlogMain: React.FC = () => {
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
    <section className={styles.blog__main_section}>
      <div className="container">
        <div className={styles.blog__main_wrapper}>
          <h2 className={styles.blog__main_title}>{t("blog.blogTitle")}</h2>
          <div className={styles.blog__main_block}>
            <ul className={styles.blog__block_list}>
              {blogs.map((blog: IBlog, index: number) => (
                <BlogItem blog={blog} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
