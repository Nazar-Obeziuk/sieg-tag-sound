import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section}>
        <div className="container">
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__wrapper_header}>
              <NavLink to={""} className={styles.footer__header_logo}>
                <img src="../../images/logo.svg" alt="footer logo" />
              </NavLink>
              <nav className={styles.footer__header_nav}>
                <ul className={styles.footer__nav_list}>
                  <li className={styles.footer__list_item}>
                    <NavLink to={""} className={styles.footer__list_link}>
                      Головна
                    </NavLink>
                  </li>
                  <li className={styles.footer__list_item}>
                    <NavLink to={""} className={styles.footer__list_link}>
                      Про нас
                    </NavLink>
                  </li>
                  <li className={styles.footer__list_item}>
                    <NavLink to={""} className={styles.footer__list_link}>
                      Послуги
                    </NavLink>
                  </li>
                  <li className={styles.footer__list_item}>
                    <NavLink to={""} className={styles.footer__list_link}>
                      Портфоліо
                    </NavLink>
                  </li>
                  <li className={styles.footer__list_item}>
                    <NavLink to={""} className={styles.footer__list_link}>
                      Блог
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className={styles.footer__header_socials}>
                <span className={styles.footer__socials_item}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM21.9556 10.2036C21.7319 12.5746 20.752 18.3327 20.256 20.9879C20.0444 22.1129 19.6331 22.4879 19.2339 22.5242C18.3629 22.6028 17.7036 21.9496 16.8569 21.3931C15.5383 20.5282 14.7883 19.9899 13.5121 19.1431C12.0302 18.1694 12.9919 17.631 13.8327 16.754C14.0565 16.5242 17.8911 13.0343 17.9637 12.7198C17.9758 12.6774 17.9819 12.5323 17.8911 12.4536C17.8004 12.375 17.6734 12.4052 17.5827 12.4234C17.4496 12.4516 15.3407 13.8448 11.256 16.6028C10.6593 17.0141 10.1169 17.2137 9.62903 17.2016C9.09073 17.1895 8.0625 16.8992 7.29435 16.6512C6.35685 16.3488 5.60685 16.1855 5.67339 15.6653C5.70565 15.3952 6.07863 15.119 6.79234 14.8367C11.1633 12.9335 14.0786 11.6774 15.5383 11.0685C19.7056 9.33871 20.5706 9.03629 21.1331 9.02419C21.2601 9.02419 21.5323 9.05444 21.7137 9.1996C21.8321 9.30371 21.9076 9.44816 21.9254 9.60484C21.9581 9.80265 21.9683 10.0035 21.9556 10.2036Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className={styles.footer__socials_item}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 15C30 6.71484 23.2852 0 15 0C6.71484 0 0 6.71484 0 15C0 22.0312 4.8457 27.9375 11.3789 29.5605V19.582H8.28516V15H11.3789V13.0254C11.3789 7.92188 13.6875 5.55469 18.7031 5.55469C19.6523 5.55469 21.293 5.74219 21.9668 5.92969V10.0781C21.6152 10.043 21 10.0195 20.2324 10.0195C17.7715 10.0195 16.8223 10.9512 16.8223 13.3711V15H21.7207L20.877 19.582H16.8164V29.8887C24.2461 28.9922 30 22.6699 30 15Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className={styles.footer__socials_item}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0033 7.30675C10.7468 7.30675 7.31344 10.7401 7.31344 14.9967C7.31344 19.2532 10.7468 22.6866 15.0033 22.6866C19.2599 22.6866 22.6933 19.2532 22.6933 14.9967C22.6933 10.7401 19.2599 7.30675 15.0033 7.30675ZM15.0033 19.9961C12.2527 19.9961 10.0039 17.754 10.0039 14.9967C10.0039 12.2393 12.246 9.99721 15.0033 9.99721C17.7607 9.99721 20.0028 12.2393 20.0028 14.9967C20.0028 17.754 17.754 19.9961 15.0033 19.9961ZM24.8015 6.99219C24.8015 7.9894 23.9983 8.78583 23.0078 8.78583C22.0106 8.78583 21.2142 7.98271 21.2142 6.99219C21.2142 6.00167 22.0173 5.19855 23.0078 5.19855C23.9983 5.19855 24.8015 6.00167 24.8015 6.99219ZM29.8946 8.81261C29.7808 6.40993 29.232 4.28165 27.4718 2.52817C25.7184 0.774679 23.5901 0.225878 21.1874 0.10541C18.7111 -0.0351366 11.2889 -0.0351366 8.81261 0.10541C6.41662 0.219186 4.28834 0.767987 2.52817 2.52147C0.767987 4.27496 0.225878 6.40323 0.10541 8.80591C-0.0351366 11.2822 -0.0351366 18.7044 0.10541 21.1807C0.219186 23.5834 0.767987 25.7117 2.52817 27.4651C4.28834 29.2186 6.40993 29.7674 8.81261 29.8879C11.2889 30.0284 18.7111 30.0284 21.1874 29.8879C23.5901 29.7741 25.7184 29.2253 27.4718 27.4651C29.2253 25.7117 29.7741 23.5834 29.8946 21.1807C30.0351 18.7044 30.0351 11.2889 29.8946 8.81261ZM26.6955 23.8377C26.1735 25.1495 25.1629 26.1601 23.8444 26.6888C21.8701 27.4718 17.1852 27.2911 15.0033 27.2911C12.8215 27.2911 8.12995 27.4651 6.1623 26.6888C4.85053 26.1668 3.83993 25.1562 3.31121 23.8377C2.52817 21.8634 2.70887 17.1785 2.70887 14.9967C2.70887 12.8148 2.53486 8.12326 3.31121 6.15561C3.83324 4.84384 4.84384 3.83324 6.1623 3.30452C8.13664 2.52147 12.8215 2.70217 15.0033 2.70217C17.1852 2.70217 21.8767 2.52816 23.8444 3.30452C25.1562 3.82655 26.1668 4.83714 26.6955 6.15561C27.4785 8.12995 27.2978 12.8148 27.2978 14.9967C27.2978 17.1785 27.4785 21.8701 26.6955 23.8377Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className={styles.footer__socials_item}>
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.3739 3.30099C29.0278 1.99927 28.0117 0.977664 26.721 0.631637C24.3812 0 15 0 15 0C15 0 5.61882 0 3.27902 0.631637C1.98828 0.977664 0.972171 1.99927 0.626144 3.30099C0 5.65727 0 10.5676 0 10.5676C0 10.5676 0 15.4778 0.626144 17.8341C0.972171 19.1358 1.98828 20.1135 3.27902 20.4595C5.61882 21.0912 15 21.0912 15 21.0912C15 21.0912 24.3812 21.0912 26.721 20.4595C28.0117 20.1135 29.0278 19.1304 29.3739 17.8341C30 15.4778 30 10.5676 30 10.5676C30 10.5676 30 5.65727 29.3739 3.30099ZM11.9352 15.0275V6.10765L19.773 10.5676L11.9352 15.0275Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className={styles.footer__wrapper_main}>
              <p className={styles.footer__main_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                vero maiores facilis praesentium nobis similique odio sed. Hic,
                tempora numquam! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Facere vero maiores facilis praesentium nobis
                similique odio sed. Hic, tempora numquam!
              </p>
              <p className={styles.footer__main_text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci doloremque quia error excepturi natus, sunt velit. Et
                cumque reiciendis voluptatibus, id quo eos tenetur, quibusdam
                praesentium odit explicabo consequatur nulla. Lorem, ipsum dolor
              </p>
              <p className={styles.footer__main_text}>
                Sit amet consectetur adipisicing elit. Adipisci doloremque quia
                error excepturi natus, sunt velit. Et cumque reiciendis
                voluptatibus, id quo eos tenetur, quibusdam praesentium odit
                explicabo consequatur nulla. Sit amet consectetur adipisicing
                elit. Adipisci doloremque quia error excepturi natus, sunt
                velit. Et cumque reiciendis voluptatibus, id quo eos tenetur,
                quibusdam praesentium odit explicabo consequatur nulla.
              </p>
            </div>
            <div className={styles.footer__wrapper_footer}>
              <p className={styles.footer__security_copyright}>
                Copyrights © 2024 Всі права захищені компанією{" "}
                <span className={styles.footer__copyright_primary}>
                  Sieg Tag Sound
                </span>
              </p>
              <ul className={styles.footer__security_list}>
                <li className={styles.footer__security_item}>
                  <NavLink to={""} className={styles.footer__security_link}>
                    Політика конфіденційності
                  </NavLink>
                </li>
                <li className={styles.footer__security_list}>
                  <NavLink to={""} className={styles.footer__security_link}>
                    Умови використання
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;