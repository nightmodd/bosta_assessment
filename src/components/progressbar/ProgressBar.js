import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  const [deliverState, setDeliverState] = useState({
    progresbarWidth: "71%",
    errorMessage: "",
  });

  useEffect(() => {
    if (props.fillColor === "#6bd110") {
      setDeliverState({ progresbarWidth: "100%", errorMessage: "" });
    } else if (props.fillColor === "#cf0303") {
      setDeliverState({
        progresbarWidth: "71%",
        errorMessage: "تم ارجاع الشحنة للتاجر",
      });
    } else {
      setDeliverState({
        progresbarWidth: "71%",
        errorMessage: "العميل غير متواجد في العنوان",
      });
    }
  }, [props.fillColor]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.progress_bar}>
          <div className={styles.steps}>
            <div className={styles.progress_state}>
              <div className={styles.icons}>
                <span
                  className={styles.small_circle}
                  style={{
                    borderColor: props.fillColor,
                    backgroundColor: props.fillColor,
                  }}
                >
                  <i className={`${styles.icon} uil uil-check`}></i>
                </span>
              </div>

              <div className={styles.states_errors}>
                <p className={styles.status}>تم انشاء الشحنة</p>
              </div>
            </div>

            <div className={styles.progress_state}>
              <div className={styles.icons}>
                <span
                  className={styles.small_circle}
                  style={{
                    borderColor: props.fillColor,
                    backgroundColor: props.fillColor,
                  }}
                >
                  <i className={`${styles.icon} uil uil-check`}></i>
                </span>
              </div>
              <div className={styles.states_errors}>
                <p className={styles.status}>تم استلام الشحنة من التاجر</p>
              </div>
            </div>

            <div className={styles.progress_state}>
              <div className={styles.icons}>
                <span
                  className={styles.circle}
                  style={
                    props.fillColor === "#6bd110"
                      ? { display: "none" }
                      : {
                          borderColor: props.fillColor,
                          backgroundColor: props.fillColor,
                          color: "#ffff",
                        }
                  }
                >
                  <i className={`${styles.icon} uil uil-truck`}></i>
                </span>
                <span
                  className={styles.small_circle}
                  style={
                    props.fillColor === "#6bd110"
                      ? {
                          display: "flex",
                          backgroundColor: "#6bd110",
                          borderColor: "#6bd110",
                        }
                      : { display: "none" }
                  }
                >
                  <i className={`${styles.icon} uil uil-check`}></i>
                </span>
              </div>
              <div className={styles.states_errors}>
                <p className={styles.status}>الشحنه خرجت للتسليم</p>
                <span
                  className={styles.status_api}
                  style={{
                    color: props.fillColor,
                  }}
                >
                  {deliverState.errorMessage}
                </span>
              </div>
            </div>

            <div className={styles.progress_state}>
              <div className={styles.icons}>
                <span
                  className={styles.circle}
                  style={
                    props.fillColor === "#6bd110"
                      ? {
                          display: "none",
                        }
                      : {}
                  }
                >
                  <i className={`${styles.icon} uil uil-save`}></i>
                </span>
                <span
                  className={styles.small_circle}
                  style={
                    props.fillColor === "#6bd110"
                      ? {
                          display: "flex",
                          backgroundColor: "#6bd110",
                          borderColor: "#6bd110",
                        }
                      : { display: "none" }
                  }
                >
                  <i className={`${styles.icon} uil uil-check`}></i>
                </span>
              </div>
              <div className={styles.states_errors}>
                <p className={styles.status}>تم التسليم</p>
              </div>
            </div>

            <div className={styles.progress}>
              <span
                className={styles.indicator}
                style={{
                  backgroundColor: props.fillColor,
                  width: deliverState.progresbarWidth,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
