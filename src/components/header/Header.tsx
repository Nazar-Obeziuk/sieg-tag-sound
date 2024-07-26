import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("de");

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  };

  const changeLanguageMobile = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
    handleBurgerMenu();
  };

  const activeStyles = {
    color: "#ee701f",
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
                    style={({ isActive }) =>
                      isActive ? activeStyles : undefined
                    }
                    className={`${styles.header__item_link} ${styles.header__link_about}`}
                  >
                    {t("menu.home-page")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/services"}
                    style={({ isActive }) =>
                      isActive ? activeStyles : undefined
                    }
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    {t("menu.services-page")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/portfolio"}
                    style={({ isActive }) =>
                      isActive ? activeStyles : undefined
                    }
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    {t("menu.portfolio-page")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    to={"/blog"}
                    style={({ isActive }) =>
                      isActive ? activeStyles : undefined
                    }
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    {t("menu.blog-page")}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className={styles.header__wrapper_info}>
              <div className={styles.header__info_languages}>
                <span
                  onClick={() => changeLanguage("de")}
                  className={`${styles.header__languages_item} ${
                    activeLanguage === "de"
                      ? styles.header__language_active
                      : ""
                  }`}
                >
                  DE
                </span>
                <span className={styles.header__languages_line}></span>
                <span
                  onClick={() => changeLanguage("en")}
                  className={`${styles.header__languages_item} ${
                    activeLanguage === "en"
                      ? styles.header__language_active
                      : ""
                  }`}
                >
                  EN
                </span>
                <span className={styles.header__languages_line}></span>
                <span
                  onClick={() => changeLanguage("ru")}
                  className={`${styles.header__languages_item} ${
                    activeLanguage === "ru"
                      ? styles.header__language_active
                      : ""
                  }`}
                >
                  RU
                </span>
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
                      onClick={handleBurgerMenu}
                      to={"/"}
                      style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                      }
                      className={`${styles.header__item_link} ${styles.header__link_about}`}
                    >
                      {t("menu.home-page")}
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      onClick={handleBurgerMenu}
                      to={"/services"}
                      style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                      }
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      {t("menu.services-page")}
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      onClick={handleBurgerMenu}
                      to={"/portfolio"}
                      style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                      }
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      {t("menu.portfolio-page")}
                    </NavLink>
                  </li>
                  <li className={styles.header__list_item}>
                    <NavLink
                      onClick={handleBurgerMenu}
                      to={"/blog"}
                      style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                      }
                      className={`${styles.header__item_link} ${styles.header__link_order}`}
                    >
                      {t("menu.blog-page")}
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className={styles.header__mobile_info}>
                <div className={styles.header__info_languages}>
                  <span
                    onClick={() => changeLanguageMobile("de")}
                    className={`${styles.header__languages_item} ${
                      activeLanguage === "de"
                        ? styles.header__language_active
                        : ""
                    }`}
                  >
                    DE
                  </span>
                  <span className={styles.header__languages_line}></span>
                  <span
                    onClick={() => changeLanguageMobile("en")}
                    className={`${styles.header__languages_item} ${
                      activeLanguage === "en"
                        ? styles.header__language_active
                        : ""
                    }`}
                  >
                    EN
                  </span>
                  <span className={styles.header__languages_line}></span>
                  <span
                    onClick={() => changeLanguageMobile("ru")}
                    className={`${styles.header__languages_item} ${
                      activeLanguage === "ru"
                        ? styles.header__language_active
                        : ""
                    }`}
                  >
                    RU
                  </span>
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
