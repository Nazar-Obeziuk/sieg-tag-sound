import React from "react";
import styles from "./RefundPolicy.module.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const RefundPolicy: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("refund.refundMeta.refundTitle")}</title>
        <meta name="description" content={t("refund.refundMeta.refundDescription")} />
        <meta name="keywords" content={t("refund.refundMeta.refundKeywords")} />
        <meta property="og:title" content={t("refund.refundMeta.refundTitle")} />
        <meta property="og:description" content={t("refund.refundMeta.refundDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/home-about.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <section className={styles.refund__section}>
        <div className="container">
          <div className={styles.refund__wrapper}>
            <h2 className={styles.refund__wrapper_title}>
              {t("refund.refundTitle")}
            </h2>
            <div className={styles.refund__wrapper_main}>
              <p className={styles.refund__main_text}>
                {t("refund.refundText1")}
              </p>
              <div className={styles.refund__main_control}>
                <p className={styles.refund__main_subtitle}>
                  {t("refund.refundSubtitle1")}
                </p>
                <ul className={styles.refund__control_list}>
                  <li className={styles.refund__list_item}>
                    <span className={styles.refun__item_count}>1.</span>
                    <p className={styles.refun__item_text}>
                      {t("refund.refundListText1")}
                    </p>
                  </li>
                  <li className={styles.refund__list_item}>
                    <span className={styles.refun__item_count}>2.</span>
                    <p className={styles.refun__item_text}>
                      {t("refund.refundListText2")}
                    </p>
                  </li>
                  <li className={styles.refund__list_item}>
                    <span className={styles.refun__item_count}>3.</span>
                    <p className={styles.refun__item_text}>
                      {t("refund.refundListText3")}
                    </p>
                  </li>
                </ul>
              </div>
              <p className={styles.refund__main_text}>
                {t("refund.refundText5")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
