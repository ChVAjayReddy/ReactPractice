import { TbTrack } from "react-icons/tb";
import { PiTrafficSignalFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { IoTrainOutline } from "react-icons/io5";
const GKDMRK = () => {
  let track = [];
  let engineposition0 = [];
  let engineposition1 = [];
  let engineposition2 = [];
  let engineposition3 = [];
  let engineposition4 = [];
  let engineposition5 = [];
  let totaltrack = [];
  let red = [];
  let green = [];
  let yellow = [];
  const [stoppagestations, setstoppagestations] = useState([]);
  let stations = [];
  const [runningstations, setrunningstations] = useState([]);
  const [position, setposition] = useState([]);
  for (let i = 0; i <= 5; i++) {
    track.push(
      <TbTrack
        style={{
          transform: "rotate(45deg)",
          fontSize: "45px",
        }}
      />
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition0.push(
      i === 0 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition1.push(
      i === 1 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition2.push(
      i === 2 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition3.push(
      i === 3 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition4.push(
      i === 4 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 5; i++) {
    engineposition5.push(
      i === 5 ? (
        <IoTrainOutline
          style={{
            transform: "rotate(270deg)",
            fontSize: "45px",
            color: "red",
          }}
        />
      ) : (
        <TbTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "45px",
          }}
        />
      )
    );
  }
  for (let i = 0; i <= 17; i++) {
    if (runningstations.includes(i)) {
      let tempindex = runningstations.indexOf(i);
      if (position[tempindex] === 0) {
        totaltrack.push(engineposition0);
      } else if (position[tempindex] === 1) {
        totaltrack.push(engineposition1);
      } else if (position[tempindex] === 2) {
        totaltrack.push(engineposition2);
      } else if (position[tempindex] === 3) {
        totaltrack.push(engineposition3);
      } else if (position[tempindex] === 4) {
        totaltrack.push(engineposition4);
      } else if (position[tempindex] === 5) {
        totaltrack.push(engineposition5);
      }
    } else totaltrack.push(track);
  }
  for (let i = 0; i <= 17; i++) {
    let red = runningstations.map((station) => station - 1);
    let yellow = runningstations.map((station) => station - 2);
    if (red.includes(i) || stoppagestations.includes(i)) {
      stations.push(<PiTrafficSignalFill color="red" />);
    } else if (yellow.includes(i)) {
      stations.push(<PiTrafficSignalFill color="yellow" />);
    } else {
      stations.push(<PiTrafficSignalFill color="green" />);
    }
  }
  function changesignal(ind) {
    if (stoppagestations.includes(ind)) {
      let tempstoppage = stoppagestations.filter((station) => station !== ind);
      setstoppagestations(tempstoppage);
    } else setstoppagestations([...stoppagestations, ind]);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      let index1 = runningstations
        .map((station, index) =>
          stoppagestations.includes(station) ? index : null
        )
        .filter((index) => index !== null);

      // let tempposition = position.map((pos, index) =>
      //   index1.includes(index) && pos === 4
      //     ? (pos = 4)
      //     : pos === 5
      //     ? 0
      //     : pos + 1
      // );
      let temp2 = [];
      for (let i = 0; i < position.length; i++) {
        if (index1.includes(i) && position[i] === 4) {
          temp2.push(4);
          setstoppagestations([...stoppagestations, stoppagestations[i] - 1]);
        } else {
          if (position[i] === 5) {
            temp2.push(0);
          } else {
            temp2.push(position[i] + 1);
          }
        }
      }

      let indexes = position
        .map((pos, index) => (pos === 5 ? index : null))
        .filter((index) => index !== null);
      console.log(indexes);

      let temprunningstations = runningstations.map((station, index) =>
        stoppagestations.includes(station)
          ? station
          : indexes.includes(index)
          ? station + 1
          : station
      );

      setposition(temp2);
      setrunningstations(temprunningstations);
    }, 100);
    return () => clearInterval(timer);
  }, [position, runningstations, stoppagestations]);
  return (
    <div>
      <div className="grid grid-cols-6">
        {stations.map((station, index) =>
          index >= 0 && index <= 5 ? (
            <button
              onClick={() => changesignal(index)}
              className="flex flex-row-reverse cursor-pointer"
            >
              {station}
            </button>
          ) : null
        )}
      </div>
      <div className="grid grid-cols-6">
        {totaltrack.map((track, index) => (
          <div className="flex flex-row">
            {index >= 0 && index <= 5
              ? track.map((tr) => (
                  <div className="flex flex-row gap-x-0">{tr}</div>
                ))
              : null}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6">
        {stations.map((station, index) =>
          index >= 6 && index <= 11 ? (
            <button
              onClick={() => changesignal(index)}
              className="flex flex-row-reverse cursor-pointer"
            >
              {station}
            </button>
          ) : null
        )}
      </div>
      <div className="grid grid-cols-6">
        {totaltrack.map((track, index) => (
          <div className="flex flex-row">
            {index >= 6 && index <= 11
              ? track.map((tr) => (
                  <div className="flex flex-row gap-x-0">{tr}</div>
                ))
              : null}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6">
        {stations.map((station, index) =>
          index >= 12 && index <= 17 ? (
            <button
              onClick={() => changesignal(index)}
              className="flex flex-row-reverse cursor-pointer"
            >
              {station}
            </button>
          ) : null
        )}
      </div>
      <div className="grid grid-cols-6">
        {totaltrack.map((track, index) => (
          <div className="flex flex-row">
            {index >= 12 && index <= 17
              ? track.map((tr) => (
                  <div className="flex flex-row gap-x-0">{tr}</div>
                ))
              : null}
          </div>
        ))}
      </div>
      <button
        className="border-2 cursor-pointer"
        onClick={() => {
          {
            setrunningstations([...runningstations, 0]);
            {
              setposition([...position, 0]);
            }
          }
        }}
      >
        Start Passenger Train
      </button>
      <button className="border-2 cursor-pointer">Start Express Train</button>
      <button className="border-2 cursor-pointer">
        Start VandeBharat Train
      </button>
    </div>
  );
};
export default GKDMRK;
