import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-portfolio-form/AdminPortfolioForm.module.css";
import { IPortfolio } from "../../../../../../services/portfolio/portfolio.interface";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Accept, useDropzone } from "react-dropzone";
import {
  getPortfolioById,
  updatePortfolio,
} from "../../../../../../services/portfolio/portfolio";
import { toast } from "react-toastify";
import { AdminImage } from "../../../../../../utils/dropzone/dropzone";

const AdminPortfolioUpdate: React.FC = () => {
  const [portfolioFilesBefore, setPortfolioFilesBefore] = useState<File | null>(
    null
  );
  const [portfolioFilesBeforePreview, setPortfolioFilesBeforePreview] =
    useState<string[] | null>(null);
  const [portfolioFilesAfter, setPortfolioFilesAfter] = useState<File | null>(
    null
  );
  const [portfolioFilesAfterPreview, setPortfolioFilesAfterPreview] = useState<
    string[] | null
  >(null);
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editPortfolio, setEditPortfolio] = useState<IPortfolio>();
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

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropMainFileBefore = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setPortfolioFilesBefore(file);

    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPortfolioFilesBeforePreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const onDropMainFileAfter = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setPortfolioFilesAfter(file);

    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPortfolioFilesAfterPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getMainBeforeRootProps,
    getInputProps: getMainBeforeInputProps,
    isDragActive: isMainBeforeDragActive,
    isDragAccept: isMainBeforeDragAccept,
    isDragReject: isMainBeforeDragReject,
    isFocused: isMainBeforeFocused,
  } = useDropzone({
    onDrop: onDropMainFileBefore,
    multiple: false,
    accept: acceptType,
  });

  const {
    getRootProps: getMainAfterRootProps,
    getInputProps: getMainAfterInputProps,
    isDragActive: isMainAfterDragActive,
    isDragAccept: isMainAfterDragAccept,
    isDragReject: isMainAfterDragReject,
    isFocused: isMainAfterFocused,
  } = useDropzone({
    onDrop: onDropMainFileAfter,
    multiple: false,
    accept: acceptType,
  });

  useEffect(() => {
    const getEditedPortfolio = async () => {
      try {
        const editedPortfolio: IPortfolio = await getPortfolioById(id!);
        setEditPortfolio(editedPortfolio);

        if (editedPortfolio) {
          const updatedObject = {
            track_before: editedPortfolio.track_before,
            track_after: editedPortfolio.track_after,
            name: editedPortfolio.name,
            category: editedPortfolio.category,
            title: editedPortfolio.title,
            text: editedPortfolio.text,
          };
          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEditedPortfolio();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (portfolioFilesBefore) {
      formData.append("track_before", portfolioFilesBefore);
    }

    if (portfolioFilesAfter) {
      formData.append("track_after", portfolioFilesAfter);
    }

    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await updatePortfolio(formData, id!, token);
        notify(response.message);
        navigate("/admin");
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChangePhoto = () => {
    setEditUploadOpen((prevState) => !prevState);
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
              to={"/prostopoo-admin-panel"}
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
          <h2 className={styles.admin__wrapper_title}>
            Оновлення даних портфоліо
          </h2>
          <div className={styles.admin__wrapper_main}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.admin__form_block}
            >
              <div
                className={`${styles.admin__block_control} ${styles.admin__control_block}`}
              >
                {!isEditUploadOpen && (
                  <div className={styles.admin__control_item}>
                    <label
                      htmlFor="image"
                      className={styles.admin__control_label}
                    >
                      Файл треку до
                    </label>
                    {/* <ul className={styles.admin__drag_slider}>
                        {editPortfolio?.track_before &&
                          editPortfolio?.track_before.map(
                            (track: string, index: number) => (
                              <li
                                key={index}
                                className={styles.admin__drag_preview}
                              >
                                <img
                                  className={styles.admin__drag_image}
                                  src={track}
                                  alt={`portfolio preview ${index}`}
                                />
                              </li>
                            )
                          )}
                      </ul> */}
                  </div>
                )}
                <div className={styles.admin__control_item}>
                  <button
                    onClick={handleChangePhoto}
                    className={styles.admin__control_add}
                    type="button"
                  >
                    {!isEditUploadOpen ? "Змінити файл" : "Скасувати"}
                  </button>
                  {isEditUploadOpen && (
                    <div className={styles.admin__control_upload}>
                      <AdminImage
                        {...getMainBeforeRootProps({
                          isdragactive: isMainBeforeDragActive.toString(),
                          isdragaccept: isMainBeforeDragAccept.toString(),
                          isdragreject: isMainBeforeDragReject.toString(),
                          isfocused: isMainBeforeFocused.toString(),
                        })}
                      >
                        <input {...getMainBeforeInputProps()} />
                        {isMainBeforeDragActive ? (
                          <p>Перетягніть сюди файли ...</p>
                        ) : (
                          <p>Перетягніть файли сюди, або клацніть</p>
                        )}
                      </AdminImage>
                      <ul className={styles.admin__drag_slider}>
                        {portfolioFilesBeforePreview &&
                          portfolioFilesBeforePreview.map(
                            (
                              certificateImagePreview: string,
                              index: number
                            ) => (
                              <li
                                key={index}
                                className={styles.admin__drag_preview}
                              >
                                <img
                                  className={styles.admin__drag_image}
                                  src={certificateImagePreview}
                                  alt={`certificate preview ${index}`}
                                />
                              </li>
                            )
                          )}
                      </ul>
                      {errors["image_url"] && (
                        <span className={styles.error_message}>
                          {errors["image_url"]?.message as string}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.admin__block_control}>
                <label htmlFor="name" className={styles.admin__control_label}>
                  Назва трека
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={errors["name"] ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Назва трека"
                  {...register("name", { required: `Це поле обов'язкове!` })}
                />
                {errors["name"] && (
                  <span className={styles.error_message}>
                    {errors["name"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="category"
                  className={styles.admin__control_label}
                >
                  Категорія
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["category"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Категорія"
                  {...register("category", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["category"] && (
                  <span className={styles.error_message}>
                    {errors["category"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label htmlFor="title" className={styles.admin__control_label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={errors["title"] ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Заголовок"
                  {...register("title", { required: `Це поле обов'язкове!` })}
                />
                {errors["title"] && (
                  <span className={styles.error_message}>
                    {errors["title"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label htmlFor="text" className={styles.admin__control_label}>
                  Текст
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={errors["text"] ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Текст"
                  {...register("text", { required: `Це поле обов'язкове!` })}
                />
                {errors["text"] && (
                  <span className={styles.error_message}>
                    {errors["text"]?.message as string}
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

export default AdminPortfolioUpdate;
