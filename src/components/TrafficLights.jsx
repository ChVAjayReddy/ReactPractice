import { useState, useEffect } from "react";

const TrafficLights = () => {
  const [coun, setcount] = useState(1);
  useEffect(() => {
    let data = setInterval(
      () => (coun === 8 ? setcount(1) : setcount((coun) => coun + 1)),
      1000
    );
    console.log(coun);
    return () => clearInterval(data);
  }, [coun]);
  return (
    <>
      <div
        style={{
          width: "100px",
          backgroundColor: "gray",
          height: "250px",
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              borderRadius: "100px",
              margin: "10px",
              backgroundColor:
                coun == 1 || coun == 2 || coun == 3 ? "red" : "white",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              margin: "10px",
              borderRadius: "100px",
              backgroundColor: coun == 4 || coun == 5 ? "yellow" : "white",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              margin: "10px",
              borderRadius: "100px",
              backgroundColor:
                coun == 6 || coun == 7 || coun == 8 ? "green" : "white",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrafficLights;
