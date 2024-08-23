import React, { useEffect, useState } from "react";
import styles from "./BlogDetailsMore.module.css";
import BlogItem from "../../../../../../components/blog-item/BlogItem";
import { IBlog } from "../../../../../../services/blog/blog.interface";
import { useParams } from "react-router-dom";

interface Props {
  blogs: IBlog[];
}

const BlogDetailsMore: React.FC<Props> = ({ blogs }) => {
  const [uniqueBlogs, setUniqueBlogs] = useState<IBlog[]>([]);
  const { id } = useParams();

  const getUniqueBlogs = () => {
    const result = blogs.filter((blog) => blog.langID !== id);
    setUniqueBlogs(result);
  };

  useEffect(() => {
    getUniqueBlogs();
  }, [blogs, id]);

  return (
    <section className={styles.blog__more_section}>
      <div className="container">
        <div className={styles.blog__more_wrapper}>
          {uniqueBlogs.slice(0, 3).map((uniqueBlog: IBlog, index: number) => (
            <BlogItem blog={uniqueBlog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMore;
