import React from "react";
import styles from "./BlogDetailsInfo.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IBlog } from "../../../../../../services/blog/blog.interface";

interface Props {
  blog: IBlog;
}

const BlogDetailsInfo: React.FC<Props> = ({ blog }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.blog__route_section}>
        <div className="container">
          <div className={styles.blog__route_wrapper}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <NavLink to={"/blogs"} className={styles.main__route_active}>
              {t("blog.blogTitle")}
            </NavLink>
          </div>
        </div>
      </section>
      <section className={styles.blog__details_banner}>
        <img
          className={styles.blog__banner_item}
          src={blog?.image_url}
          alt="blog banner"
        />
      </section>
      <section className={styles.blog__details_section}>
        <div className="container">
          <div className={styles.blog__details_wrapper}>
            <h2 className={styles.blog__details_title}>{blog?.title}</h2>
            {blog?.descriptions.map((description: string, index: number) => (
              <p className={styles.blog__details_text} key={index}>
                {description}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsInfo;
