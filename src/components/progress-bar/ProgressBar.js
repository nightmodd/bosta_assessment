import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import styles from "./ProgressBar.module.css";



const ProgressBar = (props) => {
  const { t } = useTranslation();

  const [deliverState, setDeliverState] = useState({
    progressBarWidth: "69%",
    errorMessage: "",
  });
 
  useEffect(() => {
    if (props.orderState === "DELIVERED") {
      setDeliverState({ progressBarWidth: "100%", errorMessage: "" });
    } else if (props.orderState === "DELIVERED_TO_SENDER") {
      setDeliverState({
        progressBarWidth: "69%",
        errorMessage: t("errorMessageCancelled"),
      });
    } else  {
      setDeliverState({
        progressBarWidth: "69%",
        errorMessage: t("errorMessageDelay"),
      });
    }
  }, [i18next.language]);

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
                <p className={styles.status}>{t("firstStepProgressBar")}</p>
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
                <p className={styles.status}>{t("secondStepProgressBar")}</p>
              </div>
            </div>

            <div className={styles.progress_state}>
              <div className={styles.icons}>
                <span
                  className={styles.circle}
                  style={
                    props.orderState === "DELIVERED"
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
                    props.orderState === "DELIVERED"
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
                <p className={styles.status}>{t("thirdStepProgressBar")}</p>
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
                    props.orderState === "DELIVERED"
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
                    props.orderState === "DELIVERED"
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
                <p className={styles.status}>{t("fourthStepProgressBar")}</p>
              </div>
            </div>

            <div className={styles.progress}
              style={
                i18next.language === "ar" ? 
                  {} : {
                    marginRight: "0",
                    marginLeft: "2.5rem",
            } }>
              <span
                className={styles.indicator}
                style={{
                  backgroundColor: props.fillColor,
                  width: deliverState.progressBarWidth,
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
