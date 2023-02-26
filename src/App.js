import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Progressbar from "./components/progressbar/ProgressBar.js";
import OrderDetails from "./components/orderdetails/OrderDetails.js";
import BottomSection from "./components/BottomSection";
function App() {
  //these urls are for testing and the only 2 that gives different testable results
  // https://tracking.bosta.co/shipments/track/7234258
  //https://tracking.bosta.co/shipments/track/9442984

  const [deliverState, setDeliverState] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [color, setColor] = useState("#d5a222");

  const URL = "https://tracking.bosta.co/shipments/track/7234258";

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setShipmentData(data);

    if (data.CurrentStatus.state === "DELIVERED") {
      setDeliverState(data.CurrentStatus.state);
      setColor("#6bd110");
    } else if (data.CurrentStatus.state === "DELIVERED_TO_SENDER") {
      setDeliverState(data.CurrentStatus.state);
      setColor("#cf0303");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!shipmentData) return <div>Loading...</div>;

  return (
    <>
      <Navbar orderState={deliverState} />
      <OrderDetails
        orderState={deliverState}
        orderData={shipmentData}
        fillColor={color}
      />
      <Progressbar orderState={deliverState} fillColor={color} />
      <BottomSection orderData={shipmentData} />
      
    </>
  );
}

export default App;
