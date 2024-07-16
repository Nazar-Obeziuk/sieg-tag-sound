import React from "react";
import styles from "./ServicesInfo.module.css";
import Card from "../../../../components/UI/card/Card";
import Button from "../../../../components/UI/button/Button";

const ServicesInfo: React.FC = () => {
  return (
    <section className={styles.services__info_section}>
      <div className="container">
        <div className={styles.services__info_wrapper}>
          <h2 className={styles.services__info_title}>
            Lorem ipsum dolor sit amet.
          </h2>
          <div className={styles.services__info_main}>
            <div className={styles.services__main_banner}>
              <img
                src="../../images/services-info.webp"
                alt="services img"
                className={styles.services__banner_image}
              />
            </div>
            <div className={styles.services__main_inner}>
              <Card>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sint? Neque, voluptates! Excepturi corrupti a rerum
                  asperiores sunt quidem natus?
                </p>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Architecto dolorem voluptatum quis obcaecati aperiam eos
                    dolor saepe, ex amet fugit.
                  </p>
                </div>
                <div>
                  <img
                    src="../../images/circle-list.svg"
                    alt="circle list icon"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia quod accusantium sit consequatur maxime id.
                  </p>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam voluptate placeat magni, quia voluptates distinctio
                  nobis dicta veritatis, beatae reprehenderit soluta? Amet natus
                  beatae facere repudiandae, odit officiis aspernatur suscipit?
                </p>
              </Card>
            </div>
          </div>
          <Button type={"button"}>Lorem ipsum dolor sit.</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
