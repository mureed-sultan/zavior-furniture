"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="progress-wrap fixed bottom-5 right-5 z-50">
      <svg className="progress-circle" width="60" height="60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="gray" strokeWidth="5" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="5"
          fill="none"
          strokeDasharray="283"
          strokeDashoffset={`${283 - (scrollProgress / 100) * 283}`}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
