import React from "react";
import styles from "./ServicesForm.module.css";
import { useTranslation } from "react-i18next";
import FormBanner from "../../../../components/form-banner/FormBanner";

const ServicesForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.services__form_section}>
      <div className="container">
        <div className={styles.services__form_wrapper}>
          <div className={styles.services__form_heading}>
            <h2 className={styles.services__heading_title}>
              {t("services.servicesForm.servicesFormTitle")}
            </h2>
            <p className={styles.services__heading_subtitle}>
              {t("services.servicesForm.servicesFormSubtitle")}
            </p>
          </div>
          <FormBanner />
        </div>
      </div>
    </section>
  );
};

export default ServicesForm;
