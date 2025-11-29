import React, { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

const LedBulb = () => {
  const [bulbs, setBulbs] = useState([
    {
      id: 1,
      isOn: false,
      brightness: 50,
      color: "#ffd700",
      mode: "normal",
      watts: 5,
    },
    {
      id: 2,
      isOn: false,
      brightness: 50,
      color: "#ffd700",
      mode: "normal",
      watts: 5,
    },
    {
      id: 3,
      isOn: false,
      brightness: 50,
      color: "#ffd700",
      mode: "normal",
      watts: 5,
    },
    {
      id: 4,
      isOn: false,
      brightness: 50,
      color: "#ffd700",
      mode: "normal",
      watts: 5,
    },
  ]);

  // 🌈 Neon Color Cycling (Party Mode)
  useEffect(() => {
    const interval = setInterval(() => {
      setBulbs((prev) =>
        prev.map((b) => {
          if (b.mode === "party") {
            return {
              ...b,
              color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
            };
          }
          return b;
        })
      );
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Flicker Mode (Candle Effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setBulbs((prev) =>
        prev.map((b) => {
          if (b.mode === "flicker") {
            return {
              ...b,
              brightness: 50 + Math.floor(Math.random() * 50),
            };
          }
          return b;
        })
      );
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Master Switch
  const masterToggle = (state) => {
    setBulbs((prev) => prev.map((b) => ({ ...b, isOn: state })));
  };

  // Toggle Individual
  const toggleBulb = (id) => {
    setBulbs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isOn: !b.isOn } : b))
    );
  };

  // Brightness
  const changeBrightness = (id, val) => {
    setBulbs((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, brightness: Number(val), watts: Math.floor(val * 0.12) }
          : b
      )
    );
  };

  // Color Picker
  const changeColor = (id, color) => {
    setBulbs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, color, mode: "normal" } : b))
    );
  };

  // Scene Modes
  const setMode = (id, mode) => {
    setBulbs((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;
        if (mode === "relax")
          return { ...b, color: "#ffb84d", brightness: 60, mode };
        if (mode === "focus")
          return { ...b, color: "#ffffff", brightness: 100, mode };
        if (mode === "night")
          return { ...b, color: "#ffaa00", brightness: 20, mode };
        if (mode === "party") return { ...b, mode };
        if (mode === "flicker") return { ...b, mode };
        return { ...b, mode: "normal" };
      })
    );
  };

  return (
    <>
      <style>
        {`
          .wall {
            display: grid;
            gap: 28px;
            padding: 30px;
          }
          @media (min-width: 600px) {
            .wall { grid-template-columns: repeat(2, 1fr); }
          }
          @media (min-width: 900px) {
            .wall { grid-template-columns: repeat(3, 1fr); }
          }
          .card {
            background: #ffffff;
            border-radius: 16px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            transition: 0.25s;
          }
          .card:hover { transform: translateY(-4px); }

          .bulb-img {
            width: 110px;
            filter: drop-shadow(0 0 12px yellow);
            transition: 0.3s;
          }

          button {
            padding: 8px 14px;
            margin: 4px;
            border: none;
            border-radius: 8px;
            background: black;
            color: white;
            font-size: 14px;
            cursor: pointer;
            transition: 0.2s;
          }
          button:hover { background: #444; }

          input[type='range'] {
            width: 100%;
            margin-top: 10px;
          }

        `}
      </style>

      {/* MASTER CONTROLS */}
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <button onClick={() => masterToggle(true)}>Turn ALL ON</button>
        <button onClick={() => masterToggle(false)}>Turn ALL OFF</button>
      </div>

      <div className="wall">
        {bulbs.map((b) => {
          const glow = b.brightness * 1.8;

          return (
            <div key={b.id} className="card">
              <h2>Wall Card {b.id}</h2>

              {/* REAL BULB IMAGE + GLOW */}
              <FaLightbulb
                className="bulb-img"
                size={150}
                style={{
                  opacity: b.isOn ? 1 : 0.3,
                  filter: b.isOn
                    ? `drop-shadow(0 0 ${glow}px ${b.color})`
                    : "none",
                  transform: b.isOn
                    ? `scale(${1 + b.brightness / 300})`
                    : "scale(1)",
                  color: b.isOn ? b.color : "#555555",

                  justifySelf: "center",
                }}
              />
              {/* <img
                src="/bulb.png"
                className="bulb-img"
                style={{
                  opacity: b.isOn ? 1 : 0.3,
                  filter: b.isOn
                    ? `drop-shadow(0 0 ${glow}px ${b.color})`
                    : "none",
                  transform: b.isOn
                    ? `scale(${1 + b.brightness / 300})`
                    : "scale(1)",
                }}
              /> */}

              {/* Toggle */}
              <button onClick={() => toggleBulb(b.id)}>
                {b.isOn ? "Turn OFF" : "Turn ON"}
              </button>

              {/* Watts Meter */}
              <p>
                <b>Power:</b> {b.watts}W
              </p>

              {/* Brightness Slider */}
              <label>Brightness: {b.brightness}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={b.brightness}
                onChange={(e) => changeBrightness(b.id, e.target.value)}
              />

              {/* Color Picker */}
              <div>
                <label>Color: </label>
                <input
                  type="color"
                  value={b.color}
                  onChange={(e) => changeColor(b.id, e.target.value)}
                  style={{ width: "50px", height: "30px", border: "none" }}
                />
              </div>

              {/* Scene Buttons */}
              <div style={{ marginTop: 10 }}>
                <button onClick={() => setMode(b.id, "relax")}>Relax</button>
                <button onClick={() => setMode(b.id, "focus")}>Focus</button>
                <button onClick={() => setMode(b.id, "night")}>Night</button>
                <button onClick={() => setMode(b.id, "party")}>Party</button>
                <button onClick={() => setMode(b.id, "flicker")}>
                  Flicker
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LedBulb;
