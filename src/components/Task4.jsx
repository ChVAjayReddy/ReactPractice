import { useState } from "react";

const Task4 = () => {
  const [tasks, settasks] = useState([]);
  const [task, settask] = useState("");
  function addtask() {
    settasks((tasks) => [...tasks, task]);
    settask("");
  }

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => settask(e.target.value)}
      ></input>
      <button onClick={addtask}>Add Task</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </>
  );
};
export default Task4;
