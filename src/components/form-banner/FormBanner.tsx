import React from "react";
import styles from "./FormBanner.module.css";
import { useTranslation } from "react-i18next";
import Form from "../form/Form";

const FormBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.banner__form_banner}>
      <div className={styles.banner__form_info}>
        <h3 className={styles.banner__info_title}>
          {t("bannerForm.bannerFormFirstTitle")}
        </h3>
        <div className={styles.banner__info_inner}>
          <p className={styles.banner__info_text}>
            {t("bannerForm.bannerFormFirstText")}
          </p>
          <ul className={styles.banner__info_list}>
            <li className={styles.banner__list_item}>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("bannerForm.bannerFormSecondText")}</p>
            </li>
            <li className={styles.banner__list_item}>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("bannerForm.bannerFormThirdText")}</p>
            </li>
          </ul>
          <p className={styles.banner__info_text}>
            {t("bannerForm.bannerFormFourthText")}
          </p>
        </div>
      </div>
      <div className={styles.banner__form_block}>
        <Form />
      </div>
    </div>
  );
};

export default FormBanner;
