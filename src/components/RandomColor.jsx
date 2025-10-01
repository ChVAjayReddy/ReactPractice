import { useState } from "react";

const RandomColor = () => {
  const [colortype, setcolortype] = useState("HEX Color");
  const [colorcode, setcolorcode] = useState("#4287f5");
  function random(num) {
    return Math.floor(Math.random() * (num - 0 + 1)) + 0;
  }

  function randomvolor() {
    if (colortype === "HEX Color") {
      let code = "#";
      for (let i = 0; i <= 2; i++) {
        let alphabets = "abcdef";
        for (let i = 0; i <= 1; i++) {
          let decide = random(1);
          if (decide) {
            code += random(9);
          } else {
            code += alphabets[random(5)];
          }
        }
      }
      setcolorcode(code);
    } else {
      let c1 = random(255);
      let c2 = random(255);
      let c3 = random(255);
      setcolorcode(`rgb(${c1},${c2},${c3})`);
    }
  }
  return (
    <div
      className="w-full h-dvh justify-self-center border-2"
      style={{
        backgroundColor: colorcode,
      }}
    >
      <div className="flex flex-row gap-1 justify-center">
        <button className="border-2" onClick={() => setcolortype("HEX Color")}>
          Create HEX Color
        </button>
        <button className="border-2" onClick={() => setcolortype("RGB Color")}>
          Create RGB Color
        </button>
        <button className="border-2" onClick={() => randomvolor()}>
          Generate Random Color
        </button>
      </div>
      <p className=" m-2 text-center text-2xl">{colortype}</p>
      <p className="m-2 text-center text-3xl">{colorcode}</p>
    </div>
  );
};
export default RandomColor;
