import React from "react";
import styles from "./HomeForm.module.css";
import { useTranslation } from "react-i18next";
import FormBanner from "../../../../components/form-banner/FormBanner";

const HomeForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__form_section}>
      <div className="container">
        <div className={styles.home__form_wrapper}>
          <div className={styles.home__form_heading}>
            <h2 className={styles.home__heading_title}>
              {t("home.homeForm.homeFormTitle")}
            </h2>
            <p className={styles.home__heading_subtitle}>
              {t("home.homeForm.homeFormSubtitle")}
            </p>
          </div>
          <FormBanner />
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
