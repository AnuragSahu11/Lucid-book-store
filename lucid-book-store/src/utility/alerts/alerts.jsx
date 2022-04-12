import { useState, useRef, useEffect } from "react";
import "./alert.css";

const Alerts = ({ setAlertData, alertData }) => {
  const { showAlert, alertMsg, alertType } = alertData;
  const [timeOutId, setTimeoutId] = useState();

  const toggleAlert = () => {
    setAlertData({ ...alertData, showAlert: false });
  };

  useEffect(() => {
    if (showAlert && !timeOutId) {
      setTimeoutId(setTimeout(toggleAlert, 1500));
    }
  });

  useEffect(() => {
    timeOutId && clearTimeout(timeOutId);
    setTimeoutId(setTimeout(toggleAlert, 1500));
  }, [alertMsg]);

  return (
    <div
      style={showAlert ? {} : { display: "none" }}
      className={`toast-custom toast-${alertType} br-3`}
    >
      {alertMsg}
    </div>
  );
};

export { Alerts };
