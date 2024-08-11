import React, { useEffect, useState } from "react";
import styles from "./AdminLogin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../../services/auth/login/login";
import { toast } from "react-toastify";

const AdminLogin: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response: any = await loginUser(data);
      localStorage.setItem("token", response.data.token);
      setIsLoading(true);
      reset();
      checkToken();
      const notify = () => {
        toast.success("Вітаємо у адмін панелі!", {
          autoClose: 1000,
        });
      };
      notify();
    } catch (error) {
      console.log("login error", error);
      const notify = () => {
        toast.error("Неправильний логін або пароль", {
          autoClose: 1000,
        });
      };
      notify();
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) navigate("/admin");
  };

  return (
    <section className={styles.admin__login_section}>
      <div className={styles.container}>
        <div className={styles.admin__login_wrapper}>
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
            <svg
              className={styles.admin__router_arrow}
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.02008 1.0307L6.44975 5.50053L1.02008 9.97036"
                stroke="white"
                strokeOpacity="0.8"
              />
            </svg>
            <p
              className={`${styles.admin__router_name} ${styles.admin__router_active}`}
            >
              Адмін логін
            </p>
          </div>
          <div className={styles.admin__wrapper_main}>
            <div className={styles.admin__main_block}>
              <h2 className={styles.admin__block_title}>
                З поверненням до адмін панелі!
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.admin__block_form}
              >
                <input
                  type="text"
                  className={styles.admin__form_field}
                  placeholder="Ваш логін"
                  {...register("login", { required: true })}
                />
                <input
                  type="password"
                  className={styles.admin__form_field}
                  placeholder="Ваш пароль"
                  {...register("password", { required: true })}
                />
                <button
                  className={styles.admin__form_button}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Загрузка..." : "Увійти"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
