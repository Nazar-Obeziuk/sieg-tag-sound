import React, { useEffect, useState } from "react";
import styles from "./CartUploadService.module.css";
import { useTranslation } from "react-i18next";
import Toggle from "react-toggle";

interface Props {
  onServiceChange: (service: any) => void;
}

const CartUploadService: React.FC<Props> = ({ onServiceChange }) => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<"track" | "ep" | "album">(
    "track"
  );
  const [fastEnabled, setFastEnabled] = useState<boolean>(false);

  const handleServiceClick = (service: "track" | "ep" | "album") => {
    onServiceChange(service);
    setActiveService(service);
  };

  const handleChangeFast = (e: any) => {
    const isFastEnabled = e.target.checked;
    setFastEnabled(isFastEnabled);
    localStorage.setItem("fast", isFastEnabled ? "yes" : "no");
    console.log(isFastEnabled ? "on" : "off");
  };

  useEffect(() => {
    localStorage.setItem("category", activeService);
    localStorage.setItem("fast", "no");
    const fastSetting = localStorage.getItem("fast");
    setFastEnabled(fastSetting !== "yes");
  }, [activeService]);

  return (
    <div className={styles.cart__upload_choose}>
      <div className={styles.cart__choose_main}>
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
      {activeService === "track" && (
        <div className={styles.cart__choose_fast}>
          <h3 className={styles.cart__fast_title}>
            {t("cartUpload.cartUploadFillFastText")}
          </h3>
          <Toggle
            defaultChecked={fastEnabled}
            icons={false}
            onChange={handleChangeFast}
          />
        </div>
      )}
    </div>
  );
};

export default CartUploadService;
