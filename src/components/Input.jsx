import { useState } from "react";

const Input = () => {
  const [input, setinput] = useState("");
  function clearinput() {
    setinput("");
  }

  return (
    <>
      <input
        type="text"
        className="border-4"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      ></input>
      <button onClick={clearinput} className="border-4">
        reset
      </button>
      <p>No of Characters = {input.length}</p>
    </>
  );
};
export default Input;
