import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/logo.svg";
import englishLogo from "../../assets/englishLogo.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

 

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.font}>
        <img src={
          i18next.language === "ar" ? logo : englishLogo
        }
				  alt="Bosta's logo" />
        {windowWidth < 1200 && (
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className={styles.hamburger_menu} />
          </button>
        )}
        <div
          className={
            windowWidth > 1200
              ? styles.navbar
              : isMenuOpen
              ? styles.navbar_mobile
              : styles.navbar
          }
        >
          <div className={styles.middleNavbar}>
            <ul className="styles.navbar_ul">
              <li>
                <a href="#a">{t("firstNavHeader")}</a>
              </li>
              <li>
                <a href="#b">{t("secondNavHeader")}</a>
              </li>
              <li>
                <a href="#c">{t("thirdNavHeader")}</a>
              </li>
            </ul>
          </div>
          <div className={styles.rightNavbar}>
            <ul className="styles.navbar_ul">
              <li>
                <a href="#f">{t("fourthNavHeader")}</a>
              </li>
              <li>
                <a href="#e">{t("fifthNavHeader")}</a>
              </li>
              <li>
                <button className={styles.font} onClick={toggleLanguage}>
                  <span>{t("navBarButton")}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
