import React, { useEffect, useState } from "react";

export const Timer = ({ isPlaying }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    const startTime = Date.now() - elapsedTime;

    if (isPlaying) {
      interval = setInterval(() => {
        const timeElapsed = Date.now() - startTime;
        setElapsedTime(timeElapsed);
        setMinutes(Math.floor((timeElapsed / 1000 / 60) % 60));
        setSeconds(Math.floor((timeElapsed / 1000) % 60));
      }, 1000);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, elapsedTime]);

  return (
    <div id="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};
