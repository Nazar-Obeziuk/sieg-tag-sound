import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("policy.policyMeta.policyTitle")}</title>
        <meta name="description" content={t("policy.policyMeta.policyDescription")} />
        <meta name="keywords" content={t("policy.policyMeta.policyKeywords")} />
        <meta property="og:title" content={t("policy.policyMeta.policyTitle")} />
        <meta property="og:description" content={t("policy.policyMeta.policyDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/home-about.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
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
    </>
  );
};

export default PrivacyPolicy;
