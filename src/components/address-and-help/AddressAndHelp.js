import React from "react";
import styles from "./AddressAndHelp.module.css";
import { useTranslation } from "react-i18next";
import  img  from "../../assets/help.png";

const AddressAndHelp = (props) => {

  const { t } = useTranslation();
return (
  <div className={styles.container}>
    <span>{t("addressTitle")}</span>
    <div className={styles.address}>
      <p>{t("address")}</p>
    </div>
    <div className={styles.help_section}>
      <img src={img} alt="help" />
      <div className={styles.complain_container}>
        <span>{t("anyBug")}</span>
        <button>{t("buttonBug")}</button>
      </div>
    </div>
  </div>
);  
};

export default AddressAndHelp;
