import { useState } from "react";
const Quiz = () => {
  const [score, setscore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
  ];
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setscore(score + 1);
      setcurrentQuestion(currentQuestion + 1);
    }
  };
  return (
    <div>
      <h1>Quiz</h1>
      <h2>Question {currentQuestion + 1}</h2>
      <p>Score: {score}</p>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
export default Quiz;
