// AnalogClock.js
import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border.tsx";

const AnalogClock = ({ speed }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes / 2;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <>
      <p className="text-center mb-4 text-3xl font-semibold  text-white">
        Analog Clock:
      </p>

      <div className="relative w-64 h-64 border-4 border-yellow-500 rounded-full flex items-center justify-center">
        <div
          className="absolute w-1 h-20 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>
        <div
          className="absolute w-1 h-24 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        ></div>
        <div
          className="absolute w-1 h-28 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        ></div>
        <div className="absolute w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>
    </>
  );
};

export default AnalogClock;
