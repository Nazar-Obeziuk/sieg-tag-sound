import React, { useEffect, useState } from "react";
import styles from "./AdminFullPrices.module.css";
import AdminFullPricesForm from "./components/admin-full-prices-form/AdminFullPricesForm";
import AdminFullPricesTable from "./components/admin-full-prices-table/AdminFullPricesTable";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IFullPrices } from "../../../../services/full-prices/fullPrices.interface";
import {
  deleteFullPrice,
  getAllFullPrices,
} from "../../../../services/full-prices/fullPrices";

const AdminFullPrices: React.FC = () => {
  const [isAdminBlogsFormOpen, setAdminBlogsFormOpen] = useState(true);
  const [adminFullPrices, setAdminFullPrices] = useState<IFullPrices[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const adminFullPricesData = await getAllFullPrices();
    setAdminFullPrices(adminFullPricesData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleFullPricesForm = () => {
    setAdminBlogsFormOpen((prevState) => !prevState);
  };

  const onEditFullPrice = (fullPrice: IFullPrices) => {
    navigate(`/admin-full-price-update/${fullPrice._id}`);
  };

  const onDeleteFullPrice = async (id: string) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цю ціну?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteFullPrice(id, token);
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
            onClick={handleFullPricesForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати повну ціну
          </button>
        )}
        {!isAdminBlogsFormOpen && (
          <AdminFullPricesForm
            getAll={getAll}
            toggleFullPricesForm={handleFullPricesForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminFullPricesTable
        adminFullPrices={adminFullPrices}
        handleEditFullPrice={onEditFullPrice}
        handleDeleteFullPrice={onDeleteFullPrice}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminFullPrices;
