import { useState } from "react";

const Task3 = () => {
  const [input, setinput] = useState("");
  const users = ["Ajay", "Ravi", "Anusha", "Teja"];
  const [filtered, setfiltered] = useState([]);

  function filter(input) {
    setinput(input);
    if (input === "") {
      setfiltered([]);
    } else {
      let temp = users.filter((user) =>
        user.toLowerCase().includes(input.toLowerCase())
      );
      setfiltered(temp);
    }
  }

  return (
    <>
      <li>
        {" "}
        {users.map((user) => (
          <ol>{user}</ol>
        ))}
      </li>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          filter(e.target.value);
        }}
      ></input>
      <li>
        {" "}
        {filtered.map((user) => (
          <ol>{user}</ol>
        ))}
      </li>
    </>
  );
};
export default Task3;
