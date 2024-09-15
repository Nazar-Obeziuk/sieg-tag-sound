import React, { useEffect, useState } from "react";
import styles from "../admin-prices-form/AdminPricesForm.module.css";
import { IPrice } from "../../../../../../services/prices/prices.interface";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  getPriceById,
  updatePrice,
} from "../../../../../../services/prices/prices";

const AdminPricesUpdate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getEditedPrice = async () => {
      try {
        const editedPrice: IPrice = await getPriceById(id!);

        if (editedPrice) {
          const updatedObject = {
            track_mixmas: editedPrice.track_mixmas,
            track_mas: editedPrice.track_mas,
            track_mix: editedPrice.track_mix,
            ep_mixmas: editedPrice.ep_mixmas,
            ep_mas: editedPrice.ep_mas,
            ep_mix: editedPrice.ep_mix,
            album_mixmas: editedPrice.album_mixmas,
            album_mas: editedPrice.album_mas,
            album_mix: editedPrice.album_mix,
          };
          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEditedPrice();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await updatePrice(data, id!, token);
        notify(response.message);
        navigate("/admin");
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={styles.admin__update_section}>
      <div className={styles.container}>
        <div className={styles.admin__update_wrapper}>
          <div className={styles.admin__wrapper_route}>
            <NavLink to={"/"}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                className={styles.admin__router_icon}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                  stroke="white"
                  strokeOpacity="0.8"
                />
              </svg>
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.admin__router_arrow}
            />
            <NavLink
              to={"/admin"}
              className={`${styles.admin__router_name} ${styles.admin__router_active}`}
            >
              Адмін панель
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.admin__router_arrow}
            />
            <p
              className={`${styles.admin__router_name} ${styles.admin__router_active}`}
            >
              Редагування документу
            </p>
          </div>
          <h2 className={styles.admin__wrapper_title}>Оновлення даних блогу</h2>
          <div className={styles.admin__wrapper_main}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.admin__form_block}
            >
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="track_mixmas"
                  className={styles.admin__control_label}
                >
                  Трек (Мас. + Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["track_mixmas"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Трек (Мас. + Микс.)"
                  {...register("track_mixmas", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["track_mixmas"] && (
                  <span className={styles.error_message}>
                    {errors["track_mixmas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="track_mix"
                  className={styles.admin__control_label}
                >
                  Трек (Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["track_mix"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Трек (Микс.)"
                  {...register("track_mix", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["track_mix"] && (
                  <span className={styles.error_message}>
                    {errors["track_mix"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="track_mas"
                  className={styles.admin__control_label}
                >
                  Трек (Мас.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["track_mas"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Трек (Мас.)"
                  {...register("track_mas", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["track_mas"] && (
                  <span className={styles.error_message}>
                    {errors["track_mas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="ep_mixmas"
                  className={styles.admin__control_label}
                >
                  EP (Мас. + Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["ep_mixmas"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="EP (Мас. + Микс.)"
                  {...register("ep_mixmas", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["ep_mixmas"] && (
                  <span className={styles.error_message}>
                    {errors["ep_mixmas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label htmlFor="ep_mix" className={styles.admin__control_label}>
                  EP (Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["ep_mix"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder=" EP (Микс.)"
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
                  EP (Мас.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["ep_mas"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="EP (Мас.)"
                  {...register("ep_mas", { required: `Це поле обов'язкове!` })}
                />
                {errors["ep_mas"] && (
                  <span className={styles.error_message}>
                    {errors["ep_mas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="album_mixmas"
                  className={styles.admin__control_label}
                >
                  Альбом (Мас. + Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["album_mixmas"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Альбом (Мас. + Микс.)"
                  {...register("album_mixmas", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["album_mixmas"] && (
                  <span className={styles.error_message}>
                    {errors["album_mixmas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="album_mix"
                  className={styles.admin__control_label}
                >
                  Альбом (Микс.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["album_mix"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Альбом (Микс.)"
                  {...register("album_mix", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["album_mix"] && (
                  <span className={styles.error_message}>
                    {errors["album_mix"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="album_mas"
                  className={styles.admin__control_label}
                >
                  Альбом (Мас.)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["album_mas"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Альбом (Мас.)"
                  {...register("album_mas", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["album_mas"] && (
                  <span className={styles.error_message}>
                    {errors["album_mas"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_actions}>
                <button
                  className={`${styles.admin__actions_button} ${styles.admin__button_full}`}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? "Оновлення..." : "Підтвердити"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPricesUpdate;
