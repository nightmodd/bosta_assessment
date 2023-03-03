import React, { useState, useEffect } from "react";

import ProgressBar from "./components/progress-bar/ProgressBar.js";
import OrderDetails from "./components/order-details/OrderDetails.js";
import BottomSection from "./components/BottomSection";
import Layout from "./components/layouts/Layout";

import "./lib/intl";

import "./App.css";
import { useTranslation } from "react-i18next";

const calculateColor = (state) => {
  if (state === "DELIVERED") return "#6bd110";
  else if (state === "RETURNED_TO_SENDER") return "#d5a222";
  else return "#cf0303";
};

function App() {
  // these urls are for testing and the only 2 that gives different testable results
  // https://tracking.bosta.co/shipments/track/7234258
  // https://tracking.bosta.co/shipments/track/9442984

  const [shipmentData, setShipmentData] = useState(null);
  const { i18n } = useTranslation();

  const URL = "https://tracking.bosta.co/shipments/track/7234258";

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setShipmentData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!shipmentData) return <div>Loading...</div>;

  const { state } = shipmentData.CurrentStatus;
  const color = calculateColor(state);

  return (
    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <Layout>
          <OrderDetails
            orderState={state}
            orderData={shipmentData}
            fillColor={color}
          />
          <ProgressBar orderState={state} fillColor={color} />
          <BottomSection orderData={shipmentData} />
        </Layout>
      </div>
    </>
  );
}

export default App;
