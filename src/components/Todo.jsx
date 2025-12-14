import { useRef, useState } from "react";

const Todo = () => {
  const [list, setlist] = useState([]);
  const task = useRef(null);
  function addtask() {
    setlist((prevlist) => [...prevlist, task.current.value]);
  }

  return (
    <>
      <input type="text" ref={task}></input>
      <button onClick={addtask}>add task</button>
      <div>
        <ul>
          {list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Todo;
