import React, { useState } from "react";

const DashboardWidget = () => {
  const widgets = [
    { id: 1, title: "Revenue", value: 1200 },
    { id: 2, title: "Users", value: 800 },
    { id: 3, title: "Orders", value: 450 },
    { id: 4, title: "Conversion Rate", value: 2.4 },
  ];
  const [data, setdata] = useState(widgets);
  const [Search, setSearch] = useState("");

  function handleSearch(e) {
    let temp = data.filter((widget) => widget.title.includes(e));
    setdata(temp);
  }
  function sorting() {
    let temp = data.sort((a, b) => a.value - b.value);
    setdata([...temp]);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={Search}
          placeholder="Search widgets..."
          className="border border-gray-300 rounded-md p-2 m-4 w-1/3"
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md m-4"
          onClick={sorting}
        >
          Sort
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {data.map((widget) => (
          <div
            className="flex bg-amber-500 gap-5 h-10 justify-around items-center p-2 rounded-md text-white"
            key={widget.id}
          >
            <p>{widget.id}</p>
            <p>{widget.title}</p>
            <p>{widget.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardWidget;
