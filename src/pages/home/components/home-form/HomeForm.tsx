import React from "react";
import styles from "./HomeForm.module.css";
import Form from "../../../../components/form/Form";
import { useTranslation } from "react-i18next";

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
          <div className={styles.home__form_banner}>
            <div className={styles.home__form_info}>
              <h3 className={styles.home__info_title}>
                {t("home.homeForm.homeFormFirstTitle")}
              </h3>
              <div className={styles.home__info_inner}>
                <p className={styles.home__info_text}>
                  {t("home.homeForm.homeFormFirstText")}
                </p>
                <ul className={styles.home__info_list}>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>{t("home.homeForm.homeFormSecondText")}</p>
                  </li>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>{t("home.homeForm.homeFormThirdText")}</p>
                  </li>
                </ul>
                <p className={styles.home__info_text}>
                  {t("home.homeForm.homeFormFourthText")}
                </p>
              </div>
            </div>
            <div className={styles.home__form_block}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
