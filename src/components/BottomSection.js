
import React from 'react';

import AddressAndHelp from './address-and-help/AddressAndHelp';
import OrderStates from './order-state/OrderStates';

import styles from './BottomSection.module.css';


const BottomSection = (props) => {
  return (
    <div className={styles.container}>
      <OrderStates orderData={props.orderData} />
      <AddressAndHelp />
    </div>
  );
};


export default BottomSection;