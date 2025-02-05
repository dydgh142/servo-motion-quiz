import React, { useState } from "react";

function App() {
    const [rpm, setRpm] = useState(2400);
    const [lead, setLead] = useState(10); // 리드 값 (예: 10mm)
    const speed = (rpm / 60) * lead; // 속도 계산

    return (
        <div>
            <h1>Motor Speed Quiz</h1>
            <p>현재 RPM: {rpm} rpm</p>
            <p>리드 값: {lead} mm</p>
            <p>계산된 속도: {speed} mm/sec</p>
        </div>
    );
}

export default App;
