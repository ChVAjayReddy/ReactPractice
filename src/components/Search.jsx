import { useState } from "react";
const Search = () => {
  const [input, setinput] = useState("");
  const users = [
    { id: "1", name: "ajay" },
    { id: "2", name: "anusha" },
    { id: "3", name: "ravi" },
    { id: "3", name: "teja" },
  ];
  const data = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      ></input>
      <div>{data.map((data) => data.name)}</div>
    </>
  );
};
export default Search;
