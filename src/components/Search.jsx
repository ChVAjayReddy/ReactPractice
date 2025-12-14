import { useContext, useState } from "react";
import { useData } from "../context/dataContext";
const Search = () => {
  const [input, setinput] = useState("");
  const { name, setname } = useData();
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
      <p>{name}</p>
      <button onClick={() => setname("Reddy")}>Change Name</button>
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
