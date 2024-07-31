import React, { useState } from "react";
import styles from "./AdminLayout.module.css";
import AdminPortfolio from "../admin-portfolio/AdminPortfolio";
import AdminSidebar from "../admin-sidebar/AdminSidebar";
import AdminBlog from "../admin-blog/AdminBlog";
import AdminCode from "../admin-code/AdminCode";

const AdminLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("portfolio");

  const renderContent = () => {
    switch (activeSection) {
      case "portfolio":
        return <AdminPortfolio />;
      case "blog":
        return <AdminBlog />;
      case "promocode":
        return <AdminCode />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.admin__wrapper_content}>
      <AdminSidebar key={"uniq1"} onSectionChange={setActiveSection} />
      <div className={styles.admin__content_main}>{renderContent()}</div>
    </div>
  );
};

export default AdminLayout;
