import React, { useEffect, useState } from "react";
import styles from "./AdminPrices.module.css";
import AdminPricesForm from "./components/admin-prices-form/AdminPricesForm";
import AdminPricesTable from "./components/admin-prices-table/AdminPricesTable";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IPrice } from "../../../../services/prices/prices.interface";
import { deletePrice, getAllPrices } from "../../../../services/prices/prices";

const AdminPrices: React.FC = () => {
  const [isAdminPricesFormOpen, setAdminPricesFormOpen] = useState(true);
  const [adminPrices, setAdminPrices] = useState<IPrice[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const pricesData = await getAllPrices();
    setAdminPrices(pricesData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handlePricesForm = () => {
    setAdminPricesFormOpen((prevState) => !prevState);
  };

  const onEditPrice = (price: IPrice) => {
    navigate(`/admin-price-update/${price._id}`);
  };

  const onDeletePrice = async (id: string) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей прайс?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deletePrice(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_blogs}>
      <div className={styles.admin__blogs_form}>
        {isAdminPricesFormOpen && (
          <button
            onClick={handlePricesForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати ціни
          </button>
        )}
        {!isAdminPricesFormOpen && (
          <AdminPricesForm
            getAll={getAll}
            togglePricesForm={handlePricesForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminPricesTable
        adminPrices={adminPrices}
        handleEditPrice={onEditPrice}
        handleDeletePrice={onDeletePrice}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminPrices;
