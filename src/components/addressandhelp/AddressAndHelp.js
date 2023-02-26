import React from "react";
import styles from "./AddressAndHelp.module.css";
import  img  from "../../assets/help.png";

const AddressAndHelp = (props) => {
return (
  <div className={styles.container}>
    <span>عنوان التسليم</span>
    <div className={styles.address}>
      <p>
        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 33, Cairo
      </p>
    </div>
    <div className={styles.help_section}>
      <div className={styles.complain_container}>
        <span>هل يوجد مشكله في شحنتك؟</span>
        <button>ابلاغ عن مشكلة</button>
      </div>
      <img src={img} alt="help image" />
    </div>
  </div>
);  
};

export default AddressAndHelp;
