import { useState } from "react";

const ExpenseList = () => {
  const [expense, setexpense] = useState(null);
  const [number, setnumber] = useState(null);
  const [expenselist, setexpenselist] = useState([]);

  function addTask() {
    let temp = {};
    if (expenselist.length === 0) temp.sno = 1;
    else {
      temp.sno = expenselist.length + 1;
    }

    temp.expense = expense;
    temp.amount = number;
    setexpenselist((expenselist) => [...expenselist, temp]);
  }
  return (
    <div>
      <h1>Expenses List</h1>
      <label>Expense Name</label>
      <input
        type="text"
        className="bg-amber-500"
        onChange={(e) => setexpense(e.target.value)}
        value={expense}
      ></input>
      <label>Amount</label>
      <input
        type="number"
        className="bg-amber-500"
        onChange={(e) => setnumber(e.target.value)}
        value={number}
      ></input>
      <button onClick={addTask}>Submit</button>
      <div>
        {expenselist.map((expense) => (
          <div>
            <p>{expense.sno}</p>
            <p>{expense.expense}</p>
            <p>{expense.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExpenseList;
