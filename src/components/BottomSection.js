
import React from 'react';

import AddressAndHelp from './addressandhelp/AddressAndHelp';
import OrderStates from './orderstate/OrderStates';

import styles from './BottomSection.module.css';


const BottomSection = (props) => {
  return (
    <div className={styles.container}>
      <AddressAndHelp />
      <OrderStates orderData={props.orderData} />
    </div>
  );
};


export default BottomSection;