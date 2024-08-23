import React, { useEffect, useState } from "react";
import styles from "./CartUploadService.module.css";
import { useTranslation } from "react-i18next";

interface Props {
  onServiceChange: (servicse: any) => void;
}

const CartUploadService: React.FC<Props> = ({ onServiceChange }) => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<"track" | "ep" | "album">(
    "track"
  );

  const handleServiceClick = (service: "track" | "ep" | "album") => {
    onServiceChange(service);
    setActiveService(service);
  };

  useEffect(() => {
    localStorage.setItem("category", activeService);
  }, [activeService]);

  return (
    <div className={styles.cart__upload_choose}>
      <h2 className={styles.cart__choose_title}>
        {t("cartUpload.cartUploadTitle")}
      </h2>
      <div className={styles.cart__choose_blocks}>
        <div
          onClick={() => handleServiceClick("track")}
          className={`${styles.cart__blocks_item} ${
            activeService === "track" ? styles.active : ""
          }`}
        >
          {t("cartUpload.cartUploadBlock1")}
        </div>
        <div
          onClick={() => handleServiceClick("ep")}
          className={`${styles.cart__blocks_item} ${
            activeService === "ep" ? styles.active : ""
          }`}
        >
          {t("cartUpload.cartUploadBlock2")}
        </div>
        <div
          onClick={() => handleServiceClick("album")}
          className={`${styles.cart__blocks_item} ${
            activeService === "album" ? styles.active : ""
          }`}
        >
          {t("cartUpload.cartUploadBlock3")}
        </div>
      </div>
    </div>
  );
};

export default CartUploadService;
