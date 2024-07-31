import React, { useEffect, useState } from "react";
import styles from "./AdminPortfolio.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminPortfolioForm from "./components/admin-portfolio-form/AdminPortfolioForm";
import AdminPortfolioTable from "./components/admin-portfolio-table/AdminPortfolioTable";
import { IPortfolio } from "../../../../services/portfolio/portfolio.interface";
import {
  deletePortfolio,
  getAllPortfolios,
} from "../../../../services/portfolio/portfolio";

const AdminPortfolio: React.FC = () => {
  const [isAdminPortfolioFormOpen, setAdminPortfolioFormOpen] = useState(true);
  const [adminPortfolio, setAdminPortfolio] = useState<IPortfolio[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const portfolioData = await getAllPortfolios();
    setAdminPortfolio(portfolioData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handlePortfolioForm = () => {
    setAdminPortfolioFormOpen((prevState) => !prevState);
  };

  const onEditPortfolio = (portfolio: IPortfolio) => {
    navigate(`/admin/update-portfolio/${portfolio.id}`);
  };

  const onDeletePortfolio = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deletePortfolio(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__main_portfolio}>
      <div className={styles.admin__portfolio_form}>
        {isAdminPortfolioFormOpen && (
          <button
            onClick={handlePortfolioForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати портфоліо
          </button>
        )}
        {!isAdminPortfolioFormOpen && (
          <AdminPortfolioForm
            getAll={getAll}
            togglePortfolioForm={handlePortfolioForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminPortfolioTable
        adminPortfolio={adminPortfolio}
        handleEditPortfolio={onEditPortfolio}
        handleDeletePortfolio={onDeletePortfolio}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminPortfolio;
