import React from "react";
import ReactDOM from "react-dom/client";
import MotorSpeedQuiz from "./components/MotorSpeedQuiz"; // 올바른 경로 확인

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MotorSpeedQuiz />
  </React.StrictMode>
);
