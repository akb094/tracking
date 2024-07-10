// ShareButton.js
import React from "react";

const ShareButton = ({ speed }) => {
  const generateShareUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("speed", speed);
    navigator.clipboard.writeText(url.toString()).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  return (
    <button
      onClick={generateShareUrl}
      className="mb-4 p-2 bg-yellow-500 hover:bg-yellow-600   text-black rounded-xl"
    >
      Share
    </button>
  );
};

export default ShareButton;
