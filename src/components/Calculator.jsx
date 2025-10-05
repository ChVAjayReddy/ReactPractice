import { useState } from "react";

const Calculator = () => {
  const [arg1, setarg1] = useState("");
  const [arg2, setarg2] = useState("");
  const [op, setop] = useState("");
  const [res, setres] = useState("");

  function addnum(num) {
    if (op === "") {
      let a = arg1 + num;
      setarg1(a);
    } else {
      //   setarg2(arg2 + num);
      let b = arg2 + num;
      setarg2(b);
    }
    console.log(arg1, arg2);
  }
  function result() {
    if (op === "add") {
      let c = arg1 + arg2;
      setres(c);
    } else if (op === "sub") {
      let c = arg1 - arg2;
      setres(c);
    } else if (op === "mul") {
      let c = arg1 * arg2;
      setres(c);
    } else if (op === "div") {
      let c = arg1 / arg2;
      setres(c);
    }
    console.log(res);
  }
  return (
    <div>
      <p>Calculator</p>
      <button className="border-2 w-10" onClick={() => addnum(1)}>
        1
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(2)}>
        2
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(3)}>
        3
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(4)}>
        4
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(5)}>
        5
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(6)}>
        6
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(7)}>
        7
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(8)}>
        8
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(9)}>
        9
      </button>{" "}
      <button className="border-2 w-10" onClick={() => addnum(0)}>
        0
      </button>{" "}
      <button className="border-2 w-10" onClick={() => setop("add")}>
        +
      </button>{" "}
      <button className="border-2 w-10" onClick={() => setop("sub")}>
        -
      </button>{" "}
      <button className="border-2 w-10 " onClick={() => setop("mul")}>
        *
      </button>{" "}
      <button className="border-2 w-10" onClick={() => setop("div")}>
        /
      </button>{" "}
      <button className="border-2 w-10" onClick={() => result()}>
        =
      </button>
      <p></p>
    </div>
  );
};
export default Calculator;
