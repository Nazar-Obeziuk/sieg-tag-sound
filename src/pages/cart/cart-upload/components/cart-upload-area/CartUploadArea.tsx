import React, { useState } from "react";
import styles from "./CartUploadArea.module.css";
import DropzoneBlock from "./DropzoneBlock";
import { useTranslation } from "react-i18next";

interface CartUploadAreaProps {
  onBlocksChange: (
    blocks: Array<{ file: File | null; description: string; filename: string }>
  ) => void;
}

const CartUploadArea: React.FC<CartUploadAreaProps> = ({ onBlocksChange }) => {
  const { t } = useTranslation();
  const [blocks, setBlocks] = useState<
    Array<{ file: File | null; description: string; filename: string }>
  >([{ file: null, description: "", filename: "" }]);

  const handleDrop = (index: number) => (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === index ? { ...block, file, filename: file.name } : block
      )
    );
    onBlocksChange(blocks);
  };

  const handleDescriptionChange = (index: number, description: string) => {
    const newBlocks = blocks.map((block, i) =>
      i === index ? { ...block, description } : block
    );
    setBlocks(newBlocks);
    onBlocksChange(newBlocks);
  };

  const addBlock = () => {
    const newBlocks = [
      ...blocks,
      { file: null, description: "", filename: "" },
    ];
    setBlocks(newBlocks);
    onBlocksChange(newBlocks);
  };

  return (
    <div className={styles.cart__upload_area}>
      <h3 className={styles.cart__area_title}>
        {t("cartUpload.cartUploadSubtitle")}
      </h3>
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
          />
        ))}
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
      </div>
    </div>
  );
};

export default CartUploadArea;
