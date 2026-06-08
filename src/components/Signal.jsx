import React, { useState, useEffect } from "react";

const Signal = () => {
  // CSS for sequential blinking animation
  const blinkingStyle = `
    @keyframes redActive {
      0%, 33% {
        background-color: #FF0000;
        box-shadow: 0 0 30px rgba(255, 0, 0, 1), 0 0 50px rgba(255, 0, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.5);
      }
      33.1%, 100% {
        background-color: #660000;
        box-shadow: 0 0 5px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8);
      }
    }

    @keyframes yellowActive {
      0%, 33% {
        background-color: #666600;
        box-shadow: 0 0 5px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8);
      }
      33.1%, 66% {
        background-color: #FFFF00;
        box-shadow: 0 0 30px rgba(255, 255, 0, 1), 0 0 50px rgba(255, 255, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.5);
      }
      66.1%, 100% {
        background-color: #666600;
        box-shadow: 0 0 5px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8);
      }
    }

    @keyframes greenActive {
      0%, 66% {
        background-color: #006600;
        box-shadow: 0 0 5px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8);
      }
      66.1%, 100% {
        background-color: #00FF00;
        box-shadow: 0 0 30px rgba(0, 255, 0, 1), 0 0 50px rgba(0, 255, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.5);
      }
    }

    .red-light {
      animation: redActive 3s infinite;
    }

    .yellow-light {
      animation: yellowActive 3s infinite;
    }

    .green-light {
      animation: greenActive 3s infinite;
    }
  `;


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <style>{blinkingStyle}</style>

      {/* Signal Housing */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#1a1a1a",
          borderRadius: "15px",
          border: "4px solid #444",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backdropFilter: "blur(5px)",
          width: "120px",
        }}
      >
        {/* Red Light */}
        <div
          className="red-light"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid #222",
            margin: "0 auto",
          }}
        ></div>

        {/* Yellow Light */}
        <div
          className="yellow-light"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid #222",
            margin: "0 auto",
          }}
        ></div>

        {/* Green Light */}
        <div
          className="green-light"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid #222",
            margin: "0 auto",
          }}
        ></div>
      </div>

      {/* Pole */}
      <div
        style={{
          width: "30px",
          height: "250px",
          backgroundColor: "#333",
          marginTop: "0",
        }}
      ></div>
    </div>
  );
};

export default Signal;

