import React, { useEffect, useState } from "react";
import styles from "./AdminCode.module.css";
import AdminCodeForm from "./components/admin-code-form/AdminCodeForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IPromocode } from "../../../../services/promocode/promocode.interface";
import {
  deletePromocode,
  getAllPromocodes,
} from "../../../../services/promocode/promocode";
import AdminCodeTable from "./components/admin-code-table/AdminCodeTable";

const AdminCode: React.FC = () => {
  const [isAdminPromocodesFormOpen, setAdminPromocodesFormOpen] =
    useState(true);
  const [adminPromocodes, setAdminPromocodes] = useState<IPromocode[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const promocodesData = await getAllPromocodes();
    setAdminPromocodes(promocodesData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handlePromocodesForm = () => {
    setAdminPromocodesFormOpen((prevState) => !prevState);
  };

  const onEditPromocode = (code: IPromocode) => {
    navigate(`/admin/update-promocode/${code.id}`);
  };

  const onDeletePromocode = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deletePromocode(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__main_blogs}>
      <div className={styles.admin__blogs_form}>
        {isAdminPromocodesFormOpen && (
          <button
            onClick={handlePromocodesForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати промокод
          </button>
        )}
        {!isAdminPromocodesFormOpen && (
          <AdminCodeForm
            getAll={getAll}
            togglePromocodesForm={handlePromocodesForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminCodeTable
        adminPromocodes={adminPromocodes}
        handleEditBlog={onEditPromocode}
        handleDeleteBlog={onDeletePromocode}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminCode;
