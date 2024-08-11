import React, { useState } from "react";
import styles from "./CartUpload.module.css";
import CartUploadService from "./components/cart-upload-service/CartUploadService";
import CartUploadArea from "./components/cart-upload-area/CartUploadArea";
import Button from "../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";

const CartUpload: React.FC = () => {
  const { t } = useTranslation();
  const [blocks, setBlocks] = useState<
    Array<{ file: File | null; description: string }>
  >([]);
  const [selectedService, setSelectedService] = useState<string>("track");

  const handleBlocksChange = (
    newBlocks: Array<{ file: File | null; description: string }>
  ) => {
    setBlocks(newBlocks);
  };
  const handleServiceChange = (service: string) => {
    setSelectedService(service);
  };

  const handleButtonClick = () => {
    console.log("Selected Service:", selectedService);
    console.log("Blocks:", blocks);
  };

  return (
    <section className={styles.cart__upload_section}>
      <div className="container">
        <div className={styles.cart__upload_wrapper}>
          <CartUploadService onServiceChange={handleServiceChange} />
          <CartUploadArea onBlocksChange={handleBlocksChange} />
          <Button handleClick={handleButtonClick} type={"button"}>
            {t("cartUpload.cartUploadButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartUpload;
