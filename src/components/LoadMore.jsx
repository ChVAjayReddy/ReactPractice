import { useState } from "react";
import { RESTA_DATA } from "../assets/data";

const LoadMore = () => {
  const [j, setj] = useState(3);

  // derive filtered data directly (no need to store in state)
  const resdata = RESTA_DATA.filter((_, index) => index <= j);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 m-4 gap-3">
      {resdata.map((resta) => (
        <div className="border-2 h-48" key={resta.restaurantID}>
          <img className="w-full h-1/2 bg-gray-800" alt="restaurant" />
          <p>{resta.restaurantName}</p>
          <p>{resta.address}</p>
          {resta.parkingLot === true ? (
            <img
              src="/src/assets/Veg_symbol.svg"
              className="w-9 h-9"
              alt="veg"
            />
          ) : (
            <img
              src="/src/assets/Non_veg_symbol.svg"
              className="w-9 h-9"
              alt="non-veg"
            />
          )}
        </div>
      ))}
      <button onClick={() => setj((prevj) => prevj + 1)}>LoadMore</button>
    </div>
  );
};

export default LoadMore;
