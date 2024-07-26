import React from "react";
import styles from "./BlogDetailsInfo.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogDetailsInfo: React.FC = () => {
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <NavLink to={"/blog"} className={styles.main__route_active}>
              {t("blog.blogTitle")}
            </NavLink>
          </div>
        </div>
      </section>
      <section className={styles.blog__details_banner}></section>
      <section className={styles.blog__details_section}>
        <div className="container">
          <div className={styles.blog__details_wrapper}>
            <h2 className={styles.blog__details_title}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className={styles.blog__details_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, eaque nemo harum ratione nulla cupiditate at magnam
              doloremque tenetur aliquid animi accusantium vel, saepe
              repudiandae explicabo quod temporibus perspiciatis maxime illum ea
              iure. Obcaecati expedita ducimus iusto nisi? Quod, odit?
            </p>
            <p className={styles.blog__details_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, eaque nemo harum ratione nulla cupiditate at magnam
              doloremque tenetur aliquid animi accusantium vel, saepe
              repudiandae explicabo quod temporibus perspiciatis maxime illum ea
              iure. Obcaecati expedita ducimus iusto nisi? Quod, odit?
              doloremque tenetur aliquid animi accusantium vel, saepe
              repudiandae explicabo quod temporibus perspiciatis maxime illum ea
              iure. Obcaecati expedita ducimus iusto nisi? Quod, odit?
            </p>
            <p className={styles.blog__details_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, eaque nemo harum ratione nulla cupiditate at magnam
              doloremque tenetur aliquid animi accusantium vel, saepe
              repudiandae explicabo quod temporibus perspiciatis maxime illum ea
              iure. Obcaecati expedita ducimus iusto nisi? Quod, odit?
              doloremque tenetur aliquid animi accusantium vel, saepe
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsInfo;
