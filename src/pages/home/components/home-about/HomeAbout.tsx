import React from "react";
import Card from "../../../../components/UI/card/Card";
import styles from "./HomeAbout.module.css";
import Button from "../../../../components/UI/button/Button";

const HomeAbout: React.FC = () => {
  return (
    <section className={styles.home__about_section}>
      <div className="container">
        <div className={styles.home__about_wrapper}>
          <h2 className={styles.home__about_title}>О компании SiegTagSound</h2>
          <div className={styles.home__about_main}>
            <div className={styles.home__main_banner}>
              <div className={styles.home__banner_item}>
                <img
                  src="../../images/home-about.webp"
                  alt="about banner"
                  className={styles.home__banner_image}
                />
              </div>
              <div className={styles.home__banner_card}>
                <Card>
                  <p className={styles.home__about_text}>
                    Sieg TagSound - это студия звукозаписи с более чем 13-летним
                    опытом в области профессионального мастеринга и сведения
                    музыки.
                  </p>
                  <p className={styles.home__about_text}>
                    музыки. Наша команда экспертов работает со всеми
                    музыкальными жанрами - от классической до современной
                    электронной музыки.
                  </p>
                  <p className={styles.home__about_text}>
                    Используя новейшее оборудование и самые передовые
                    технологии, мы поможем вам добиться идеального звучания
                    вашего трека или альбома. Мы гордимся своей репутацией
                    надежного и профессионального партнера для артистов,
                    продюсеров и звукозаписывающих компаний по всему миру.
                  </p>
                </Card>
              </div>
            </div>
            <Card>
              <h3 className={styles.home__about_subtitle}>
                Lorem ipsum dolor sit.
              </h3>
              <p className={styles.home__about_text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae rem explicabo, aliquid, ducimus quibusdam, distinctio
                dolorum eligendi maxime similique minus sequi! Quibusdam error
                natus, voluptatum tenetur odit tempore alias hic?
              </p>
              <p className={styles.home__about_text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione rerum fugiat nihil modi beatae cumque numquam aut
                pariatur temporibus unde. Voluptatum perferendis dignissimos
                corrupti ipsam.
              </p>
            </Card>
          </div>
          <Button buttonText={"Lorem ipsum dolor sit."} type="button"></Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
