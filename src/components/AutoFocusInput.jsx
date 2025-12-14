import { useEffect, useRef, useState } from "react";
const AutoFocusInput = () => {
  const [update, setupdate] = useState(0);
  const input = useRef("");

  function focusfn() {
    setupdate((prevupdate) => prevupdate + 1);
  }
  useEffect(() => {
    input.current.focus();
  }, [update]);
  return (
    <>
      <input type="text" ref={input}></input>
      <button onClick={focusfn}>focus</button>
    </>
  );
};
export default AutoFocusInput;
