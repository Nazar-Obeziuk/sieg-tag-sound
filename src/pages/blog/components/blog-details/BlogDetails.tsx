import React, { useEffect, useState } from "react";
import BlogDetailsInfo from "./components/blog-details-info/BlogDetailsInfo";
import BlogDetailsMore from "./components/blog-details-more/BlogDetailsMore";
import {
  getAllBlogsByLang,
  getBlogById,
  getBlogByIdLang,
} from "../../../../services/blog/blog";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { IBlog } from "../../../../services/blog/blog.interface";
import Loader from "../../../../components/loader/Loader";

const BlogDetails: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [blog, setBlog] = useState<IBlog>();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { i18n } = useTranslation();
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
          <BlogDetailsMore blogs={blogs} />{" "}
        </>
      ) : (
        <p>Нажаль біда</p>
      )}
    </>
  );
};

export default BlogDetails;
