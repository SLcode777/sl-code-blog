import { useEffect, useState } from "react";

export const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTime = Date.now();

  const elapsedTime = (startTime) => {
    const time = Date.now() - startTime;

    return time;
  };

  setMinutes(Math.floor((elapsedTime(startTime) / 1000 / 60) % 60));
  setSeconds(Math.floor((elapsedTime() / 1000) % 60));

  useEffect(() => {
    const interval = setInterval(() => elapsedTime(startTime), 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div id="timer">
      {minutes}:{seconds}{" "}
    </div>
  );
};
