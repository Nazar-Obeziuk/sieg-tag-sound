import React from "react";
import styles from "./Cookies.module.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


const Cookies: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{t("cookies.cookiesMeta.cookiesTitle")}</title>
        <meta name="description" content={t("cookies.cookiesMeta.cookiesDescription")} />
        <meta name="keywords" content={t("cookies.cookiesMeta.cookiesKeywords")} />
        <meta property="og:title" content={t("cookies.cookiesMeta.cookiesTitle")} />
        <meta property="og:description" content={t("cookies.cookiesMeta.cookiesDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/home-about.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <section className={styles.cookies__section}>
        <div className="container">
          <div className={styles.cookies__wrapper}>
            <h2 className={styles.cookies__wrapper_title}>
              {t("cookies.cookiesTitle")}
            </h2>
            <div className={styles.cookies__wrapper_main}>
              <p className={styles.cookies__main_text}>
                {t("cookies.cookiesText1")}
              </p>
              <div className={styles.cookies__main_control}>
                <p className={styles.cookies__main_subtitle}>
                  {t("cookies.cookiesSubtitle1")}
                </p>
                <p className={styles.cookies__main_text}>
                  {t("cookies.cookiesText2")}
                </p>
              </div>
              <div className={styles.cookies__main_control}>
                <p className={styles.cookies__main_subtitle}>
                  {t("cookies.cookiesSubtitle2")}
                </p>
                <ul className={styles.cookies__main_list}>
                  <li className={styles.cookies__list_item}>
                    <span className={styles.cookies__item_count}>1.</span>
                    <p className={styles.cookies__main_text}>
                      {t("cookies.cookiesText3")}
                    </p>
                  </li>
                  <li className={styles.cookies__list_item}>
                    <span className={styles.cookies__item_count}>2.</span>
                    <p className={styles.cookies__main_text}>
                      {t("cookies.cookiesText4")}
                    </p>
                  </li>
                  <li className={styles.cookies__list_item}>
                    <span className={styles.cookies__item_count}>3.</span>
                    <p className={styles.cookies__main_text}>
                      {t("cookies.cookiesText5")}
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.cookies__main_control}>
                <p className={styles.cookies__main_subtitle}>
                  {t("cookies.cookiesSubtitle3")}
                </p>
                <p className={styles.cookies__main_text}>
                  {t("cookies.cookiesText6")}
                </p>
              </div>
              <div className={styles.cookies__main_control}>
                <p className={styles.cookies__main_subtitle}>
                  {t("cookies.cookiesSubtitle4")}
                </p>
                <p className={styles.cookies__main_text}>
                  {t("cookies.cookiesText7")}
                </p>
              </div>
              <p className={styles.cookies__main_text}>
                {t("cookies.cookiesText8")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;
