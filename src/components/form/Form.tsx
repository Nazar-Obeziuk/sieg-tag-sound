import React, { useState } from "react";
import styles from "./Form.module.css";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { sendMessage } from "../../api/telegram";

interface FormValues {
  firstName: string;
  phone: string;
  email: string;
  service: any;
  drive: string;
  promocode: string;
  files: File[];
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    padding: "0",
    border: "none",
    outline: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px solid var(--border-gray)",
    color: state.isSelected ? "white" : "red",
    backgroundColor: state.isSelected ? "var(--input-gray)" : "white",
  }),
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    phone: "",
    email: "",
    service: { value: "track", label: "Mixing&Mastering" },
    drive: "",
    promocode: "",
    files: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  const options = [
    { value: "track", label: "Mixing&Mastering" },
    { value: "ep", label: "Mixing" },
    { value: "album", label: "Mastering" },
  ];

  const onDrop = (acceptedFiles: File[]) => {
    setFormData((prevState) => ({
      ...prevState,
      files: acceptedFiles,
    }));
    setErrors((prevState) => ({
      ...prevState,
      files: "",
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSelectChange = (selectedOption: any) => {
    setFormData((prevState) => ({
      ...prevState,
      service: selectedOption,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.phone) newErrors.phone = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (formData.files.length === 0) newErrors.files = "Please upload at least one file.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const message = `
        Прізвище та ім'я: ${formData.firstName}
        Телефон: ${formData.phone}
        Електронна пошта: ${formData.email}
        Сервіс: ${formData.service.label}
        Посилання на диск: ${formData.drive}
        Промокод: ${formData.promocode}
      `;

      await sendMessage(message, formData.files);

      setFormData({
        firstName: "",
        phone: "",
        email: "",
        service: { value: "track", label: "Mixing&Mastering" },
        drive: "",
        promocode: "",
        files: [],
      });
      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.form__block}>
      <div className={styles.form__block_wrapper}>
        <div className={styles.form__wrapper_info}>
          <h3 className={styles.form__info_title}>{t("form.formTitle")}</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.form__wrapper_item}>
          <div className={styles.form__item_fields}>
            <div className={styles.form__fields_inner}>
              <div
                style={errors.firstName ? { border: "1px solid #EB001B" } : {}}
                className={styles.form__fields_control}
              >
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.firstName")}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div
                style={errors.phone ? { border: "1px solid #EB001B" } : {}}
                className={styles.form__fields_control}
              >
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.phone")}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              style={errors.email ? { border: "1px solid #EB001B" } : {}}
              className={styles.form__fields_control}
            >
              <input
                type="text"
                className={styles.form__control_input}
                placeholder={t("form.email")}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__fields_control}>
              <Select
                options={options}
                styles={customStyles}
                onChange={handleSelectChange}
                value={formData.service}
              />
            </div>
            <div className={styles.form__fields_inner}>
              <div className={styles.form__fields_control}>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.linkOnDrive")}
                  name="drive"
                  value={formData.drive}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.form__fields_control}>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.promoCode")}
                  name="promocode"
                  value={formData.promocode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.form__inner_upload}>
              <div
                className={styles.form__fields_control}
                style={errors.files ? { border: "1px solid #EB001B" } : {}}
              >
                <div {...getRootProps()} className={styles.form__control_file}>
                  <input {...getInputProps()} accept="*/*" />
                  {isDragActive ? (
                    <p>{t("form.uploadFiles")}...</p>
                  ) : (
                    <p>{t("form.uploadFiles")}</p>
                  )}
                </div>
              </div>
              {formData.files.map((file: File, index: number) => (
                <span className={styles.form__file_name} key={index}>
                  {file.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.form__item_actions}>
            <button className={styles.form__button} type="submit">
              {t("form.submitText")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
