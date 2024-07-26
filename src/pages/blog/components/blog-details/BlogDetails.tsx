import React from "react";
import BlogDetailsInfo from "./components/blog-details-info/BlogDetailsInfo";
import BlogDetailsMore from "./components/blog-details-more/BlogDetailsMore";

const BlogDetails: React.FC = () => {
  return (
    <>
      <BlogDetailsInfo />
      <BlogDetailsMore />
    </>
  );
};

export default BlogDetails;
