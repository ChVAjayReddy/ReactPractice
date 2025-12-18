import { useState, useCallback, useEffect } from "react";
import React from "react";

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleClick = useCallback(() => {
//     console.log("fn");
//     setCount((count) => count + 1);
//   }, []);

//   return (
//     <>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <ChildComponent onClick={handleClick} count={count} />
//     </>
//   );
// };

// const ChildComponent = React.memo(({ onClick, count }) => {
//   console.log("ChildComponent rendered");
//   return (
//     <>
//       {count}
//       <button onClick={onClick}>Click me</button>
//     </>
//   );
// });

const ParentComponent = () => {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Running...");
  //   }, 1000);

  //   // return () => {
  //   //   clearInterval(timer);
  //   // };
  // }, []);

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me</button>;
});
export default ParentComponent;
