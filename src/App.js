import React from "react";
import MotorSpeedQuiz from "./components/MotorSpeedQuiz";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-lg mx-auto text-center bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">모터 속도 문제</h1>
        <MotorSpeedQuiz />
      </div>
    </div>
  );
}

export default App;
