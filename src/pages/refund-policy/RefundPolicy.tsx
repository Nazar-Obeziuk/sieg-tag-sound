import React from "react";
import styles from "./RefundPolicy.module.css";
import { useTranslation } from "react-i18next";

const RefundPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default RefundPolicy;
