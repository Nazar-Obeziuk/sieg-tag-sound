import React from "react";
import { useDropzone, Accept } from "react-dropzone";
import styles from "./CartUploadArea.module.css";
import { AdminImage } from "../../../../../utils/dropzone/dropzone";
import { useTranslation } from "react-i18next";

interface DropzoneBlockProps {
  index: number;
  onDrop: (acceptedFiles: File[]) => void;
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
  filename: string;
  description: string;
  onDescriptionChange: (index: number, description: string) => void;
}

const DropzoneBlock: React.FC<DropzoneBlockProps> = ({
  index,
  onDrop,
  isDragActive,
  isDragAccept,
  isDragReject,
  isFocused,
  filename,
  description,
  onDescriptionChange,
}) => {
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
    multiple: false,
    accept: {
      "audio/*": [],
    },
  });

  return (
    <div key={index} className={styles.cart__area_block}>
      <div className={styles.cart__block_control}>
        <AdminImage
          {...getRootProps({
            isdragactive: isDragActive.toString(),
            isdragaccept: isDragAccept.toString(),
            isdragreject: isDragReject.toString(),
            isfocused: isFocused.toString(),
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>{t("cartUpload.cartUploadFilePlaceholder")}</p>
          ) : (
            <p>{t("cartUpload.cartUploadFilePlaceholder")}</p>
          )}
        </AdminImage>
        <span className={styles.cart__control_filename}>{filename || ""}</span>
      </div>
      <textarea
        className={styles.cart__area_textarea}
        placeholder={t("cartUpload.cartUploadTextareaPlaceholder")}
        value={description}
        onChange={(e) => onDescriptionChange(index, e.target.value)}
      ></textarea>
    </div>
  );
};

export default DropzoneBlock;
