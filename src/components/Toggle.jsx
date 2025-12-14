import { useState } from "react";

const Toggle = () => {
  const [display, setdisplay] = useState(false);
  const [displaybtn, setdisplabtn] = useState("show");
  function displayfn() {
    setdisplay((prevdisplay) => !prevdisplay);
    displaybtn == "show" ? setdisplabtn("hide") : setdisplabtn("show");
  }

  return (
    <>
      <button onClick={displayfn}>{displaybtn}</button>
      {display && <p>Welcome to React</p>}
    </>
  );
};
export default Toggle;
