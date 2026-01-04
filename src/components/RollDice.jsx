import React, { useState } from "react";

const RollDice = () => {
  const [dicev, setdicev] = useState(0);
  function dice() {
    let temp = Math.floor(Math.random() * 6) + 1;
    setdicev(temp);
  }

  return (
    <>
      <div>RollDice Component</div>
      <button onClick={() => dice()}>Roll Dice</button>
      <p>{dicev}</p>
    </>
  );
};

export default RollDice;
