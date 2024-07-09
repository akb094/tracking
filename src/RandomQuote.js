// RandomQuote.js
import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border.tsx";

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

  return (
    <>
      <div className=" text-center h-44px">
        <Button
          borderRadius="1.75rem"
          className="bg-black dark:bg-slate-900 text-yellow-500 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <div>{quote}</div>
        </Button>
      </div>
    </>
  );
};

export default RandomQuote;
