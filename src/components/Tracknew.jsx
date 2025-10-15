import { PiTrafficSignalFill } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { LuTrainTrack } from "react-icons/lu";
import { React, useState, useEffect, useRef } from "react";
const RailwayTRack = () => {
  let engineposition0 = [];
  let train = [];
  let stoppages = [];
  let engineposition1 = [];
  let engineposition2 = [];
  let engineposition3 = [];
  let engineposition4 = [];
  let emptytrack = [];
  let [red, setred] = useState([]);
  const [engine, setengine] = useState(0);
  const [station, setstation] = useState(0);
  const intervalref = useRef(null);
  const [nooftrains, setnooftrains] = useState([]);
  const [stopstation, setstopstation] = useState([]);
  const [engineposition, setengineposition] = useState([]);
  const [j, setj] = useState(0);

  for (let i = 0; i < 5; i++) {
    engineposition0.push(
      i === 0 ? (
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
    engineposition1.push(
      i === 1 ? (
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
    engineposition2.push(
      i === 2 ? (
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
    engineposition3.push(
      i === 3 ? (
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
    engineposition4.push(
      i === 4 ? (
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
    let temp = nooftrains.map((train) => train - 1);
    let index = nooftrains.indexOf(i);

    if (nooftrains.includes(i)) {
      obj.signal = (
        <PiTrafficSignalFill style={{ fontSize: "30px", color: "red" }} />
      );
    } else if (temp.includes(i)) {
      obj.signal = (
        <PiTrafficSignalFill style={{ fontSize: "30px", color: "yellow" }} />
      );
      obj.isstop = true;
    } else {
      obj.signal = (
        <PiTrafficSignalFill style={{ fontSize: "30px", color: "green" }} />
      );
      obj.isstop = false;
    }
    if (stopstation.includes(i)) {
      obj.signal = (
        <PiTrafficSignalFill style={{ fontSize: "30px", color: "red" }} />
      );
      obj.isstop = true;
    }

    if (index !== -1) {
      if (engineposition[index] === 0) {
        obj.track = engineposition0;
      } else if (engineposition[index] === 1) {
        obj.track = engineposition1;
      } else if (engineposition[index] === 2) {
        obj.track = engineposition2;
      } else if (engineposition[index] === 3) {
        obj.track = engineposition3;
      } else if (engineposition[index] === 4) {
        obj.track = engineposition4;
      }
    } else {
      obj.track = emptytrack;
    }

    train.push(obj);
  }
  useEffect(() => {
    intervalref.current = setInterval(() => {
      let temporary = [];
      let sopping = stopstation.map((a) => a);

      for (let i = 0; i < engineposition.length; i++) {
        if (stopstation.includes(nooftrains[i])) {
          for (let k = 0; k < engineposition.length; k++) {
            if (i === k) {
              engineposition[k] === 4
                ? temporary.push(4)
                : temporary.push(engineposition[k] + 1);
            }
          }
        } else {
          for (let k = 0; k < engineposition.length; k++) {
            if (i === k) {
              engineposition[k] === 4
                ? temporary.push(0)
                : temporary.push(engineposition[k] + 1);
            }
          }
        }
      }
      setengineposition(temporary);

      let indexes = engineposition
        .map((pos, index) => (pos === 4 ? index : null))
        .filter((index) => index !== null);
      let temp2 = [];
      // let temp2 = nooftrains.map((train, index) =>
      //   indexes.includes(index)
      //     ? train === stopstation - 1
      //       ? train
      //       : train + 1
      //     : train
      // );
      for (let i = 0; i < nooftrains.length; i++) {
        if (sopping.includes(nooftrains[i]) && indexes.includes(i)) {
          temp2.push(nooftrains[i]);
          setstopstation([...stopstation, nooftrains[i] - 1]);
        } else if (
          !stopstation.includes(nooftrains[i]) &&
          indexes.includes(i)
        ) {
          temp2.push(nooftrains[i] + 1);
        } else {
          temp2.push(nooftrains[i]);
        }
      }
      setnooftrains(temp2);
    }, 1000);

    return () => clearInterval(intervalref.current);
  }, [engine, station, nooftrains, engineposition, stopstation, red]);

  function addtrain() {
    setnooftrains([...nooftrains, 0]);
    setengineposition([...engineposition, 0]);
  }
  function changesignal(ind) {
    if (stopstation.includes(ind)) {
      let temp = stopstation.filter((station) => station != ind);
      setstation(temp);
    } else {
      setstopstation([...stopstation, ind]);
    }
  }
  return (
    <div className="flex flex-row flex-wrap gap-y-20 mt-5 justify-center items-center">
      {train.map((tr, index) => (
        <div key={index}>
          <div className="h-12 ">
            {" "}
            <button
              className="cursor-pointer"
              onClick={() => changesignal(index)}
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
      <button
        className="border-2 cursor-pointer "
        onClick={() => {
          setnooftrains([...nooftrains, 0]);
          setengineposition([...engineposition, 0]);
        }}
      >
        Start Train
      </button>
      <button className="border-2 cursor-pointer" onClick={() => addtrain()}>
        Add New train
      </button>
    </div>
  );
};
export default RailwayTRack;
