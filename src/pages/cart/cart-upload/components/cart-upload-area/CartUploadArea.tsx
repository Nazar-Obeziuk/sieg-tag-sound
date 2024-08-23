import React, { useState, useEffect } from "react";
import styles from "./CartUploadArea.module.css";
import DropzoneBlock from "./DropzoneBlock";
import { useTranslation } from "react-i18next";

interface CartUploadAreaProps {
  onBlocksChange: (
    blocks: Array<{ file: File | null; description: string; filename: string }>
  ) => void;
  onDriveLinkChange: (link: string) => void;
  selectedService: "track" | "ep" | "album";
  onValidityChange: (isValid: boolean) => void;
}

interface FormValues {
  drive: string;
}

const CartUploadArea: React.FC<CartUploadAreaProps> = ({
  onBlocksChange,
  onDriveLinkChange,
  selectedService,
  onValidityChange,
}) => {
  const { t } = useTranslation();

  const initialBlocks = [{ file: null, description: "", filename: "" }];
  const [blocks, setBlocks] = useState(initialBlocks);
  const [formData, setFormData] = useState<FormValues>({
    drive: "",
  });

  useEffect(() => {
    const isDriveLinkFilled = formData.drive.trim() !== "";
    const isFileUploaded = blocks.some((block) => block.file !== null);
    const isDescriptionFilled = blocks.every(
      (block) => block.description.trim() !== ""
    );

    const isValid =
      (isDriveLinkFilled && isDescriptionFilled) ||
      (isFileUploaded && isDescriptionFilled);

    onValidityChange(isValid);
  }, [blocks, formData.drive, onValidityChange]);

  const handleDrop = (index: number) => (acceptedFiles: File[]) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = prevBlocks.map((block: any, i: number) =>
        i === index
          ? {
              ...block,
              file: acceptedFiles[0],
              filename: acceptedFiles[0].name,
            }
          : block
      );
      onBlocksChange(updatedBlocks);
      return updatedBlocks;
    });
  };

  const handleDescriptionChange = (index: number, description: string) => {
    const newBlocks = blocks.map((block, i) =>
      i === index ? { ...block, description } : block
    );
    setBlocks(newBlocks);
    onBlocksChange(newBlocks);
  };

  const handleRemoveBlock = (index: number) => {
    const newBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(newBlocks);
    onBlocksChange(newBlocks);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    onDriveLinkChange(value);
  };

  const addBlock = () => {
    let maxBlocks = 1;

    switch (selectedService) {
      case "ep":
        maxBlocks = 6;
        break;
      case "album":
        maxBlocks = 25;
        break;
      case "track":
      default:
        maxBlocks = 1;
        break;
    }

    if (blocks.length < maxBlocks) {
      const newBlocks = [
        ...blocks,
        { file: null, description: "", filename: "" },
      ];
      setBlocks(newBlocks);
      onBlocksChange(newBlocks);
    }
  };

  const canAddMoreBlocks = () => {
    switch (selectedService) {
      case "ep":
        return blocks.length < 6;
      case "album":
        return blocks.length < 25;
      case "track":
      default:
        return blocks.length < 1;
    }
  };

  return (
    <div className={styles.cart__upload_area}>
      <h3 className={styles.cart__area_title}>
        {t("cartUpload.cartUploadSubtitle")}
      </h3>
      <div className={styles.cart__area_link}>
        <div
          className={`${styles.form__fields_control} ${styles.form__control_link}`}
        >
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
            name="drive"
            value={formData.drive}
            onChange={handleChange}
          />
          <div className={styles.form__link_info}>
            <span className={styles.form__info_circle}>
              <img src="../../images/question-icon.svg" alt="icon" />
            </span>
            <div className={styles.form__info_block}>
              <p className={styles.form__info_text}>
                {t("cartUpload.cartUploadInfoText")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart__area_heading}>
        <h3 className={styles.cart__area_title}>
          {t("cartUpload.cartUploadSubtitle2")}
        </h3>
        <p className={styles.cart__area_text}>
          {t("cartUpload.cartUploadSubtext")}
        </p>
      </div>

      <div className={styles.cart__area_main}>
        {blocks.map((block, index) => (
          <DropzoneBlock
            key={index}
            index={index}
            onDrop={handleDrop(index)}
            isDragActive={false}
            isDragAccept={false}
            isDragReject={false}
            isFocused={false}
            filename={block.filename}
            description={block.description}
            onDescriptionChange={handleDescriptionChange}
            onRemoveBlock={handleRemoveBlock} // Передаємо функцію видалення
          />
        ))}
        {canAddMoreBlocks() && (
          <div className={styles.cart__area_add} onClick={addBlock}>
            <svg
              className={styles.cart__add_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
            <p className={styles.cart__add_text}>
              {t("cartUpload.cartUploadAddText")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartUploadArea;
