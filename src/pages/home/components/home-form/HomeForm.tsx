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
              Lorem ipsum dolor sit.
            </h2>
            <p className={styles.home__heading_subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              debitis!
            </p>
          </div>
          <div className={styles.home__form_banner}>
            <div className={styles.home__form_info}>
              <h3 className={styles.home__info_title}>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <div className={styles.home__info_inner}>
                <p className={styles.home__info_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis a consequuntur vel impedit veniam distinctio nisi
                  voluptatem.
                </p>
                <ul className={styles.home__info_list}>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus assumenda laboriosam quod iusto.
                    </p>
                  </li>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </li>
                  <li className={styles.home__list_item}>
                    <img
                      src="../../images/circle-list.svg"
                      alt="circle list icon"
                    />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
                <p className={styles.home__info_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quae veritatis repellendus.
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
