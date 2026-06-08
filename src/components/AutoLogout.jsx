import { useEffect, useState } from "react";

export default function AutoLogout() {
  const [timeLeft, setTimeLeft] = useState(5);

  //   useEffect(() => {
  //     if (timeLeft === 0) {
  //       alert("You have been logged out");
  //       return;
  //     }

  //     const id = setInterval(() => {
  //       setTimeLeft((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(id);
  //   }, [timeLeft]);
  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <p>Time remaining: {timeLeft} seconds</p>
    </div>
  );
}
