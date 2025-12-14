import { useState } from "react";

const Task1 = () => {
  const [input, setinput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      ></input>
      <p>No of Characters {input.length}</p>
      {input.length > 20 && <p>Limit Exceed</p>}
    </>
  );
};
export default Task1;
