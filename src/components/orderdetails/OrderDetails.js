import React, { useState, useEffect } from "react";
import styles from "./OrderDetails.module.css";

const OrderDetails = (props) => {
  const [orderState, setOrderState] = useState();

  const [fullDate, setFullDate] = useState("");
  const [year, setYear] = useState();
  const [monthInArabic, setMonthInArabic] = useState();
  const [dayInArabic, setDayInArabic] = useState();
  const [day, setDay] = useState();

  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "يوليو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const days = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  useEffect(() => {
    if (props.orderData.CurrentStatus.state === "DELIVERED") {
      setOrderState("تم التوصيل");
    } else if (props.orderData.CurrentStatus.state === "DELIVERED_TO_SENDER") {
      setOrderState("تم الغاء الشحنه");
    } else {
      setOrderState("لم يتم تسليم الشحنة");
    }

    const currentDate = new Date(props.orderData.CurrentStatus.timestamp);
    setFullDate(
      "at " +
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        "pm " +
        currentDate.getMonth() +
        "/" +
        currentDate.getDay() +
        "/" +
        currentDate.getFullYear()
    );
    const day = currentDate.getDay();
    setDay(day);
    const year = currentDate.getFullYear();
    setYear(year);
    const month = months[currentDate.getMonth()];
    setMonthInArabic(month);
    const dayInArabic = days[day];
    setDayInArabic(dayInArabic);
  }, [props.orderData.CurrentStatus.state]);

  return (
    <div className={styles.container}>
      <div className={styles.order_number}>
        <p className={styles.title}>
          رقم الشحنة {props.orderData.TrackingNumber}
        </p>
        <p className={styles.description} style={{ color: props.fillColor }}>
          {orderState}
        </p>
      </div>
      <div className={styles.order_last_update}>
        <p className={styles.title}>اخر تحديث</p>
        <p className={styles.description}>
          {fullDate} {dayInArabic}
        </p>
      </div>
      <div className={styles.order_sailer}>
        <p className={styles.title}>اسم التاجر</p>
        <p className={styles.description}>SOUQ.COM</p>
      </div>
      <div className={styles.order_delivery_date}>
        <p className={styles.title}>موعد التسليم خلال</p>
        <p className={styles.description}>
          {year}
          {"  "}
          {monthInArabic }
          {"  "}
          {day}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
