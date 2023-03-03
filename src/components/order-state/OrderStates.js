import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./OrderStates.module.css";

const OrderStates = (props) => {
 
  const { t } = useTranslation();


  return (
    <div className={styles.container}>
      <span>{t("statusTableTitle")}</span>
      <table>
        <thead>
          <tr>
            <th>{t("tableHeader1")}</th>
            <th>{t("tableHeader2")}</th>
            <th>{t("tableHeader3")}</th>
            <th>{t("tableHeader4")}</th>
          </tr>
        </thead>
        <tbody>
          {props.orderData.TransitEvents.map((event, index) => {
            return (
              <tr key={index}>
                <td>
                  {" "}
                  {i18next.language === "ar" ? "مدينة نصر" : "Nasr City"}
                </td>
                <td>
                  {new Date(event.timestamp).getMonth()} {"/"}
                  {new Date(event.timestamp).getDay()} {"/"}
                  {new Date(event.timestamp).getFullYear()}
                </td>
                <td>
                  {new Date(event.timestamp).getHours()} {":"}
                  {new Date(event.timestamp).getSeconds()}
                  {new Date(event.timestamp).getSeconds() > 12 ? " pm" : " am"}
                </td>

                <td>{event.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStates;
