// Tracking.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnalogClock from "./AnalogClock";
import Slider from "./Slider";
import ShareButton from "./ShareButton";
import RandomQuote from "./RandomQuote";

const Tracking = () => {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(
    Number(new URLSearchParams(window.location.search).get("speed")) || 1
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-black bg-grid-yellow-200/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div className="min-h-screen flex space-x-20 items-center justify-center text-black">
          <div className="border p-14 rounded-3xl bg-black">
            <div className="mb-4">
              <AnalogClock speed={speed} />
            </div>
            <div className="mb-4">
              <Slider value={speed} onChange={setSpeed} />
            </div>
            <div className="flex justify-center">
              <ShareButton speed={speed} />
            </div>
          </div>
          <div className="mb-2 mt-14 text-white text-bold text-3xl">
            <p className="flex items-center justify-center">Random Quote:</p>
            <RandomQuote />
          </div>
        </div>
      </p>
    </div>
  );
};

export default Tracking;
