import React, { useState } from "react";
import styles from "./AdminFullPricesForm.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createFullPrice } from "../../../../../../services/full-prices/fullPrices";

interface Props {
  toggleFullPricesForm: () => void;
  getAll: () => void;
}

const AdminFullPricesForm: React.FC<Props> = ({
  toggleFullPricesForm,
  getAll,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createFullPrice(data, token);
        notify(response.message);
        getAll();
        reset();
        toggleFullPricesForm();
      } catch (error) {
        console.error("Error creating full price:", error);
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
        <label htmlFor="count" className={styles.admin__control_label}>
          Кількість треків
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["count"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Кількість треків"
          {...register("count", { required: `Це поле обов'язкове!` })}
        />
        {errors["count"] && (
          <span className={styles.error_message}>
            {errors["count"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="category" className={styles.admin__control_label}>
          Оберіть категорію
        </label>
        <select
          className={styles.admin__control_field}
          {...register("category", {
            required: `Це поле обов'язкове!`,
          })}
        >
          <option value="track">Трек</option>
          <option value="ep">EP</option>
          <option value="album">Album</option>
        </select>
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="mixingAndMastering"
          className={styles.admin__control_label}
        >
          Ціна за мікс та мас.
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={
            errors["mixingAndMastering"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Ціна за мікс та мас."
          {...register("mixingAndMastering", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["mixingAndMastering"] && (
          <span className={styles.error_message}>
            {errors["mixingAndMastering"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="mixing" className={styles.admin__control_label}>
          Ціна за мікс.
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["mixing"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ціна за мікс."
          {...register("mixing", { required: `Це поле обов'язкове!` })}
        />
        {errors["mixing"] && (
          <span className={styles.error_message}>
            {errors["mixing"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="mastering" className={styles.admin__control_label}>
          Ціна за мас.
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["mastering"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ціна за мас."
          {...register("mastering", { required: `Це поле обов'язкове!` })}
        />
        {errors["mastering"] && (
          <span className={styles.error_message}>
            {errors["mastering"]?.message as string}
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
          onClick={toggleFullPricesForm}
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

export default AdminFullPricesForm;
