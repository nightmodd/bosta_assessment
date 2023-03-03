import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import styles from "./OrderDetails.module.css";

const arabicLongFormatter = new Intl.DateTimeFormat("ar-EG", {
  dateStyle: "long",
});
const englishLongFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});
const arabicFullFormatter = new Intl.DateTimeFormat("ar-EG", {
  dateStyle: "full",
});
const englishFullFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

const OrderDetails = (props) => {
  const { t } = useTranslation();

  const [orderState, setOrderState] = useState();

  const arabicLongDate = arabicLongFormatter.format(
    new Date(props.orderData.CurrentStatus.timestamp)
  );
  const englishLongDate = englishLongFormatter.format(
    new Date(props.orderData.CurrentStatus.timestamp)
  );
  const arabicFullDate = arabicFullFormatter.format(
    new Date(props.orderData.CurrentStatus.timestamp)
  );
  const englishFullDate = englishFullFormatter.format(
    new Date(props.orderData.CurrentStatus.timestamp)
  );

  useEffect(() => {
    if (props.orderData.CurrentStatus.state === "DELIVERED") {
      setOrderState(t("statusDelivered"));
    } else if (props.orderData.CurrentStatus.state === "DELIVERED_TO_SENDER") {
      setOrderState(t("statusSender"));
    } else {
      setOrderState(t("statusOther"));
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.details_header}>
        <p className={styles.title}>
          {t("trackingNumber")} {props.orderData.TrackingNumber}
        </p>
        <p className={styles.description} style={{ color: props.fillColor }}>
          {orderState}
        </p>
      </div>
      <div className={styles.details_header}>
        <p className={styles.title}>{t("lastUpdated")}</p>
        <p className={styles.description}>
          {" "}
          {i18next.language === "ar" ? arabicFullDate : englishFullDate}
        </p>
      </div>

      <div className={styles.details_header}>
        <p className={styles.title}>{t("seller")}</p>
        <p className={styles.description}>SOUQ.COM</p>
      </div>
      
      <div className={styles.details_header}>
        <p className={styles.title}>{t("deliveryDate")}</p>
        <p className={styles.description}>
          {i18next.language === "ar" ? arabicLongDate : englishLongDate}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
