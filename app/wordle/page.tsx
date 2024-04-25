"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import React from "react";
import UseWordle from "../useWordle";
import { WordleGameover } from "@/components/wordle-gameover";
import ConfettiExplosion from "react-confetti-explosion";
import { Helmet } from "react-helmet";

const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ⬅☑".split("");

export default function Wordle() {
  const {
    handleKeyup,
    handleLetterClick,
    guessStatus,
    letterStatus,
    rows,
    showDialog,
    setShowDialog,
    solution,
    gameResult,
    isExploding,
  } = UseWordle();

  useEffect(() => {
    const handleKeyUpTyped = (event: KeyboardEvent) =>
      handleKeyup(event as unknown as React.KeyboardEvent);

    window.addEventListener("keyup", handleKeyUpTyped);
    return () => window.removeEventListener("keyup", handleKeyUpTyped);
  }, [handleKeyup]);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <Helmet>
        <meta property="og:image" content="./og-wordle.png" />
        <title>Wordle Challenge</title>
      </Helmet>
      <div className="flex flex-col text-center gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block titre text-4xl lg:text-5xl">
            WORDLE CHALLENGE
          </h1>
        </div>
      </div>
      <hr className="m-4 md:mb-8" />
      <div id="board" className="flex items-center flex-col gap-2">
        {rows.map((row, idx) => (
          <div key={idx} className="grid gap-1 md:gap-2 grid-cols-5 w-fit">
            {row.map((letter: string, index: number) => (
              <span
                key={index}
                className={`border border-1 size-10 md:size-16 rounded-lg flex items-center justify-center text-2xl md:text-4xl pb-1 font-semibold ${
                  guessStatus[idx] ? guessStatus[idx][index] : ""
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      <hr className="my-4 md:my-8" />

      <section id="keyboard" className="flex flex-col items-center gap-2">
        <div className="grid gap-2 grid-cols-8  w-fit">
          {Alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`letter ${
                letterStatus[letter] || ""
              } border border-1 rounded-lg h-12 w-8 md:h-16 md:w-12 flex items-center justify-center text-2xl md:text-4xl pb-1 font-semibold hover:border-yellow-600`}
            >
              {letter}
            </button>
          ))}
        </div>
      </section>
      <hr className="my-4 md:my-8" />
      <Button
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full  font-bold my-4 dark:hover:bg-[#FFFCDB]"
        )}
        onClick={() => window.location.reload()}
      >
        Rejouer
      </Button>
      <div>
        <WordleGameover
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          gameResult={gameResult}
          solution={solution}
        />
      </div>
      {isExploding && (
        <div className="absolute top-0 left-1/2 z-[100]">
          <ConfettiExplosion
            force={0.8}
            duration={1500}
            particleCount={300}
            width={1600}
            height={"200vh"}
          />
        </div>
      )}
    </div>
  );
}
