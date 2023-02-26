import React from "react";
import styles from "./OrderStates.module.css";

const OrderStates = (props) => {
  console.log(props.orderData);
  
  return (
    <div className={styles.container}>
      <span>تفاصيل الشحنة</span>
      <table>
        <tr>
          <th>تفاصيل</th>
          <th>الوقت</th>
          <th>التاريخ</th>
          <th>الفرع</th>
        </tr>
       
          {props.orderData.TransitEvents.map((event, index) => {
            return (
              <tr key={index}>
                <td>{event.state}</td>
                <td>
                  {new Date(event.timestamp).getHours()} {":"}
                  {new Date(event.timestamp).getSeconds()}
                  {new Date(event.timestamp).getSeconds() > 12 ? " pm" : " am"}
                </td>
                <td>
                  {new Date(event.timestamp).getMonth()} {"/"}
                  {new Date(event.timestamp).getDay()} {"/"}
                  {new Date(event.timestamp).getFullYear()}
                </td>
                <td>مدينة نصر</td>
              </tr>
            );
          })}
       
      </table>
    </div>
  );
};

export default OrderStates;
