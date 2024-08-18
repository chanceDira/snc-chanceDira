"use client";
import React, { useState, useEffect } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-black font-light italic">
      {currentTime
        ? `Current Time: ${formatDate(currentTime)}`
        : "Loading time..."}
    </div>
  );
};

export default CurrentTime;
