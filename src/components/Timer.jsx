import React, { useState, useEffect } from "react";
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let id;
    id = setInterval(() => setTime((prevtime) => prevtime + 1), 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      <p>{time}</p>
    </>
  );
};
export default Timer;
