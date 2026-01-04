import React, { useState } from "react";

const AutoSearch = () => {
  const [date, setdata] = useState([]);
  const [res, setres] = useState("");
  let names = ["Ajay", "Anusha", "Maha", "Arha", "Ashok"];
  function Search(input) {
    let temp = names.filter((name) => name.toLocaleLowerCase().includes(input));
    if (input == "" || temp.length === 0) {
      setres("No result found");
      setdata([]);
    } else {
      setres("");
      setdata(temp);
    }
  }
  return (
    <>
      <h2>Auto Search Component</h2>
      <input type="text" onChange={(e) => Search(e.target.value)}></input>
      {date.map((name) => (
        <ul>{name}</ul>
      ))}
      <p>{res}</p>
    </>
  );
};

export default AutoSearch;
