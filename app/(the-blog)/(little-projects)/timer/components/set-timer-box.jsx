"use client";

import React from 'react'

export function SetTimerBox({ value, min, max, tag, onChange }) {
  const handleFocus = (event) => {
    event.target.select();
  };

  const leadingZero = (num) => num.toString().padStart(2, "0");

  const handleInputChange = (e) => {
    let inputValue = parseInt(e.target.value, 10);
    if (tag === "min" || tag === "sec") {
      if (inputValue > 59) {
        inputValue = 59;
      }
    } else if (tag === "hrs") {
      if (inputValue > 23) {
        inputValue = 23;
      }
    }
    onChange(inputValue);
  };

  return (
    <>
      <div className="flex flex-col bg-stone-900 rounded-md p-2 items-center ">
        <input
          placeholder="00"
          value={leadingZero(value)}
          onChange={(e) => handleInputChange(e)}
          onFocus={handleFocus}
          type="number"
          min={min}
          max={max}
          id={tag}
          className="selection:bg-stone-700 rounded focus:ring-1 max-w-14 bg-transparent text-center text-4xl text-stone-400 font-mono placeholder:text-stone-400"
        ></input>
        <div className="text-yellow-500">{tag}</div>
      </div>
    </>
  );
}
