import React, { useCallback, useState } from "react";
import styles from "./AdminBlogForm.module.css";
import { Accept, useDropzone } from "react-dropzone";
import { useForm, useFieldArray } from "react-hook-form";
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
  descriptions: { value: string }[]; // Поле описів тепер містить об'єкти
}

const AdminBlogForm: React.FC<Props> = ({ toggleBlogsForm, getAll }) => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control, // додаємо control для управління полями
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { descriptions: [{ value: "" }] }, // Початкове значення descriptions
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "descriptions", // Використовуємо descriptions як масив
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

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("blog_language", data.blog_language);
    formData.append("title", data.title);
    formData.append("text", data.text);
    formData.append(
      "descriptions",
      JSON.stringify(data.descriptions.map((d) => d.value))
    );

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

      {fields.map((field, index) => (
        <div key={field.id} className={styles.admin__block_control}>
          <label
            htmlFor={`descriptions.${index}`}
            className={styles.admin__control_label}
          >
            Опис статті {index + 1}
          </label>
          <div className={styles.admin__control_inner}>
            <input
              type="text"
              className={`${styles.admin__control_field} `}
              placeholder={`Опис статті ${index + 1}`}
              {...register(`descriptions.${index}.value`, {
                required: `Це поле обов'язкове!`,
              })}
            />
            <span
              className={styles.admin__control_delete}
              onClick={() => remove(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
              </svg>
            </span>
          </div>
        </div>
      ))}

      <button
        onClick={() => append({ value: "" })}
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
