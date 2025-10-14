import { FaGripLinesVertical } from "react-icons/fa6";
import { PiTrafficSignalFill } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa";
import { LuTrainTrack } from "react-icons/lu";
import { React, useState, useEffect, useRef } from "react";
const RailwayTRack = () => {
  // configuration
  const SLOTS = 5; // positions per station
  const STATIONS = 30; // number of station segments
  const TICK_MS = 700; // movement tick

  // trains: array of {id, station, slot, running}
  const [trains, setTrains] = useState([
    { id: 1, station: 0, slot: 0, running: true },
  ]);
  // set of stations where a manual stop/signal is active
  const [stops, setStops] = useState(new Set());
  const [runningAll, setRunningAll] = useState(false);
  const intervalRef = useRef(null);
  const nextIdRef = useRef(2);

  // helper to compute global position for collision checks
  const globalPos = (station, slot) => station * SLOTS + slot;

  // move trains on interval with simple headway check
  useEffect(() => {
    // clear any existing interval
    if (!runningAll) {
      clearInterval(intervalRef.current);
      return () => clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTrains((prev) => {
        // make a copy to update
        const next = prev.map((t) => ({ ...t }));
        // compute occupied positions (before move)
        const occupied = new Set(next.map((t) => globalPos(t.station, t.slot)));

        // minimum gap measured in global slots
        const MIN_GAP = 2; // keep 2 slots gap

        // attempt to move each train in order of their global position (furthest ahead first)
        next
          .sort(
            (a, b) =>
              globalPos(b.station, b.slot) - globalPos(a.station, a.slot)
          )
          .forEach((t) => {
            if (!t.running) return;

            // if there is a stop at the train's next station and the train is about to enter that slot, stop
            let nextSlot = t.slot + 1;
            let nextStation = t.station;
            if (nextSlot >= SLOTS) {
              nextSlot = 0;
              nextStation = t.station + 1;
              if (nextStation >= STATIONS) nextStation = 0;
            }

            const nextPos = globalPos(nextStation, nextSlot);

            // find the nearest train ahead (by comparing positions)
            let blocked = false;
            for (const other of next) {
              if (other.id === t.id) continue;
              const otherPos = globalPos(other.station, other.slot);
              const gap =
                (otherPos - nextPos + STATIONS * SLOTS) % (STATIONS * SLOTS);
              // if another train will be within MIN_GAP slots ahead, block movement
              if (gap === 0 || gap < MIN_GAP) {
                blocked = true;
                break;
              }
            }

            // also respect manual stop markers placed on stations
            const willEnterStation = nextStation;
            if (stops.has(willEnterStation)) blocked = true;

            if (!blocked) {
              // move: update occupied set
              occupied.delete(globalPos(t.station, t.slot));
              t.slot = nextSlot;
              t.station = nextStation;
              occupied.add(globalPos(t.station, t.slot));
            } else {
              // when blocked, keep train stationary
              t.running = false;
            }
          });

        // restore running flag for trains that are free (simple policy: if not blocked by another train or stop, mark running true)
        for (const t of next) {
          let followingBlocked = false;
          let nextSlot = t.slot + 1;
          let nextStation = t.station;
          if (nextSlot >= SLOTS) {
            nextSlot = 0;
            nextStation = t.station + 1;
            if (nextStation >= STATIONS) nextStation = 0;
          }
          const nextPos = globalPos(nextStation, nextSlot);
          for (const other of next) {
            if (other.id === t.id) continue;
            const otherPos = globalPos(other.station, other.slot);
            const gap =
              (otherPos - nextPos + STATIONS * SLOTS) % (STATIONS * SLOTS);
            if (gap === 0 || gap < 2) {
              followingBlocked = true;
              break;
            }
          }
          if (stops.has(nextStation)) followingBlocked = true;
          t.running = !followingBlocked;
        }

        return next;
      });
    }, TICK_MS);

    return () => clearInterval(intervalRef.current);
  }, [runningAll, stops]);

  // toggle stop at a station
  function toggleStop(stationIndex) {
    setStops((prev) => {
      const next = new Set(prev);
      if (next.has(stationIndex)) next.delete(stationIndex);
      else next.add(stationIndex);
      return next;
    });
  }

  // add a new train at the start if spacing allows
  function addNewTrain() {
    setTrains((prev) => {
      // don't add if another train is too close to the start
      const startPos = globalPos(0, 0);
      for (const t of prev) {
        const p = globalPos(t.station, t.slot);
        const gap = (p - startPos + STATIONS * SLOTS) % (STATIONS * SLOTS);
        if (gap < 4) return prev; // too close, abort
      }
      const id = nextIdRef.current++;
      return [{ id, station: 0, slot: 0, running: true }, ...prev];
    });
  }

  // build rendering structure for each station
  const rendered = [];
  for (let i = 0; i < STATIONS; i++) {
    const tracks = [];
    for (let s = 0; s < SLOTS; s++) {
      // check if a train occupies this station/slot
      const occupyingTrain = trains.find(
        (t) => t.station === i && t.slot === s
      );
      if (occupyingTrain) {
        tracks.push(
          <IoTrainOutline
            key={s}
            style={{ transform: "rotate(270deg)", fontSize: "30px" }}
          />
        );
      } else {
        tracks.push(
          <LuTrainTrack
            key={s}
            style={{ transform: "rotate(45deg)", fontSize: "30px" }}
          />
        );
      }
    }

    // signal color based on nearest train ahead distance
    // compute distance in stations to nearest train
    let signalColor = "green";
    if (stops.has(i)) signalColor = "red";
    else {
      // find distance (in stations) to the nearest train ahead
      let minStations = STATIONS;
      for (const t of trains) {
        const d = (t.station - i + STATIONS) % STATIONS;
        if (d < minStations) minStations = d;
      }
      if (minStations === 0) signalColor = "red";
      else if (minStations === 1) signalColor = "yellow";
      else signalColor = "green";
    }

    rendered.push({
      station: i,
      tracks,
      signal: <PiTrafficSignalFill color={signalColor} />,
    });
  }

  return (
    <div className="flex flex-row flex-wrap gap-y-20 mt-5 justify-center items-center">
      {rendered.map((tr, index) => (
        <div key={index}>
          <div className="h-12">
            <button
              className="cursor-pointer"
              onClick={() => toggleStop(index)}
            >
              {tr.signal}
            </button>
          </div>
          <div className="flex">{tr.tracks.map((t) => t)}</div>
        </div>
      ))}

      <div className="flex gap-2 mt-4">
        <button
          className="border-2 cursor-pointer px-3 py-1"
          onClick={() => {
            setRunningAll((v) => !v);
          }}
        >
          {runningAll ? "Stop Trains" : "Start Trains"}
        </button>
        <button
          className="border-2 cursor-pointer px-3 py-1"
          onClick={addNewTrain}
        >
          Start New Train
        </button>
      </div>
    </div>
  );
};
export default RailwayTRack;
