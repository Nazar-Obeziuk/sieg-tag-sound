import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import BlogMain from "./components/blog-main/BlogMain";

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("blog.blogMeta.blogTitle")}</title>
        <meta name="description" content={t("blog.blogMeta.blogDescription")} />
        <meta name="keywords" content={t("blog.blogMeta.blogKeywords")} />
        <meta property="og:title" content={t("blog.blogMeta.blogTitle")} />
        <meta property="og:description" content={t("blog.blogMeta.blogDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/home-about.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <BlogMain />
    </>
  );
};

export default Blog;
