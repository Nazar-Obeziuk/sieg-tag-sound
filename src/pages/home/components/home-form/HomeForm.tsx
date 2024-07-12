import React from "react";
import styles from "./HomeForm.module.css";
import Form from "../../../../components/form/Form";

const HomeForm: React.FC = () => {
  return (
    <section className={styles.home__form_section}>
      <div className="container">
        <div className={styles.home__form_wrapper}>
          <div className={styles.home__form_heading}>
            <h2 className={styles.home__heading_title}>
              SiegTagSound онлайн 24/7
            </h2>
            <p className={styles.home__heading_subtitle}>
              Мы готовы предоставить Вам услуги в любое время, просто заполните
              форму!
            </p>
          </div>
          <div className={styles.home__form_banner}>
            <div className={styles.home__form_info}>
              <h3 className={styles.home__info_title}>
                Не откладывайте на завтра то, что может изменить вашу
                музыкальную карьеру сегодня
              </h3>
              <div className={styles.home__info_inner}>
                <p className={styles.home__info_text}>
                  Закажите наши услуги прямо сейчас и убедитесь, почему тысячи
                  артистов по всему миру выбирают Sieg TagSound для сведения и
                  мастеринга своих треков.
                </p>
                <ul className={styles.home__info_list}>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>
                      Наши клиенты доверяют нам свои самые важные проекты, зная,
                      что мы сделаем всё возможное для достижения их музыкальных
                      целей.
                    </p>
                  </li>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>
                      Готовы начать? Просто перейдите к заказу, выберите
                      необходимые услуги и загрузите свои треки.
                    </p>
                  </li>
                </ul>
                <p className={styles.home__info_text}>
                  Мы с нетерпением ждем возможности работать с вами и помочь вам
                  создать звук, который покорит сердца слушателей.
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
