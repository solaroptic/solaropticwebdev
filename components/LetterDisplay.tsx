"use client";
import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import { abc, def, ghi, jkl, mno } from "../utils/letters"; // Import the letters array

const LetterDisplay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutDuration, setTimeoutDuration] = useState(100);
  const specialIndices = [8, 18, 28, 38, 48, 58, 68, 78];

  useEffect(() => {
    const isSpecialIndex = specialIndices.includes(currentIndex);
    const newDuration = !isSpecialIndex ? 100 : 1000;
    setTimeoutDuration(newDuration);

    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % abc.length);
    }, timeoutDuration);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, abc.length]);

  return (
    <div>
      {abc[currentIndex] && (
        <span className="digits flex items-center justify-center ">
          <Letter key={abc[currentIndex] + 1} letter={abc[currentIndex]} />
          <Letter key={def[currentIndex] + 100} letter={def[currentIndex]} />
          <Letter key={ghi[currentIndex] + 1000} letter={ghi[currentIndex]} />
          <Letter key={jkl[currentIndex] + 5000} letter={jkl[currentIndex]} />
          <Letter key={mno[currentIndex] + 7000} letter={mno[currentIndex]} />
        </span>
      )}
    </div>
  );
};

export default LetterDisplay;
