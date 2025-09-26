import { useState } from "react";
import ACCORDION_QUE_ANS from "../assets/data";
const Accordion = () => {
  const [accordion, setaccordion] = useState(ACCORDION_QUE_ANS);
  function handleaccordion(num) {
    let temp = accordion.map((accord) =>
      accord.id == num
        ? { ...accord, isDisplayed: !accord.isDisplayed }
        : { ...accord, isDisplayed: false }
    );
    setaccordion(temp);
  }
  return (
    <div className="justify-self-center m-28">
      <h1 className="text-center">Accordion Project</h1>
      {accordion.map((accord) => (
        <div key={accord.id}>
          <div className="flex flex-row gap-2">
            <p>{accord.question}</p>
            <button
              className="border-2"
              onClick={() => handleaccordion(accord.id)}
            >
              +
            </button>
          </div>
          <p>{accord.isDisplayed ? accord.answer : null}</p>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
