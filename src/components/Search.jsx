import { useState } from "react";
const Search = () => {
  const data = [{ name: "ajay" }, { name: "anusha" }, { name: "ravi" }];
  const [input, setinput] = useState();
  let temp = data.filter((data) => (data.name.includes(input) ? data : null));
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      {data.map((data) => (
        <p>{data.name}</p>
      ))}
      {temp.map((data) => (
        <p>{data.name}</p>
      ))}
    </div>
  );
};
export default Search;
