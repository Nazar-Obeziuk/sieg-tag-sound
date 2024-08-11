import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-blog-form/AdminBlogForm.module.css";
import { IBlog } from "../../../../../../services/blog/blog.interface";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { Accept, useDropzone } from "react-dropzone";
import {
  createBlogLang,
  getBlogById,
  getBlogByIdLang,
  updateBlog,
} from "../../../../../../services/blog/blog";
import { toast } from "react-toastify";
import { AdminImage } from "../../../../../../utils/dropzone/dropzone";

const AdminBlogUpdate: React.FC = () => {
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [blogImagePreview, setBlogImagePreview] = useState<string[] | null>(
    null
  );
  const [editedImageURL, setEditedImageURL] = useState<string>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editBlog, setEditBlog] = useState<IBlog>();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const { fields: fieldsDesc } = useFieldArray({
    control,
    name: "descriptions",
  });
  const navigate = useNavigate();

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropMainImage = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setBlogImage(file);

    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setBlogImagePreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
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

  useEffect(() => {
    const getEditedBlog = async () => {
      try {
        const editedBlog: IBlog = await getBlogById(id!);
        setEditBlog(editedBlog);

        if (editedBlog) {
          const updatedObject = {
            image_url: editedBlog.image_url,
            descriptions: editedBlog.descriptions,
            title: editedBlog.title,
            text: editedBlog.text,
            blog_language: editedBlog.blog_language,
          };
          setEditedImageURL(editedBlog.image_url);
          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEditedBlog();
  }, [id, reset]);

  const onChangeLanguage = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;

    if (editBlog) {
      try {
        const response = await getBlogByIdLang(
          editBlog.langID,
          selectedLanguage
        );

        if (response.length === 0) {
          reset({
            image_url: "",
            descriptions: [],
            title: "",
            text: "",
          });

          setEditedImageURL("");
          editBlog.image_url = "";
          setIsUpdate(false);
          setEditUploadOpen(true);
        } else {
          reset(response);
          setIsUpdate(true);
          setEditedImageURL(response.image_url);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const notify = (message: string) => toast(message);

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

    if (blogImage) {
      formData.append("image_url", blogImage);
    }

    const token = localStorage.getItem("token");

    if (token) {
      try {
        if (isUpdate) {
          const response = await updateBlog(formData, id!, token);
          notify(response.message);
        } else {
          const response = await createBlogLang(
            formData,
            token,
            editBlog!.langID
          );
          notify(response.message);
        }

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

  const handleAddDescription = () => {
    const currentDescriptions = getValues("descriptions");
    setValue("descriptions", [...currentDescriptions, ""]);
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
              <div
                className={`${styles.admin__block_control} ${styles.admin__control_block}`}
              >
                {!isEditUploadOpen && (
                  <div className={styles.admin__control_item}>
                    <label
                      htmlFor="image"
                      className={styles.admin__control_label}
                    >
                      Зображення блогу
                    </label>
                    <ul className={styles.admin__drag_slider}>
                      {editBlog?.image_url && (
                        <li className={styles.admin__drag_preview}>
                          <img
                            className={styles.admin__drag_image}
                            src={editedImageURL}
                            alt="blog img"
                          />
                        </li>
                      )}
                    </ul>
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
                          <p>Перетягніть файли сюди, або клацніть</p>
                        )}
                      </AdminImage>
                      <ul className={styles.admin__drag_slider}>
                        {blogImagePreview &&
                          blogImagePreview.map(
                            (imagePreview: string, index: number) => (
                              <li
                                key={index}
                                className={styles.admin__drag_preview}
                              >
                                <img
                                  className={styles.admin__drag_image}
                                  src={imagePreview}
                                  alt={`blog preview ${index}`}
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
                <label
                  htmlFor="blog_language"
                  className={styles.admin__control_label}
                >
                  Оберіть мову
                </label>
                <select
                  className={styles.admin__control_field}
                  {...register("blog_language", {
                    required: `Це поле обов'язкове!`,
                  })}
                  onChange={onChangeLanguage}
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
                  {...register("text", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["text"] && (
                  <span className={styles.error_message}>
                    {errors["text"]?.message as string}
                  </span>
                )}
              </div>
              {fieldsDesc.map((fieldDesc, index) => (
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
              {!isUpdate && (
                <>
                  {getValues("descriptions").map(
                    (descriptions: any, index: number) => (
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
                    )
                  )}
                  <button
                    onClick={handleAddDescription}
                    className={styles.admin__add_button}
                    type="button"
                  >
                    Додати опис до блогу
                  </button>
                </>
              )}
              <div className={styles.admin__block_actions}>
                <button
                  className={`${styles.admin__actions_button} ${styles.admin__button_full}`}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  {isUpdate
                    ? isLoading
                      ? "Оновлення..."
                      : "Підтвердити"
                    : isLoading
                    ? "Загрузка..."
                    : "Додати нову мову"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogUpdate;
