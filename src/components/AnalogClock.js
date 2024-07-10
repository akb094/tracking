// AnalogClock.js
import React, { useEffect, useState, useRef } from "react";

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date(Date.now() - 120 * 60000));
  const requestRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = ((hours % 12) / 12) * -360 + (minutes / 60) * -30; // -360 for anticlockwise
  const minuteDegrees = (minutes / 60) * -360 + (seconds / 60) * -6; // -360 for anticlockwise
  const secondDegrees = (seconds / 60) * -360; // -360 for anticlockwise

  return (
    <>
      <p className="text-center mb-4 text-3xl font-semibold  text-white">
        Analog Clock:
      </p>

      <div className="relative w-64 h-64 border-4 border-yellow-500 rounded-full flex items-center justify-center">
        <div
          className="absolute w-1 h-20 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${-hourDegrees}deg)` }}
        ></div>
        <div
          className="absolute w-1 h-24 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${-minuteDegrees}deg)` }}
        ></div>
        <div
          className="absolute w-1 h-28 bg-yellow-500 origin-bottom transform"
          style={{ transform: `rotate(${-secondDegrees}deg)` }}
        ></div>
        <div className="absolute w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>
    </>
  );
};

export default AnalogClock;
