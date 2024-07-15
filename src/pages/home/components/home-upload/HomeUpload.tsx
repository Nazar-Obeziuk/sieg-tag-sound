import React from "react";
import styles from "./HomeUpload.module.css";
import Card from "../../../../components/UI/card/Card";
import { useTranslation } from "react-i18next";

const HomeUpload: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__upload_section}>
      <div className="container">
        <div className={styles.home__upload_wrapper}>
          <div className={styles.home__upload_heading}>
            <h2 className={styles.home__upload_title}>
              {t("home.homeUpload.homeUploadTitle")}
            </h2>
            <p className={styles.home__upload_subtitle}>
              {t("home.homeUpload.homeUploadSubtitle")}
            </p>
          </div>
          <Card>
            <h3>{t("home.homeUpload.homeUploadFirstTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadFirstText")}</p>
            </div>
            <h3>{t("home.homeUpload.homeUploadSecondTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadSecondText")}</p>
            </div>
            <h3>{t("home.homeUpload.homeUploadThirdTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadThirdText")}</p>
            </div>
            <h3>{t("home.homeUpload.homeUploadFourthTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadFourthText")}</p>
            </div>
            <h3>{t("home.homeUpload.homeUploadFifthTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadFifthText")}</p>
            </div>
            <h3>{t("home.homeUpload.homeUploadSixthTitle")}</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>{t("home.homeUpload.homeUploadSixthText")}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeUpload;
