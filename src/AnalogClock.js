// AnalogClock.js
import React, { useEffect, useRef } from "react";

const AnalogClock = ({ speed }) => {
  const clockRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      clockRef.current.style.transform = `rotate(-${
        hours * 30 + minutes / 2
      }deg)`;
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div
      ref={clockRef}
      className="w-64 h-64 border-4 border-white rounded-full flex items-center justify-center"
    >
      <div className="text-xl">Clock</div>
    </div>
  );
};

export default AnalogClock;
