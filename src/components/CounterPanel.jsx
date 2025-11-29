import React, { useState } from "react";

const CounterPanel = (props) => {
  const { count } = props;
  const [counter, setCounter] = useState(count);
  const [input, setinput] = useState();
  function increment() {
    let temp = counter + Number(input);
    setCounter(temp);
    setinput("");
  }
  function decrement() {
    let temp = counter - Number(input);
    setCounter(temp);
    setinput("");
  }

  return (
    <div>
      <input
        type="numer"
        className="border-2 p-3 m-2"
        onChange={(e) => setinput(e.target.value)}
        value={input}
      ></input>
      <br></br> <br></br>
      <button className="border-2 p-3 m-2" onClick={increment}>
        Increment
      </button>
      <button className="border-2 p-3 m-2" onClick={decrement}>
        Decrement
      </button>
      <br></br>
      <p
        style={{
          color: counter > 10 ? "green" : counter < 0 ? "red" : "black",
        }}
      >
        Count : {counter}
      </p>
      {counter > 10 && <p className="text-green-600"> High Count</p>}
      {counter < 0 && <p className="text-red-700">Negative Count</p>}
    </div>
  );
};

export default CounterPanel;
