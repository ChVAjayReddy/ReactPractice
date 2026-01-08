import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const DashboardWidget = () => {
  const widgets = [
    { id: 1, title: "Revenue", value: 1200, favourite: false },
    { id: 2, title: "Users", value: 800, favourite: false },
    { id: 3, title: "Orders", value: 450, favourite: false },
    { id: 4, title: "Conversion Rate", value: 2.4, favourite: false },
  ];
  const [data, setdata] = useState(widgets);
  const [Search, setSearch] = useState("");

  function handleSearch(query) {
    const q = (query || "").toString().trim().toLowerCase();
    if (!q) {
      setdata(widgets);
      return;
    }
    const temp = widgets.filter((widget) =>
      widget.title.toLowerCase().includes(q)
    );
    setdata(temp);
  }
  function sorting() {
    let temp = data.sort((a, b) => a.value - b.value);
    setdata([...temp]);
  }
  function handleFavourite(id) {
    const temp = data.map((widget) => {
      if (widget.id === id) {
        return { ...widget, favourite: !widget.favourite };
      }
      return widget;
    });
    setdata(temp);
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
            <button onClick={() => handleFavourite(widget.id)}>
              {" "}
              {widget.favourite ? <FaStar /> : <CiStar />}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardWidget;
