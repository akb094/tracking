// Slider.js
import React from "react";

const Slider = ({ value, onChange }) => {
  return (
    <div className="mt-4">
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-yellow-500 text-yellow-500 accent-yellow-500 slider"
      />
    </div>
  );
};

export default Slider;
