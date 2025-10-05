import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const ToDoList = () => {
  const [tasks, settasks] = useState([]);
  const [task, settask] = useState("");
  function addTask() {
    let temp = {};
    temp.time = Date.now();
    temp.task = task;
    temp.status = false;
    settasks([...tasks, temp]);
    settask("");
  }
  function deletetask(i) {
    let temp = tasks.filter((task, index) => i !== index);
    settasks(temp);
  }

  function changeStatus(i) {
    let temp = tasks.map((task, index) =>
      i === index ? { ...task, status: !task.status } : task
    );

    settasks(temp);
  }
  return (
    <div className="w-dvw h-dvh bg-amber-300">
      <div className="justify-self-center border-2 p-7 bg-white">
        <h1 className="text-center text-3xl pb-4">To Do List App</h1>
        <div className="m-4">
          <input
            type="text"
            className="border-2 rounded-2xl p-2"
            onChange={(e) => settask(e.target.value)}
            value={task}
          ></input>
          <button
            className="border-2 rounded-2xl p-2 bg-amber-300"
            onClick={() => addTask()}
          >
            Add Task
          </button>
        </div>
        {tasks.map((task, index) => (
          <div
            className="flex flex-row p-2 bg-amber-100 rounded-2xl gap-2.5 m-2"
            key={task.time}
          >
            {task.status ? (
              <button onClick={() => changeStatus(index)}>
                <MdOutlineTaskAlt />
              </button>
            ) : (
              <button onClick={() => changeStatus(index)}>
                <FaRegCircle />
              </button>
            )}

            <p
              className="text-2xl"
              style={{
                textDecorationLine:
                  task.status === true ? "line-through" : "none",
              }}
            >
              {task.task}
            </p>
            <button className="" onClick={() => deletetask(index)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToDoList;
