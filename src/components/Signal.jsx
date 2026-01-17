import React, { useState, useEffect } from "react";

const Signal = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const sequence = ["red", "yellow", "green"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sequence.length;
      setActiveLight(sequence[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getLightStyle = (color) => {
    const isActive = activeLight === color;
    const baseColor = {
      red: "#FF4444",
      yellow: "#FFD700",
      green: "#44FF44",
    }[color];

    return {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: isActive ? baseColor : "#333333",
      border: isActive ? `3px solid ${baseColor}` : "3px solid #555555",
      boxShadow: isActive
        ? `0 0 20px ${baseColor}, inset 0 0 10px ${baseColor}80`
        : "0 0 5px rgba(0,0,0,0.5)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100px",
          padding: "20px",
          backgroundColor: "#1a1a1a",
          borderRadius: "20px",
          border: "3px solid #333333",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Red Light */}
        <div
          style={getLightStyle("red")}
          onClick={() => setActiveLight("red")}
          title="Click to change to Red"
        ></div>

        {/* Yellow Light */}
        <div
          style={getLightStyle("yellow")}
          onClick={() => setActiveLight("yellow")}
          title="Click to change to Yellow"
        ></div>

        {/* Green Light */}
        <div
          style={getLightStyle("green")}
          onClick={() => setActiveLight("green")}
          title="Click to change to Green"
        ></div>
      </div>
    </div>
  );
};

export default Signal;
