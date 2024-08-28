import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.policy__section}>
      <div className="container">
        <div className={styles.policy__wrapper}>
          <h2 className={styles.policy__wrapper_title}>
            {t("policy.policyTitle")}
          </h2>
          <div className={styles.policy__wrapper_main}>
            <p className={styles.policy__main_text}>
              {t("policy.policyText1")}
            </p>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle1")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText2")}
              </p>
            </div>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle2")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText3")}
              </p>
            </div>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle3")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText4")}
              </p>
            </div>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle4")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText5Child1")}
                {t("policy.policyText5Child2")}
              </p>
            </div>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle5")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText6")}
              </p>
            </div>
            <div className={styles.policy__main_control}>
              <p className={styles.policy__main_subtitle}>
                {t("policy.policySubtitle6")}
              </p>
              <p className={styles.policy__main_text}>
                {t("policy.policyText7")}
              </p>
            </div>
            <p className={styles.policy__main_text}>
              {t("policy.policyText8Child1")}
              <NavLink
                to={"mailto:siegtagprod@hotmail.com"}
                className={styles.policy__main_link}
              >
                {t("policy.policyText8Child2")}
              </NavLink>
            </p>
            <p className={styles.policy__main_text}>
              {t("policy.policyText9")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
