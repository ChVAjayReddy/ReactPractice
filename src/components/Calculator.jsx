import { useState } from "react";
import { IoIosBackspace } from "react-icons/io";
const Calculator = () => {
  const [value, setvalue] = useState("");

  return (
    <div className="flex flex-row gap-3">
      <button
        className="border-2 p-2"
        value="1"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        1
      </button>
      <button
        className="border-2 p-2"
        value="2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        2
      </button>
      <button
        value="3"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        3
      </button>
      <button
        value="4"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        4
      </button>
      <button
        value="5"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        5
      </button>
      <button
        value="6"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        6
      </button>
      <button
        value="7"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        7
      </button>
      <button
        value="8"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        8
      </button>
      <button
        value="9"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        9
      </button>
      <button
        value="0"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        0
      </button>
      <button
        value="+"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        +
      </button>
      <button
        value="-"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        -
      </button>
      <button
        value="*"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        *
      </button>
      <button
        value="/"
        className="border-2 p-2"
        onClick={(e) => setvalue(value + e.target.value)}
      >
        /
      </button>
      <button value="CE" className="border-2 p-2" onClick={() => setvalue("")}>
        CE
      </button>
      <button
        className="border-2 p-2"
        onClick={() => setvalue(value.slice(0, -1))}
      >
        <IoIosBackspace />
      </button>
      <button
        value="="
        className="border-2 p-2"
        onClick={() => setvalue(eval(value))}
      >
        =
      </button>
      <p>{value}</p>
      {console.log(typeof value)}
    </div>
  );
};
export default Calculator;
