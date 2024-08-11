import React, { useEffect, useState } from "react";
import styles from "./AdminBlog.module.css";
import AdminBlogForm from "./components/admin-blog-form/AdminBlogForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteBlog, getAllBlogs } from "../../../../services/blog/blog";
import { IBlog } from "../../../../services/blog/blog.interface";
import AdminBlogTable from "./components/admin-blog-table/AdminBlogTable";

const AdminBlog: React.FC = () => {
  const [isAdminBlogsFormOpen, setAdminBlogsFormOpen] = useState(true);
  const [adminBlogs, setAdminBlogs] = useState<IBlog[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const blogsData = await getAllBlogs();
    setAdminBlogs(blogsData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleBlogsForm = () => {
    setAdminBlogsFormOpen((prevState) => !prevState);
  };

  const onEditBlog = (blog: IBlog) => {
    navigate(`/admin-blog-update/${blog._id}`);
  };

  const onDeleteBlog = async (id: string) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей блог?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteBlog(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_blogs}>
      <div className={styles.admin__blogs_form}>
        {isAdminBlogsFormOpen && (
          <button
            onClick={handleBlogsForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати блог
          </button>
        )}
        {!isAdminBlogsFormOpen && (
          <AdminBlogForm
            getAll={getAll}
            toggleBlogsForm={handleBlogsForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminBlogTable
        adminBlogs={adminBlogs}
        handleEditBlog={onEditBlog}
        handleDeleteBlog={onDeleteBlog}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminBlog;
