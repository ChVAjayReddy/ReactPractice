import { LuTrainTrack } from "react-icons/lu";
const Multitrack = () => {
  let track = [];
  let emptytrack = [];
  let stationtrack = [];
  let track1 = [];
  let track3 = [];
  for (let i = 1; i <= 10; i++) {
    emptytrack.push(
      <LuTrainTrack
        style={{
          transform: "rotate(45deg)",
          fontSize: "30px",
          color: "green",
        }}
      />
    );
  }
  for (let i = 1; i <= 12; i++) {
    track1.push(
      i === 1 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(15deg)",
            fontSize: "30px",
            position: "relative",
            top: "10px",
          }}
        />
      ) : i === 10 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(70deg)",
            fontSize: "30px",
            position: "relative",
            top: "10px",
          }}
        />
      ) : i === 2 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(35deg)",
            fontSize: "30px",
            position: "relative",
            top: "10px",
          }}
        />
      ) : i === 11 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(70deg)",
            fontSize: "30px",
            position: "relative",
            top: "10px",
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
  for (let i = 1; i <= 10; i++) {
    track3.push(
      i === 1 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(70deg)",
            fontSize: "30px",
            position: "relative",
            top: "-10px",
          }}
        />
      ) : i === 10 ? (
        <LuTrainTrack
          style={{
            transform: "rotate(15deg)",
            fontSize: "30px",
            position: "relative",
            top: "-10px",
          }}
        />
      ) : (
        <LuTrainTrack
          style={{
            transform: "rotate(45deg)",
            fontSize: "30px",
            color: "red",
          }}
        />
      )
    );
  }

  for (let i = 1; i <= 3; i++) {
    stationtrack.push(i === 1 ? track1 : i === 3 ? track3 : emptytrack);
  }

  for (let i = 1; i <= 10; i++) {
    track.push(i % 3 === 0 ? stationtrack : emptytrack);
  }
  return (
    <div className="flex flex-row flex-wrap items-center gap-y-10">
      {track.map((tr) =>
        tr.length === 3 ? (
          <div className="flex flex-col gap-y-4">
            {tr.map((t) => (
              <div className="flex flex-row ">{t}</div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row">
            {tr.map((t) => (
              <div>{t}</div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
export default Multitrack;
