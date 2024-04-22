"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect } from "react";
import React from "react";
import UseWordle from "../useWordle";

const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Wordle() {
  const {
    currentGuess,
    handleKeyup,
    guessStatus,
    guesses,
    letterStatus,
    rows,
  } = UseWordle();

  useEffect(() => {
    const handleKeyUpTyped = (event: KeyboardEvent) =>
      handleKeyup(event as unknown as React.KeyboardEvent);

    window.addEventListener("keyup", handleKeyUpTyped);
    return () => window.removeEventListener("keyup", handleKeyUpTyped);
  }, [handleKeyup]);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block titre text-4xl lg:text-5xl">
            WORDLE CHALLENGE
          </h1>
        </div>
      </div>
      <hr className="mt-4 mb-8" />
      <div id="board" className="flex flex-col gap-2">
        {rows.map((row, idx) => (
          <div key={idx} className="grid gap-2 grid-cols-5 w-fit">
            {row.map((letter: string, index: number) => (
              <span
                key={index}
                className={`border border-1 w-16 h-16 rounded-lg flex items-center justify-center text-4xl pb-1 font-semibold ${
                  guessStatus[idx] ? guessStatus[idx][index] : ""
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      <hr className="mt-4 mb-8" />

      <section className="flex flex-col gap-2">
        <div className="grid gap-2 grid-cols-8  w-fit">
          {Alphabet.map((letter) => (
            <span
              key={letter}
              className={`letter ${
                letterStatus[letter] || ""
              } border border-1 rounded-lg w-16 h-16 flex items-center justify-center text-4xl pb-1 font-semibold`}
            >
              {letter}
            </span>
          ))}
        </div>
      </section>
      <hr className="mt-4 mb-8" />
      <Button
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full sm:w-fit font-bold my-4 dark:hover:bg-[#FFFCDB]"
        )}
        onClick={() => window.location.reload()}
      >
        Rejouer
      </Button>
    </div>
  );
}
