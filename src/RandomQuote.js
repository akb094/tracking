// RandomQuote.js
import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className="mt-4 text-center">{quote}</div>;
};

export default RandomQuote;
