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
                    Sieg TagSound - это студия звукозаписи с более чем 6-летним
                    опытом в области профессионального мастеринга и сведения
                    музыки.
                  </p>
                  <p className={styles.home__about_text}>
                    Наша команда экспертов работает со всеми музыкальными
                    жанрами - от классической до современной электронной музыки.
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
                Доверие к SiegTagSound.
              </h3>
              <p className={styles.home__about_text}>
                В SiegTagSound мы верим, что каждая запись – это уникальная
                история, и наша цель – помочь вам рассказать её наилучшим
                образом. Наша студия оснащена всем необходимым для проведения
                сложных и высокоточных операций по сведению и мастерингу. Мы
                постоянно совершенствуем наши методики и используем только
                проверенные технологии, чтобы гарантировать вам наилучший
                результат.
              </p>
              <p className={styles.home__about_text}>
                Мы также предлагаем срочные услуги для тех, кто ценит свое время
                и нуждается в быстром, но качественном результате.
                Воспользуйтесь нашим опытом и профессионализмом, чтобы ваш
                музыкальный проект зазвучал так, как вы мечтаете.
              </p>
              <p className={styles.home__about_text}>
                Мы понимаем, насколько важна каждая деталь в создании
                качественного музыкального продукта. Наша студия предлагает
                индивидуальный подход к каждому проекту, чтобы удовлетворить
                уникальные потребности и ожидания наших клиентов. Мы готовы
                работать как с начинающими музыкантами, так и с опытными
                профессионалами, обеспечивая высокий стандарт обслуживания и
                поддержки на всех этапах работы.
              </p>
            </Card>
          </div>
          <Button type="button">Заказать услуги</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
