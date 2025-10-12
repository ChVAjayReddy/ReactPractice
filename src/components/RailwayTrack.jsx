import { FaGripLinesVertical } from "react-icons/fa6";
import { PiTrafficSignalFill } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa";
import { LuTrainTrack } from "react-icons/lu";
import { PiTrafficSignalBold } from "react-icons/pi";
import { React, useState, useEffect, useRef } from "react";
const RailwayTRack = () => {
  let signals = [];
  let tracks = [];
  const [train, settrain] = useState(1);

  for (let i = 1; i <= 8; i++) {
    signals.push(
      <PiTrafficSignalFill
        color={
          train - i * 5 < 0
            ? "green"
            : train - i * 5 >= 10
            ? "green"
            : train - i * 5 >= 5
            ? "yellow"
            : "red"
        }
      />
    );
  }
  for (let i = 1; i <= 40; i++) {
    tracks.push(
      train === i ? (
        <IoTrainOutline
          style={{
            // transform: "rotate(270deg)",
            fontSize: "30px",
          }}
        />
      ) : (
        <LuTrainTrack
          style={{
            transform: "rotate(135deg)",
            fontSize: "30px",
          }}
        />
      )
    );
  }
  useEffect(() => {
    const interval = setInterval(() => {
      settrain((prevtrain) => prevtrain + 1);
    }, 1000);
    console.log(train);
    if (train === 40) {
      settrain(1);
    }

    return () => clearInterval(interval);
  }, [train]);
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log("Top:", rect.top);
    }
  }, [train]);
  const refs = useRef([]); // array of refs

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        console.log(
          `Train ${signals[index]} → Top: ${rect.top}, Left: ${rect.left}`
        );
      }
    });
  }, [signals]);

  return (
    <div className="flex flex-row  gap-10 mt-2.5 justify-self-center  ">
      <div className="flex flex-col justify-evenly">
        {signals.map((signal, index) => (
          <div key={index} ref={(el) => (refs.current[index] = el)}>
            {signal}
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-wrap gap-1 ">
        {tracks.map((track, index) => (
          <div key={index} ref={train === index ? boxRef : null}>
            {track}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RailwayTRack;
