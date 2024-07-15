import React from "react";
import styles from "./ServicesMain.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";

const ServicesMain: React.FC = () => {
  return (
    <section className={styles.services__main_section}>
      <div className="container">
        <div className={styles.services__main_wrapper}>
          <div className={styles.services__main_heading}>
            <h2 className={styles.services__heading_title}>Услуги</h2>
            <p className={styles.services__heading_subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.services__main_block}>
            <div className={styles.services__block_item}>
              <div className={styles.services__item_inner}>
                <Card>
                  <img
                    src="../../images/services-icon-1.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>Сведение и Мастеринг</h3>
                  <p>
                    Сведение и мастеринговые услуги – это ключевые этапы в
                    создании профессионального музыкального продукта. Мы
                    предлагаем полный спектр услуг по сведению и мастерингу
                    треков, гарантируя высокое качество звука и соответствие
                    самым высоким стандартам индустрии.
                  </p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos quae doloribus quo deserunt eum.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro!
                    </li>
                  </ul>
                  <p>
                    Наши опытные специалисты используют новейшие технологии и
                    оборудование для достижения идеального звучания.
                  </p>
                </Card>
              </div>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-item-1.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
            </div>
            <div className={styles.services__block_item}>
              <div
                className={`${styles.services__item_banner} ${styles.services__banner_special}`}
              >
                <img
                  src="../../images/services-item-2.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
              <div
                className={`${styles.services__item_inner} ${styles.services__inner_special}`}
              >
                <Card>
                  <img
                    src="../../images/services-icon-2.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>Сведение</h3>
                  <p>
                    Сведение – это процесс объединения всех записанных дорожек в
                    одну финальную стереофоническую дорожку. Наши услуги по
                    сведению включают:
                  </p>
                  <ul>
                    <li>
                      Балансировка уровней: Регулировка громкости каждой дорожки
                      для достижения гармоничного звучания.
                    </li>
                    <li>
                      Панорамирование: Размещение звуков в стереополе для
                      создания пространственного восприятия.
                    </li>
                    <li>
                      Эквализация: Настройка частотного диапазона для каждой
                      дорожки, чтобы все элементы трека звучали чисто и
                      слаженно.
                    </li>
                    <li>
                      Компрессия: Управление динамическим диапазоном для более
                      сбалансированного и плотного звучания.
                    </li>
                    <li>
                      Эффекты: Добавление реверберации, задержек и других
                      эффектов для создания желаемой атмосферы и текстуры.
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
            <div className={styles.services__block_item}>
              <div className={styles.services__item_inner}>
                <Card>
                  <img
                    src="../../images/services-icon-3.svg"
                    alt="services icon"
                    className={styles.services__card_icon}
                  />
                  <h3>Мастеринг</h3>
                  <p>
                    Мастеринг – это финальный этап обработки трека перед его
                    выпуском. Наши услуги по мастерингу включают:
                  </p>
                  <ul>
                    <li>
                      Финальная эквализация: Тонкая настройка частотного баланса
                      для всех треков альбома или EP.
                    </li>
                    <li>
                      Лимитирование и максимизация громкости: Обеспечение
                      оптимального уровня громкости без искажений.
                    </li>
                    <li>
                      Улучшение стереообраза: Создание более широкой и глубокой
                      звуковой сцены.
                    </li>
                    <li>
                      Подготовка форматов: Создание мастер-файлов, готовых для
                      различных платформ (стриминг, CD, винил и др.).
                    </li>
                    <li>
                      Согласование треков: Убедитесь, что все треки альбома
                      звучат согласованно и плавно переходят друг в друга.
                    </li>
                  </ul>
                </Card>
              </div>
              <div className={styles.services__item_banner}>
                <img
                  src="../../images/services-item-3.jpg"
                  alt="services item img"
                  className={styles.services__banner_image}
                />
              </div>
            </div>
          </div>
          <Button type={"button"}>Заказать услуги</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
