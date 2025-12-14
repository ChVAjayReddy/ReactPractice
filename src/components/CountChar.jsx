import { useState } from "react";
const CountChar = () => {
  const [input, setinput] = useState("");
  function countfn(e) {
    setinput(e);
  }
  return (
    <>
      <input type="text" onChange={(e) => countfn(e.target.value)}></input>
      <p>Characters : {input.length}</p>
      {input.length > 25 && <p>Limit Exceed</p>}
    </>
  );
};
export default CountChar;
