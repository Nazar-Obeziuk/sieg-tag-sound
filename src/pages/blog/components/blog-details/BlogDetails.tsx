import React, { useEffect, useState } from "react";
import styles from "./BlogDetails.module.css";
import BlogDetailsInfo from "./components/blog-details-info/BlogDetailsInfo";
import BlogDetailsMore from "./components/blog-details-more/BlogDetailsMore";
import {
  getAllBlogsByLang,
  getBlogById,
  getBlogByIdLang,
} from "../../../../services/blog/blog";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { IBlog } from "../../../../services/blog/blog.interface";
import Loader from "../../../../components/loader/Loader";
import Button from "../../../../components/UI/button/Button";

const BlogDetails: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [blog, setBlog] = useState<IBlog>();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const getBlog = async () => {
    try {
      const response = await getBlogByIdLang(id!, i18n.language);

      if (response.length === 0) {
        setIsError(true);
      } else {
        setBlog(response);
        setIsError(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await getAllBlogsByLang(i18n.language);
      setBlogs(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
    getBlogs();
  }, [id, i18n.language]);

  if (!blogs && !blog) {
    return <Loader />;
  }

  return (
    <>
      {!isError ? (
        <>
          <BlogDetailsInfo blog={blog!} />
          <BlogDetailsMore blogs={blogs} />
        </>
      ) : (
        <section className={styles.blog__section_error}>
          <div className="container">
            <div className={styles.blog__error_wrapper}>
              <h3 className={styles.blog__error_text}>
                {t("blog.blogNotAvailable")}
              </h3>
              <NavLink to={"/"}>
                <Button type="button">{t("blog.blogGoHome")}</Button>
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetails;
