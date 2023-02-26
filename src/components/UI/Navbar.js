import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import englishLogo from "../../assets/englishLogo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    setIsArabic(!isArabic);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isArabic && (
        <nav className={styles.font}>
          <img src={englishLogo} alt="Bosta's logo" />
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
                  <a href="#a">Integrations</a>
                </li>
                <li>
                  <a href="#b">Pricing</a>
                </li>
                <li>
                  <a href="#c">Products</a>
                </li>
              </ul>
            </div>
            <div className={styles.rightNavbar}>
              <ul className="styles.navbar_ul">
                <li>
                  <a href="#f">Track Shipment</a>
                </li>
                <li>
                  <a href="#e">Sign In</a>
                </li>
                <li>
                  <button className={styles.font} onClick={toggleLanguage}>
                    <span>AR</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {isArabic && (
        <nav className={styles.font}>
          <div
            className={
              windowWidth > 1200
                ? styles.navbar
                : isMenuOpen
                ? styles.navbar_mobile
                : styles.navbar
            }
          >
            <div className={styles.rightNavbar}>
              <ul className="styles.navbar_ul">
                <li>
                  <button className={styles.font} onClick={toggleLanguage}>
                    <span>ENG</span>
                  </button>
                </li>
                <li>
                  <a href="#e">تسجيل الدخول</a>
                </li>
                <li>
                  <a href="#f">تتبع شحنتك</a>
                </li>
              </ul>
            </div>
            <div className={styles.middleNavbar}>
              <ul className="styles.navbar_ul">
                <li>
                  <a href="#a">كلم المبيعات</a>
                </li>
                <li>
                  <a href="#b">الأسعار</a>
                </li>
                <li>
                  <a href="#c">الرئيسيه</a>
                </li>
              </ul>
            </div>
          </div>
          {windowWidth < 1200 && (
            <button onClick={toggleMenu}>
              <GiHamburgerMenu className={styles.hamburger_menu} />
            </button>
          )}
          <img src={logo} alt="Bosta's logo" />
        </nav>
      )}
    </>
  );
};

export default Navbar;
