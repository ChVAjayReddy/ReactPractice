import { useState } from "react";
import { QUIZ_QUE_ANS } from "../assets/data";
const Onlinequiz = () => {
  const [qno, setqno] = useState(1);
  const [buttontext, setbuttontext] = useState("Next");
  const [queans, setqueans] = useState(QUIZ_QUE_ANS);
  const [result, setresult] = useState(0);
  function handlechange(qno, oindex) {
    let temp = queans.map((quiz) =>
      quiz.qno === qno
        ? {
            ...quiz,
            options: quiz.options.map((option, index) =>
              index === oindex
                ? { ...option, isoptionchcked: true }
                : { ...option, isoptionchcked: false }
            ),
          }
        : quiz
    );

    setqueans(temp);
  }
  function handleresult() {
    if (buttontext === "submit") {
      let temp = queans.filter((quiz) => {
        let iscorrect = quiz.options.filter(
          (option) => option.isanswer === true && option.isoptionchcked === true
        );

        if (iscorrect.length > 0) {
          return quiz;
        }
      });
      setresult(temp.length);
    }
  }
  return (
    <div>
      {queans.map((quiz) =>
        quiz.qno === qno ? (
          <div key={quiz.qno}>
            <p>{quiz.question}</p>
            {quiz.options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  checked={option.isoptionchcked}
                  onChange={() => handlechange(quiz.qno, index)}
                />
                <p>{option.ans}</p>
              </div>
            ))}
          </div>
        ) : null
      )}
      <button
        className="border-2"
        style={{ display: qno === 1 ? "none" : "block" }}
        onClick={() => {
          qno === 1 ? setqno(1) : setqno((prevqno) => prevqno - 1);
          qno !== 3 ? setbuttontext("Next") : null;
        }}
      >
        Prev
      </button>
      <button
        className="border-2"
        onClick={() => {
          qno === 4 ? setqno(4) : setqno((prevqno) => prevqno + 1);
          qno === 3 ? setbuttontext("submit") : null;
          handleresult();
        }}
      >
        {buttontext}
      </button>
      <p>{result}</p>
    </div>
  );
};
export default Onlinequiz;
