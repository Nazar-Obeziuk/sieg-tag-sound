import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";
import { useNavigate } from "react-router-dom";

type AdminSidebarProps = {
  onSectionChange: (section: string) => void;
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onSectionChange }) => {
  const [activeAdminPage, setActiveAdminPage] = useState<
    "portfolio" | "blog" | "promocode"
  >("portfolio");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={styles.admin__content_sidebar}>
      <div className={styles.admin__sidebar_wrapper}>
        <div className={styles.admin__wrapper_pages}>
          <div
            onClick={() => {
              onSectionChange("portfolio");
              setActiveAdminPage("portfolio");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "portfolio" ? styles.active : ""
            }`}
          >
            Портфоліо
          </div>
          <div
            onClick={() => {
              onSectionChange("blog");
              setActiveAdminPage("blog");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "blog" ? styles.active : ""
            }`}
          >
            Блог
          </div>
          <div
            onClick={() => {
              onSectionChange("promocode");
              setActiveAdminPage("promocode");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "promocode" ? styles.active : ""
            }`}
          >
            Промокод
          </div>
        </div>
        <div className={styles.admin__wrapper_logout}>
          <div onClick={handleSignOut} className={styles.admin__wrapper_item}>
            Вийти
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
