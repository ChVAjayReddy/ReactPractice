import { FaGripLinesVertical } from "react-icons/fa6";
import { PiTrafficSignalFill } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa";
import { LuTrainTrack } from "react-icons/lu";
import { React, useState, useEffect, useRef } from "react";
const RailwayTRack = () => {
  let tracks = [];
  let train = [];
  let emptytrack = [];
  const [engine, setengine] = useState(0);
  const [station, setstation] = useState(0);
  const [stop, setstop] = useState(null);
  const [needtostop, setneedtostop] = useState(false);
  const [isrunning, setisrunning] = useState(true);
  const intervalref = useRef(null);

  for (let i = 0; i < 5; i++) {
    tracks.push(
      engine === i ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "30px",
          }}
        />
      ) : (
        <LuTrainTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "30px",
          }}
        />
      )
    );
  }
  for (let i = 0; i < 5; i++) {
    emptytrack.push(
      <LuTrainTrack
        style={{
          transform: "rotate(45deg)",
          fontSize: "30px",
        }}
      />
    );
  }
  for (let i = 0; i < 40; i++) {
    let obj = {};
    if (stop - 1 === i) {
      obj.signal = <PiTrafficSignalFill color={"yellow"} />;
    }
    if (stop === i) {
      if (needtostop) obj.signal = <PiTrafficSignalFill color={"red"} />;
      else obj.signal = <PiTrafficSignalFill color={"green"} />;
    } else {
      obj.signal =
        station - i < 0 ? (
          <PiTrafficSignalFill color={"green"} />
        ) : station - i >= 2 ? (
          <PiTrafficSignalFill color={"green"} />
        ) : station - i >= 1 ? (
          <PiTrafficSignalFill color={"yellow"} />
        ) : (
          <PiTrafficSignalFill color={"red"} />
        );
    }

    obj.track = i === station ? tracks : emptytrack;
    obj.station = i;
    train.push(obj);
  }
  useEffect(() => {
    if (isrunning === false && station - stop === -1 && engine === 4) {
      clearInterval(intervalref.current);
    } else {
      intervalref.current = setInterval(() => {
        setengine((prevtrain) => prevtrain + 1);
      }, 1000);
    }
    if (engine === 5) {
      setstation((prevstation) => prevstation + 1);
      setengine(0);
    }
    if (station === 40) {
      setstation(0);
      setengine(0);
    }

    return () => clearInterval(intervalref.current);
  }, [isrunning, engine, station, stop]);
  function stopsignal(index) {
    setstop(index);
    if (stop === null) {
      setstop(index);
    } else {
      setstop(null);
    }

    setneedtostop((prev) => !prev);
    setisrunning((previsrunnunig) => !previsrunnunig);
  }
  return (
    <div className="flex flex-row flex-wrap gap-y-20 mt-5 justify-center items-center">
      {train.map((tr, index) => (
        <div key={index}>
          <div className="h-12">
            {" "}
            <button
              className="cursor-pointer"
              onClick={() => stopsignal(index)}
            >
              {tr.signal}
            </button>
          </div>
          <div className="flex">
            {tr.track.map((track, index) => (
              <div key={index}>{track}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default RailwayTRack;
