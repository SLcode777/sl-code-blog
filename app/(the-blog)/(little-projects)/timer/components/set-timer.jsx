"use client";

import React from 'react'


import useTimersStore from "../utils/timers-store.js";
import { SetTimerBox } from "./set-timer-box.jsx";

export function SetTimer() {
  const { duration, setHours, setMinutes, setSeconds } = useTimersStore();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 ">
          <SetTimerBox
            min="00"
            max="23"
            tag="hrs"
            value={duration.hours}
            onChange={(value) => setHours(Number(value))}
          />

          <div className="flex flex-row items-center">
            <p className="text-stone-400">:</p>
          </div>
          <SetTimerBox
            min="00"
            max="60"
            tag="min"
            value={duration.minutes}
            onChange={(value) => setMinutes(Number(value))}
          />

          <div className="flex flex-row items-center">
            <p className="text-stone-400">:</p>
          </div>
          <SetTimerBox
            min="00"
            max="60"
            tag="sec"
            value={duration.seconds}
            onChange={(value) => setSeconds(Number(value))}
          />
        </div>
      </div>
    </>
  );
}
