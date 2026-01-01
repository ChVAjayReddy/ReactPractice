import { useState } from "react";

const Accord = () => {
  let data = [
    {
      question: "What is your name?",
      answer: "Ajay",
      visible: false,
    },
    {
      question: "What is your qualification?",
      answer: "B.Tech",
      visible: false,
    },
    {
      question: "What is your town?",
      answer: "Mrk",
      visible: false,
    },
    {
      question: "What is your job?",
      answer: "React.js",
      visible: false,
    },
  ];
  const [ques, setques] = useState(data);
  function accordfn(ind) {
    let temp = ques.map((ques, index) =>
      index === ind
        ? { ...ques, visible: !ques.visible }
        : { ...ques, visible: false }
    );
    setques(temp);
  }

  return (
    <div style={{ justifySelf: "center", margin: "50px" }}>
      {ques.map((ques, index) => (
        <div>
          <button
            style={{
              padding: "10px",

              borderRadius: "10px",
              backgroundColor: "whitesmoke",
            }}
            onClick={() => accordfn(index)}
          >
            {ques.question}
            {ques.visible ? <strong> -</strong> : <strong> +</strong>}
          </button>
          {ques.visible && (
            <p style={{ padding: "10px" }} className="content">
              {ques.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accord;
