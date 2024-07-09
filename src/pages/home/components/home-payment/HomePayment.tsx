import React from "react";
import styles from "./HomePayment.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";

const HomePayment: React.FC = () => {
  return (
    <section className={styles.home__payment_section}>
      <div className="container">
        <div className={styles.home__payment_wrapper}>
          <h2 className={styles.home__payment_title}>Оплата</h2>
          <div className={styles.home__payment_main}>
            <div className={styles.home__payment_inner}>
              <Card>
                <h3>Гибкие варианты</h3>
                <p>
                  Мы предлагаем различные способы оплаты, чтобы вы могли выбрать
                  тот, который наиболее удобен для вас - банковский перевод,
                  электронные платежные системы или даже криптовалюту.
                </p>
                <h3>Мгновенный доступ</h3>
                <p>
                  После успешной оплаты вы получите мгновенный доступ к
                  результатам работы над вашим треком или альбомом в высоком
                  качестве.
                </p>
              </Card>
              <div className={styles.home__payment_banner}>
                <img
                  src="../../images/payment-image.jpeg"
                  alt=""
                  className={styles.home__banner_image}
                />
              </div>
            </div>
            <Card>
              <h3>Безопасная транзакция</h3>
              <p>
                Мы используем надежные шифрованные протоколы, чтобы
                гарантировать конфиденциальность ваших платежных данных и
                безопасность ваших средств.
              </p>
            </Card>
          </div>
          <Button buttonText={"lorem ipsum dolor"} type={"button"}></Button>
        </div>
      </div>
    </section>
  );
};

export default HomePayment;
