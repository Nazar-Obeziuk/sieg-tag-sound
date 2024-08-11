import React, { useCallback, useState } from "react";
import styles from "./Form.module.css";
import Button from "../UI/button/Button";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
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
  const [files, setFiles] = useState<File[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    // defaultValues: {
    //   firstName: "",
    //   phone: "",
    //   email: "",
    //   service: {},
    //   drive: "",
    //   promocode: "",
    //   file: null,
    // },
  });
  const { t } = useTranslation();

  const options = [
    { value: "track", label: "Mixing&Mastering" },
    { value: "ep", label: "Mixing" },
    { value: "album", label: "Mastering" },
  ];

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const driveLink = watch("drive");
  const file = watch("file");

  const onSubmit = async ({
    firstName,
    phone,
    email,
    service,
    drive,
    promocode,
  }: any): Promise<void> => {
    try {
      const message = `
        Прізвище та ім'я: ${firstName}
        Телефон: ${phone}
        Електронна пошта: ${email}
        Сервіс: ${service.label}
        Посилання на диск: ${drive}
        Промокод: ${promocode}
      `;

      console.log(message);

      await sendMessage(message, files);

      reset();
      setFiles([]);
    } catch (error) {
      console.log(error);
    }
  };

  // const isSubmitButtonDisabled = !driveLink && !file;

  return (
    <div className={styles.form__block}>
      <div className={styles.form__block_wrapper}>
        <div className={styles.form__wrapper_info}>
          <h3 className={styles.form__info_title}>{t("form.formTitle")}</h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form__wrapper_item}
        >
          <div className={styles.form__item_fields}>
            <div className={styles.form__fields_inner}>
              <div
                style={errors.firstName ? { border: "1px solid #EB001B" } : {}}
                className={styles.form__fields_control}
              >
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3296 10.0563C7.95168 8.6479 4.07387 8.6479 1.67898 10.0563C0.59659 10.6998 0 11.5706 0 12.5019C0 13.4332 0.59659 14.2964 1.67046 14.9324C2.86364 15.6441 4.43182 16 5.99998 16C7.56818 16 9.13638 15.6441 10.3296 14.9324C11.4034 14.2888 12 13.4256 12 12.4868C11.9915 11.5554 11.4034 10.6923 10.3296 10.0563Z"
                    fill="#A1ADCD"
                  />
                  <path
                    d="M5.99998 0C3.79369 0 2 1.79558 2 4.00422C2 6.17071 3.69264 7.92409 5.89895 7.99999C5.96628 7.99159 6.03368 7.99159 6.08418 7.99999C6.10108 7.99999 6.10948 7.99999 6.12628 7.99999C6.13478 7.99999 6.13478 7.99999 6.14318 7.99999C8.29898 7.92409 9.99158 6.17071 9.99998 4.00422C9.99998 1.79558 8.20628 0 5.99998 0Z"
                    fill="#A1ADCD"
                  />
                </svg>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.firstName")}
                  {...register("firstName", {
                    required: t("form.formFieldRequired"),
                  })}
                />
              </div>
              <div
                style={errors.phone ? { border: "1px solid #EB001B" } : {}}
                className={styles.form__fields_control}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86467 0.577066C3.68421 0.141147 3.20845 -0.0908738 2.75378 0.0333395L0.691376 0.595815C0.283581 0.70831 0 1.07861 0 1.50046C0 7.29864 4.70136 12 10.4995 12C10.9214 12 11.2917 11.7164 11.4042 11.3086L11.9667 9.24622C12.0909 8.79155 11.8589 8.31579 11.4229 8.13533L9.17303 7.19787C8.79102 7.0385 8.34807 7.14865 8.08792 7.46973L7.14109 8.62515C5.49116 7.84472 4.15529 6.50884 3.37485 4.85891L4.53027 3.91442C4.85135 3.65193 4.9615 3.21132 4.80213 2.82931L3.86467 0.579409V0.577066Z"
                    fill="#A1ADCD"
                  />
                </svg>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.phone")}
                  {...register("phone", {
                    required: t("form.formFieldRequired"),
                  })}
                />
              </div>
            </div>
            <div
              style={errors.email ? { border: "1px solid #EB001B" } : {}}
              className={styles.form__fields_control}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.459483 3.34138C0.323333 3.2656 0.149623 3.34715 0.133753 3.49536C-0.0877467 5.56391 -0.0341367 7.65211 0.294573 9.71121C0.467863 10.7967 1.40838 11.6288 2.56935 11.7239L3.8877 11.8319C6.62407 12.0559 9.37597 12.0559 12.1123 11.8319L13.4307 11.7239C14.5916 11.6288 15.5322 10.7967 15.7054 9.71121C16.0437 7.59211 16.0907 5.44221 15.8462 3.31457C15.8291 3.16531 15.6524 3.08527 15.5169 3.16429L10.5895 6.03751C9.00227 6.96311 7.00098 6.98251 5.39392 6.08801L0.459483 3.34138Z"
                  fill="#A1ADCD"
                />
                <path
                  d="M3.88839 0.168045C6.62476 -0.056015 9.37656 -0.056015 12.113 0.168045L13.4314 0.275995C14.309 0.347855 15.0607 0.840955 15.4501 1.5463C15.5 1.63653 15.4626 1.74577 15.3708 1.79931L9.90096 4.9889C8.72776 5.67299 7.24858 5.68729 6.06074 5.02616L0.554364 1.96121C0.465404 1.9117 0.424564 1.80977 0.464654 1.72006C0.820954 0.922795 1.62199 0.353625 2.57004 0.275995L3.88839 0.168045Z"
                  fill="#A1ADCD"
                />
              </svg>
              <input
                type="text"
                className={styles.form__control_input}
                placeholder={t("form.email")}
                {...register("email", {
                  required: t("form.formFieldRequired"),
                })}
              />
            </div>
            <div className={styles.form__fields_control}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM8.64844 4.89844L5.64844 7.89844C5.42813 8.11875 5.07188 8.11875 4.85391 7.89844L3.35391 6.39844C3.13359 6.17813 3.13359 5.82188 3.35391 5.60391C3.57422 5.38594 3.93047 5.38359 4.14844 5.60391L5.25 6.70547L7.85156 4.10156C8.07187 3.88125 8.42812 3.88125 8.64609 4.10156C8.86406 4.32187 8.86641 4.67812 8.64609 4.89609L8.64844 4.89844Z"
                  fill="#A1ADCD"
                />
              </svg>
              <Controller
                name="service"
                control={control}
                defaultValue={options[0]}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    styles={customStyles}
                    onChange={(selectedOption: any) =>
                      field.onChange(selectedOption)
                    }
                    value={field.value}
                  />
                )}
              />
            </div>
            <div className={styles.form__fields_inner}>
              <div className={styles.form__fields_control}>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1586 4.90157C12.2805 3.7797 12.2805 1.96287 11.1586 0.841006C10.1658 -0.151796 8.60114 -0.28086 7.45942 0.535223L7.42765 0.557065C7.14172 0.761582 7.0762 1.1587 7.28072 1.44264C7.48523 1.72659 7.88235 1.7941 8.16629 1.58958L8.19806 1.56774C8.83544 1.11303 9.70712 1.18452 10.2591 1.7385C10.8846 2.36396 10.8846 3.37662 10.2591 4.00209L8.03127 6.23391C7.40581 6.85937 6.39315 6.85937 5.76768 6.23391C5.2137 5.67992 5.14222 4.80824 5.59692 4.17285L5.61876 4.14108C5.82328 3.85515 5.75577 3.45803 5.47183 3.2555C5.18789 3.05297 4.78878 3.11849 4.58625 3.40244L4.56441 3.43421C3.74634 4.57394 3.8754 6.1386 4.86821 7.1314C5.99007 8.25327 7.8069 8.25327 8.92877 7.1314L11.1586 4.90157ZM0.8414 4.43694C-0.280467 5.5588 -0.280467 7.37563 0.8414 8.4975C1.8342 9.4903 3.39886 9.61936 4.54058 8.80328L4.57235 8.78144C4.85828 8.57692 4.9238 8.1798 4.71929 7.89586C4.51477 7.61192 4.11765 7.54441 3.83371 7.74892L3.80194 7.77077C3.16456 8.22547 2.29288 8.15399 1.74088 7.6C1.11541 6.97255 1.11541 5.95989 1.74088 5.33443L3.96873 3.1046C4.59419 2.47913 5.60685 2.47913 6.23232 3.1046C6.7863 3.65858 6.85778 4.53026 6.40308 5.16764L6.38124 5.19941C6.17672 5.48534 6.24423 5.88246 6.52817 6.08499C6.81211 6.28752 7.21122 6.22199 7.41375 5.93805L7.43559 5.90628C8.25366 4.76456 8.1246 3.1999 7.13179 2.2071C6.00993 1.08524 4.1931 1.08524 3.07123 2.2071L0.8414 4.43694Z"
                    fill="#A1ADCD"
                  />
                </svg>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.linkOnDrive")}
                  {...register("drive", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.form__fields_control}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.31399V5.41503C0 5.88137 0.183792 6.3285 0.512973 6.65768L5.34095 11.4857C6.02675 12.1715 7.13773 12.1715 7.82352 11.4857L11.4857 7.82353C12.1714 7.13774 12.1714 6.02676 11.4857 5.34096L6.65767 0.512982C6.32849 0.183802 5.88136 9.53055e-06 5.41502 9.53055e-06H1.31672C0.589782 -0.00273364 0 0.587048 0 1.31399ZM3.07235 2.1918C3.30516 2.1918 3.52844 2.28429 3.69306 2.44891C3.85768 2.61353 3.95017 2.83681 3.95017 3.06962C3.95017 3.30243 3.85768 3.5257 3.69306 3.69033C3.52844 3.85495 3.30516 3.94743 3.07235 3.94743C2.83954 3.94743 2.61626 3.85495 2.45164 3.69033C2.28702 3.5257 2.19454 3.30243 2.19454 3.06962C2.19454 2.83681 2.28702 2.61353 2.45164 2.44891C2.61626 2.28429 2.83954 2.1918 3.07235 2.1918Z"
                    fill="#A1ADCD"
                  />
                </svg>
                <input
                  type="text"
                  className={styles.form__control_input}
                  placeholder={t("form.promoCode")}
                  {...register("promocode", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className={styles.form__inner_upload}>
              <div
                className={styles.form__fields_control}
                // style={
                //   !isSubmitButtonDisabled ? { border: "1px solid #EB001B" } : {}
                // }
              >
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.896875 0.896875 0 2 0H7V4C7 4.55313 7.44687 5 8 5H12V14C12 15.1031 11.1031 16 10 16H2C0.896875 16 0 15.1031 0 14V2ZM12 4H8V0L12 4Z"
                    fill="#A1ADCD"
                  />
                </svg>
                <div {...getRootProps()} className={styles.form__control_file}>
                  <input
                    {...getInputProps()}
                    {...register("file", { required: true })}
                  />
                  {isDragActive ? (
                    <p>{t("form.uploadFiles")}...</p>
                  ) : (
                    <p>{t("form.uploadFiles")}</p>
                  )}
                </div>
              </div>
              {files.map((file: File, index: number) => (
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
