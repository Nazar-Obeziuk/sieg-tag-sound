import React, { useState } from "react";
import styles from "./AdminPricesForm.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createPrice } from "../../../../../../services/prices/prices";

interface Props {
  togglePricesForm: () => void;
  getAll: () => void;
}

const AdminPricesForm: React.FC<Props> = ({ togglePricesForm, getAll }) => {
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
        const response = await createPrice(data, token);
        notify(response.message);
        getAll();
        reset();
        togglePricesForm();
      } catch (error) {
        console.error("Error creating price:", error);
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
        <label htmlFor="track_mixmas" className={styles.admin__control_label}>
          Трек (Мас. + Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["track_mixmas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Трек (Мас. + Микс.)"
          {...register("track_mixmas", { required: `Це поле обов'язкове!` })}
        />
        {errors["track_mixmas"] && (
          <span className={styles.error_message}>
            {errors["track_mixmas"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="track_mix" className={styles.admin__control_label}>
          Трек (Мас.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["track_mix"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Трек (Мас.)"
          {...register("track_mix", { required: `Це поле обов'язкове!` })}
        />
        {errors["track_mix"] && (
          <span className={styles.error_message}>
            {errors["track_mix"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="track_mas" className={styles.admin__control_label}>
          Трек (Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["track_mas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Трек (Микс.)"
          {...register("track_mas", { required: `Це поле обов'язкове!` })}
        />
        {errors["track_mas"] && (
          <span className={styles.error_message}>
            {errors["track_mas"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="ep_mixmas" className={styles.admin__control_label}>
          EP (Мас. + Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["ep_mixmas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="EP (Мас. + Микс.)"
          {...register("ep_mixmas", { required: `Це поле обов'язкове!` })}
        />
        {errors["ep_mixmas"] && (
          <span className={styles.error_message}>
            {errors["ep_mixmas"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="ep_mix" className={styles.admin__control_label}>
          EP (Мас.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["ep_mix"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="EP (Мас.)"
          {...register("ep_mix", { required: `Це поле обов'язкове!` })}
        />
        {errors["ep_mix"] && (
          <span className={styles.error_message}>
            {errors["ep_mix"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="ep_mas" className={styles.admin__control_label}>
          EP (Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["ep_mas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="EP (Микс.)"
          {...register("ep_mas", { required: `Це поле обов'язкове!` })}
        />
        {errors["ep_mas"] && (
          <span className={styles.error_message}>
            {errors["ep_mas"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="album_mixmas" className={styles.admin__control_label}>
          Альбом (Мас. + Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["album_mixmas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Альбом (Мас. + Микс.)"
          {...register("album_mixmas", { required: `Це поле обов'язкове!` })}
        />
        {errors["almub_mixmas"] && (
          <span className={styles.error_message}>
            {errors["album_mixmas"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="album_mix" className={styles.admin__control_label}>
          Альбом (Мас.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["album_mix"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Альбом (Мас.)"
          {...register("album_mix", { required: `Це поле обов'язкове!` })}
        />
        {errors["album_mix"] && (
          <span className={styles.error_message}>
            {errors["album_mix"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="album_mas" className={styles.admin__control_label}>
          Альбом (Микс.)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["album_mas"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Альбом (Микс.)"
          {...register("album_mas", { required: `Це поле обов'язкове!` })}
        />
        {errors["album_mas"] && (
          <span className={styles.error_message}>
            {errors["album_mas"]?.message as string}
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
          onClick={togglePricesForm}
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

export default AdminPricesForm;
