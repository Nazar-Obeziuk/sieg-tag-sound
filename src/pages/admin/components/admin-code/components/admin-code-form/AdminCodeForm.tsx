import React, { useState } from "react";
import styles from "./AdminCodeForm.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createPromocode } from "../../../../../../services/promocode/promocode";

interface Props {
  togglePromocodesForm: () => void;
  getAll: () => void;
}

const AdminCodeForm: React.FC<Props> = ({ togglePromocodesForm, getAll }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const dataPromocode = {
      promocode: data.promocode,
      discount: data.discount,
    };

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createPromocode(dataPromocode, token);
        notify(response.message);
        getAll();
        reset();
        togglePromocodesForm();
      } catch (error) {
        console.error("Error creating promocode:", error);
        notify("Щось пішло не так...");
      } finally {
        setIsLoading(false);
      }
    } else {
      notify("Авторизуйтеся будь ласка!");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin__form_block}
    >
      <div className={styles.admin__block_control}>
        <label htmlFor="promocode" className={styles.admin__control_label}>
          Промокод
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["promocode"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Промокод"
          {...register("promocode", { required: `Це поле обов'язкове!` })}
        />
        {errors["promocode"] && (
          <span className={styles.error_message}>
            {errors["promocode"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="discount" className={styles.admin__control_label}>
          Знижка
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["discount"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Знижка"
          {...register("discount", { required: `Це поле обов'язкове!` })}
        />
        {errors["discount"] && (
          <span className={styles.error_message}>
            {errors["discount"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={togglePromocodesForm}
          className={styles.admin__actions_button}
          type="button"
          disabled={isLoading}
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default AdminCodeForm;
