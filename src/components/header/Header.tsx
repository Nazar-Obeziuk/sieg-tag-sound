import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeHeaderItem = {
    color: "#FFED00",
  };

  const handleBurgerMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <section className={styles.header__section}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper_logo}>
              <NavLink to={"/"} className={styles.header__wrapper_logo}>
                <img
                  src="../../images/logo.svg"
                  alt="header logo"
                  className={styles.header__logo_item}
                />
              </NavLink>
            </div>

            <nav className={styles.header__wrapper_nav}>
              <ul className={styles.header__nav_list}>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/"}
                    className={`${styles.header__item_link} ${styles.header__link_about}`}
                  >
                    Головна
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={""}
                    className={`${styles.header__item_link} ${styles.header__link_client}`}
                  >
                    Про нас
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/"}
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    Послуги
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/"}
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    Портфоліо
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={""}
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    Блог
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className={styles.header__wrapper_info}>
              <div className={styles.header__info_languages}>
                <span
                  className={`${styles.header__languages_item} ${styles.header__language_active}`}
                >
                  DE
                </span>
                <span className={styles.header__languages_line}></span>
                <span className={styles.header__languages_item}>EN</span>
                <span className={styles.header__languages_line}></span>
                <span className={styles.header__languages_item}>RU</span>
              </div>
            </div>

            <div
              onClick={handleBurgerMenu}
              className={`${styles.header__mobile_burger} ${
                isMobileMenuOpen ? `${styles.active}` : ""
              }`}
            >
              <span className={styles.header__burger_bar}></span>
              <span className={styles.header__burger_bar}></span>
              <span className={styles.header__burger_bar}></span>
            </div>

            <div
              className={`${styles.header__mobile_menu} ${
                isMobileMenuOpen ? `${styles.active}` : ""
              }`}
            >
              <nav className={styles.header__mobile_nav}>
                <ul className={styles.header__nav_list}>
                  <li className={styles.header__list_item}>
                    <NavLink
                      to={"/"}
                      className={`${styles.header__item_link} ${styles.header__link_about}`}
                    >
                      Головна
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      to={""}
                      className={`${styles.header__item_link} ${styles.header__link_client}`}
                    >
                      Про нас
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      to={"/"}
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      Послуги
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      to={"/"}
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      Портфоліо
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      to={""}
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      Блог
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className={styles.header__mobile_info}>
                <div className={styles.header__info_languages}>
                  <span
                    className={`${styles.header__languages_item} ${styles.header__language_active}`}
                  >
                    DE
                  </span>
                  <span className={styles.header__languages_line}></span>
                  <span className={styles.header__languages_item}>EN</span>
                  <span className={styles.header__languages_line}></span>
                  <span className={styles.header__languages_item}>RU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
