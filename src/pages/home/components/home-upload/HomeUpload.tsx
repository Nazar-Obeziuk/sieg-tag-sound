import React from "react";
import styles from "./HomeUpload.module.css";
import Card from "../../../../components/UI/card/Card";

const HomeUpload: React.FC = () => {
  return (
    <section className={styles.home__upload_section}>
      <div className="container">
        <div className={styles.home__upload_wrapper}>
          <div className={styles.home__upload_heading}>
            <h2 className={styles.home__upload_title}>Загрузка файла</h2>
            <p className={styles.home__upload_subtitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
          <Card>
            <h3>Простая процедура</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>
                Наш пользовательский интерфейс позволяет быстро и легко
                загрузить ваш музыкальный файл одним кликом.
              </p>
            </div>
            <h3>Безопасная передача</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>
                Мы используем защищенное SSL-соединение, чтобы гарантировать
                конфиденциальность и целостность ваших данных.
              </p>
            </div>
            <h3>Отслеживание статуса</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>
                Вы всегда можете спросить и менеджера или добавить коррекции.
              </p>
            </div>
            <h3>Индивидуальные инструкции</h3>
            <div>
              <img src="../../images/circle-list.svg" alt="circle list icon" />
              <p>
                После загрузки файла вы сможете оставить свое техническое
                задание и пожелания, чтобы мы учли ваши требования.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeUpload;
