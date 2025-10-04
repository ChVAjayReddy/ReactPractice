import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
const StarRating = () => {
  const [color, setcolor] = useState([
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);
  console.log(<FaStar />);
  const [reverse, setrevrse] = useState("");
  function rating(index) {
    let a = [];
    setrevrse(index);
    if (reverse === index) {
      for (let i = 0; i < 10; i++) {
        a[i] = "black";
      }
      setrevrse("");
    } else {
      for (let i = 0; i < 10; i++) {
        if (i <= index) {
          a[i] = "yellow";
        } else {
          a[i] = "black";
        }
      }
    }

    setcolor(a);
  }

  return (
    <div className="flex ">
      {color.map((col, index) => (
        <div key={index}>
          <FaStar color={`${col}`} size={80} onClick={() => rating(index)} />
        </div>
      ))}
    </div>
  );
};
export default StarRating;
