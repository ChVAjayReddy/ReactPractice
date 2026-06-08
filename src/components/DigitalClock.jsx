import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("clearInterval", id);
      clearInterval(id);
    };
  }, []);

  return (
    <div>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
  );
}
