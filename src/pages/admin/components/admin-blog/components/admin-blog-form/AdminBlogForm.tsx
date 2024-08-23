import React, { useCallback, useState } from "react";
import styles from "./AdminBlogForm.module.css";
import { Accept, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminImage } from "../../../../../../utils/dropzone/dropzone";
import { createBlog } from "../../../../../../services/blog/blog";

interface Props {
  toggleBlogsForm: () => void;
  getAll: () => void;
}

interface FormValues {
  blog_language: string;
  title: string;
  text: string;
  descriptions: string[];
}

const AdminBlogForm: React.FC<Props> = ({ toggleBlogsForm, getAll }) => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { descriptions: [] },
  });

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropMainImage = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  }, []);

  const {
    getRootProps: getMainRootProps,
    getInputProps: getMainInputProps,
    isDragActive: isMainDragActive,
    isDragAccept: isMainDragAccept,
    isDragReject: isMainDragReject,
    isFocused: isMainFocused,
  } = useDropzone({
    onDrop: onDropMainImage,
    multiple: false,
    accept: acceptType,
  });

  const handleAddDescription = () => {
    const currentDescriptions = getValues("descriptions");
    const updatedDescriptions = [...currentDescriptions, ""];
    reset({ descriptions: updatedDescriptions });
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "descriptions") {
        formData.append("descriptions", JSON.stringify(data.descriptions));
      } else {
        formData.append(key, data[key]);
      }
    });

    if (mainImage) {
      formData.append("image_url", mainImage);
    }

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createBlog(formData, token);
        notify(response.message);
        getAll();
        reset();
        toggleBlogsForm();
        setMainImagePreview(null);
      } catch (error) {
        console.error("Error creating blog:", error);
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
          Зображення блогу
        </label>
        <AdminImage
          {...getMainRootProps({
            isdragactive: isMainDragActive.toString(),
            isdragaccept: isMainDragAccept.toString(),
            isdragreject: isMainDragReject.toString(),
            isfocused: isMainFocused.toString(),
          })}
        >
          <input {...getMainInputProps()} />
          {isMainDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть сюди файли</p>
          )}
        </AdminImage>
        {mainImagePreview && (
          <div className={styles.admin__drag_preview}>
            <img
              src={mainImagePreview}
              alt="banner preview"
              className={styles.admin__drag_image}
            />
          </div>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="blog_language" className={styles.admin__control_label}>
          Оберіть мову
        </label>
        <select
          className={styles.admin__control_field}
          {...register("blog_language", {
            required: `Це поле обов'язкове!`,
          })}
        >
          <option value="en">Англ</option>
          <option value="de">Нім</option>
          <option value="ru">Рос</option>
        </select>
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="title" className={styles.admin__control_label}>
          Заголовок блогу
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["title"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Заголовок блогу"
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
          Головний текст
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["text"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Головний текст"
          {...register("text", { required: `Це поле обов'язкове!` })}
        />
        {errors["text"] && (
          <span className={styles.error_message}>
            {errors["text"]?.message as string}
          </span>
        )}
      </div>
      {getValues("descriptions").map((description, index) => (
        <div key={index} className={styles.admin__block_control}>
          <label
            htmlFor={`descriptions.${index}`}
            className={styles.admin__control_label}
          >
            Опис статті {index + 1}
          </label>
          <input
            type="text"
            className={`${styles.admin__control_field} `}
            placeholder={`Опис статті ${index + 1}`}
            {...register(`descriptions.${index}`, {
              required: `Це поле обов'язкове!`,
            })}
          />
        </div>
      ))}
      <button
        onClick={handleAddDescription}
        className={styles.admin__add_button}
        type="button"
      >
        Додати опис до блогу
      </button>
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={toggleBlogsForm}
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

export default AdminBlogForm;
