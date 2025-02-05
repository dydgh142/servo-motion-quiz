import React, { useState, useEffect } from "react";

export default function MotorSpeedQuiz() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    generateQuestion();
  }, []);

  function generateQuestion() {
    const rpm = Math.floor(Math.random() * 900) + 100; // 100~1000 RPM
    const lead = Math.floor(Math.random() * 10) + 1; // 1~10 mm/rev
    const time = Math.floor(Math.random() * 5) + 1; // 1~5 minutes
    const speed = (rpm * lead) / 60; // mm/sec
    const distance = speed * time * 60; // mm

    const questionTypes = [
      {
        text: `모터가 ${rpm} RPM으로 회전하고, 볼 스크류의 리드가 ${lead} mm/rev일 때, 스테이지의 이동 속도는 몇 mm/sec인가요?`,
        correctAnswer: speed.toFixed(2),
      },
      {
        text: `스테이지의 이동 속도를 ${speed.toFixed(2)} mm/sec로 만들고 싶을 때, 모터 RPM을 얼마로 조정해야 하나요? (리드: ${lead} mm/rev)`,
        correctAnswer: rpm.toFixed(2),
      },
      {
        text: `모터가 ${rpm} RPM으로 ${time}분 동안 회전했을 때, 스테이지가 이동한 총 거리는 몇 mm인가요? (리드: ${lead} mm/rev)`,
        correctAnswer: distance.toFixed(2),
      },
    ];

    const randomQuestion =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];
    setQuestion(randomQuestion.text);
    setAnswer(randomQuestion.correctAnswer);
    setUserAnswer("");
    setFeedback("");
  }

  function checkAnswer() {
    if (parseFloat(userAnswer) === parseFloat(answer)) {
      setFeedback("✅ 정답입니다!");
    } else {
      setFeedback(`❌ 오답입니다. 정답은 ${answer} 입니다.`);
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto text-center bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">모터 속도 문제</h2>
      <p className="text-lg mb-4">{question}</p>

      {/* ShadCN이 없다면 일반 <input>으로 변경 */}
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="정답을 입력하세요"
        className="mb-4 border p-2 rounded"
      />

      <div className="mt-4">
        {/* ShadCN이 없다면 일반 <button>으로 변경 */}
        <button onClick={checkAnswer} className="mr-2 p-2 bg-blue-500 text-white rounded">
          정답 확인
        </button>
        <button onClick={generateQuestion} className="p-2 bg-gray-500 text-white rounded">
          새 문제
        </button>
      </div>

      {feedback && <p className="mt-4 text-lg font-semibold">{feedback}</p>}
    </div>
  );
}
