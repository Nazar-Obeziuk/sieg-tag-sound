import React from "react";
import styles from "./HomeProcess.module.css";
import Card from "../../../../components/UI/card/Card";
import { useTranslation } from "react-i18next";

const HomeProcess: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__process_section}>
      <div className="container">
        <div className={styles.home__process_wrapper}>
          <div className={styles.home__process_heading}>
            <h2 className={styles.home__heading_title}>
              {t("home.homeProcess.homeProcessTitle")}
            </h2>
            <p className={styles.home__heading_subtitle}>
              {t("home.homeProcess.homeProcessSubtitle")}
            </p>
          </div>
          <div className={styles.home__process_main}>
            <div className={styles.home__process_inner}>
              <Card>
                <h3>{t("home.homeProcess.homeProcessFirstTitle")}</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("home.homeProcess.homeProcessFirstText")}</p>
                </div>
                <h3>{t("home.homeProcess.homeProcessSecondTitle")}</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("home.homeProcess.homeProcessSecondText")}</p>
                </div>
                <h3>{t("home.homeProcess.homeProcessThirdTitle")}</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("home.homeProcess.homeProcessThirdText")}</p>
                </div>
                <h3>{t("home.homeProcess.homeProcessFourthTitle")}</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>{t("home.homeProcess.homeProcessFourthText")}</p>
                </div>
              </Card>
            </div>
            <div className={styles.home__process_banner}>
              <img
                className={styles.home__banner_image}
                src="../../images/home-process.jpg"
                alt="process img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
