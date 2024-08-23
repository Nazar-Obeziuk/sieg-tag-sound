import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./CartUploadArea.module.css";
import { useTranslation } from "react-i18next";
import { AdminImage } from "../../../../../utils/dropzone/dropzone";

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
  onRemoveBlock: (index: number) => void;
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
  onRemoveBlock,
}) => {
  const { t } = useTranslation();
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [isDescriptionError, setIsDescriptionError] = useState<boolean>(false);

  const handleDrop = (acceptedFiles: File[]) => {
    onDrop(acceptedFiles);
    setFileUploaded(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    multiple: true,
    accept: {
      "audio/*": [],
    },
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onDescriptionChange(index, value);

    if (fileUploaded && value.trim() === "") {
      setIsDescriptionError(true);
    } else {
      setIsDescriptionError(false);
    }
  };

  const handleRemoveBlock = () => {
    onRemoveBlock(index);
  };

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
          className={styles.dropzone}
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
        className={`${styles.cart__area_textarea} ${
          isDescriptionError ? styles.error : ""
        }`}
        placeholder={t("cartUpload.cartUploadTextareaPlaceholder")}
        value={description}
        onChange={handleTextareaChange}
      ></textarea>
      <span onClick={handleRemoveBlock} className={styles.cart__block_delete}>
        <img
          src="../../images/delete-icon.svg"
          alt="delete icon"
          className="cart__delete_icon"
        />
      </span>
    </div>
  );
};

export default DropzoneBlock;
