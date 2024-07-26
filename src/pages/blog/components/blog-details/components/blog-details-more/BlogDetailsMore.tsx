import React from "react";
import styles from "./BlogDetailsMore.module.css";
import BlogItem from "../../../../../../components/blog-item/BlogItem";

const BlogDetailsMore: React.FC = () => {
  return (
    <section className={styles.blog__more_section}>
      <div className="container">
        <div className={styles.blog__more_wrapper}>
          <BlogItem key={"uniq1"} />
          <BlogItem key={"uniq2"} />
          <BlogItem key={"uniq3"} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMore;
