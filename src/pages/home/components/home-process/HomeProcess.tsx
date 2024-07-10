import React from "react";
import styles from "./HomeProcess.module.css";
import Card from "../../../../components/UI/card/Card";

const HomeProcess: React.FC = () => {
  return (
    <section className={styles.home__process_section}>
      <div className="container">
        <div className={styles.home__process_wrapper}>
          <div className={styles.home__process_heading}>
            <h2 className={styles.home__heading_title}>Процесс работы</h2>
            <p className={styles.home__heading_subtitle}>
              Мы выполнение в течение двух недель
            </p>
          </div>
          <div className={styles.home__process_main}>
            <div className={styles.home__process_inner}>
              <Card>
                <h3>Прием заказа</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    Ваш заказ на мастеринг или сведение будет принят нашей
                    командой в течение 24 часов. Мы внимательно ознакомимся с
                    вашими требованиями и пожеланиями.
                  </p>
                </div>
                <h3>Финальная проверка</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    Мы тщательно прослушаем и проверим результат, чтобы быть
                    уверенными, что он полностью соответствует вашим ожиданиям и
                    готов к отправке.
                  </p>
                </div>
                <h3>Обработка файла</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    Наши опытные саунд-инженеры начнут работу над вашим треком
                    или альбомом, используя передовое оборудование и технологии
                    для достижения идеального звучания.
                  </p>
                </div>
                <h3>Доставка</h3>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    В течение двух недель с момента получения заказа мы
                    предоставим вам мастер-файлы высокого качества. Вы сможете
                    скачать их в вашем личном кабинете.
                  </p>
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
