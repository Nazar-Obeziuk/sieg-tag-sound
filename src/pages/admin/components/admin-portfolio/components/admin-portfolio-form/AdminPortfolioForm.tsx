import React, { useCallback, useState } from "react";
import styles from "./AdminPortfolioForm.module.css";
import { Accept, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AdminImage } from "../../../../../../utils/dropzone/dropzone";
import { createPortfolio } from "../../../../../../services/portfolio/portfolio";

interface Props {
  togglePortfolioForm: () => void;
  getAll: () => void;
}

const AdminPortfolioForm: React.FC<Props> = ({
  togglePortfolioForm,
  getAll,
}) => {
  const [mainImageBefore, setMainImageBefore] = useState<File | null>(null);
  const [mainImageAfter, setMainImageAfter] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const acceptType: Accept = {
    "audio/*": [],
  };

  const onDropMainImageBefore = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setMainImageBefore(file);
  }, []);

  const onDropMainImageAfter = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setMainImageAfter(file);
  }, []);

  const {
    getRootProps: getMainBeforeRootProps,
    getInputProps: getMainBeforeInputProps,
    isDragActive: isMainBeforeDragActive,
    isDragAccept: isMainBeforeDragAccept,
    isDragReject: isMainBeforeDragReject,
    isFocused: isMainBeforeFocused,
  } = useDropzone({
    onDrop: onDropMainImageBefore,
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
    onDrop: onDropMainImageAfter,
    multiple: false,
    accept: acceptType,
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (mainImageBefore && mainImageAfter) {
      formData.append("track_before", mainImageBefore);
      formData.append("track_after", mainImageAfter);
    }

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createPortfolio(formData, token);
        notify(response.message);
        getAll();
        reset();
        togglePortfolioForm();
      } catch (error) {
        console.error("Error creating portfolio:", error);
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
        <label htmlFor="image" className={styles.admin__control_label}>
          Файл трека до
        </label>
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
            <p>Перетягніть сюди файли</p>
          )}
        </AdminImage>
        <span className={styles.admin__control_label}>
          {mainImageBefore?.name}
        </span>
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Файл трека після
        </label>
        <AdminImage
          {...getMainAfterRootProps({
            isdragactive: isMainAfterDragActive.toString(),
            isdragaccept: isMainAfterDragAccept.toString(),
            isdragreject: isMainAfterDragReject.toString(),
            isfocused: isMainAfterFocused.toString(),
          })}
        >
          <input {...getMainAfterInputProps()} />
          {isMainAfterDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть сюди файли</p>
          )}
        </AdminImage>
        <span className={styles.admin__control_label}>
          {mainImageAfter?.name}
        </span>
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="portfolio_language"
          className={styles.admin__control_label}
        >
          Оберіть мову
        </label>
        <select
          className={styles.admin__control_field}
          {...register("portfolio_language", {
            required: `Це поле обов'язкове!`,
          })}
        >
          <option value="en">Англ</option>
          <option value="de">Нім</option>
          <option value="ru">Рос</option>
        </select>
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="name" className={styles.admin__control_label}>
          Назва трека
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
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
        <label htmlFor="category" className={styles.admin__control_label}>
          Категорія
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["category"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Категорія"
          {...register("category", { required: `Це поле обов'язкове!` })}
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
          className={styles.admin__control_field}
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
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={togglePortfolioForm}
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

export default AdminPortfolioForm;
