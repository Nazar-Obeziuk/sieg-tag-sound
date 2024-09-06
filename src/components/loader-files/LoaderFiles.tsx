import React from "react";
import styles from "./LoaderFiles.module.css";
import { TailSpin } from "react-loader-spinner";
import { useTranslation } from "react-i18next";

const LoaderFiles = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.loader}>
      <div className={styles.loader__wrapper}>
        <TailSpin color="var(--primary)" />
        <p className={styles.loader__text}>
          {t("cartUpload.cartUploadFileTextUploading")}
        </p>
      </div>
    </div>
  );
};

export default LoaderFiles;
