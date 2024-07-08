// Tracking.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnalogClock from "./AnalogClock";
import Slider from "./Slider";
import RandomQuote from "./RandomQuote";

const Tracking = () => {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const generateShareUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("speed", speed);
    return url.toString();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <AnalogClock speed={speed} />
      <Slider value={speed} onChange={handleSpeedChange} />
      <button
        onClick={() => navigator.clipboard.writeText(generateShareUrl())}
        className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
      >
        Share
      </button>
      <RandomQuote />
    </div>
  );
};

export default Tracking;
