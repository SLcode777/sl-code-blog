import { useState, useEffect } from "react";

const MOTS = [
  "avion",
  "belle",
  "chien",
  "droit",
  "eclat",
  "forme",
  "givre",
  "havre",
  "ideal",
  "jouer",
  "lourd",
  "mains",
  "noyer",
  "ombre",
  "porte",
  "rouge",
  "sable",
  "table",
  "usure",
  "vivre",
  "wagon",
  "zebre",
];

function selectRandomWord(words: string[]): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

interface LetterStatus {
  [key: string]: "correct" | "present" | "incorrect" | undefined;
}

export default function UseWordle() {
  const [rows, setRows] = useState(() =>
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );
  const [solution, setSolution] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessStatus, setGuessStatus] = useState<string[][]>([]);
  const [letterStatus, setLetterStatus] = useState<LetterStatus>({});

  useEffect(() => {
    setSolution(selectRandomWord(MOTS));
  }, []);
  console.log("la solution est:", solution);

  useEffect(() => {
    const newRows = rows.map((row, index) =>
      index === guesses.length
        ? [...currentGuess.padEnd(5, " ").split("")]
        : row
    );
    setRows(newRows);
  }, [currentGuess, guesses.length]);

  const handleKeyup = (event: React.KeyboardEvent) => {
    const { key } = event;
    if (key === "Enter") {
      if (currentGuess.length === 5) {
        console.log("mot secret:", solution, "mot entré:", currentGuess);
        evaluateGuess();
      }
    } else if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else {
      if (currentGuess.length < 5 && /^[a-zA-Z]$/.test(key)) {
        setCurrentGuess(currentGuess + key.toUpperCase());
      }
    }
  };

  function evaluateGuess() {
    const status = new Array(5).fill("incorrect");
    const solutionArray = solution.toUpperCase().split("");
    const guessArray = currentGuess.toUpperCase().split("");
    const newLetterStatus = { ...letterStatus };
    const newRows = rows.slice();

    guessArray.forEach((letter, idx) => {
      if (letter === solutionArray[idx]) {
        status[idx] = "correct";
        newLetterStatus[letter] = "correct";
      } else if (solution.toUpperCase().includes(letter)) {
        status[idx] = "present";
        if (newLetterStatus[letter] !== "correct") {
          newLetterStatus[letter] = "present";
        }
      } else {
        if (!newLetterStatus[letter]) {
          newLetterStatus[letter] = "incorrect";
        }
      }
    });

    newRows[guesses.length] = guessArray;
    setRows(newRows);
    setGuesses([...guesses, currentGuess]);
    setGuessStatus([...guessStatus, status]);
    setLetterStatus(newLetterStatus);
    setCurrentGuess("");

    if (currentGuess.toUpperCase() === solution.toUpperCase()) {
      setTimeout(() => {
        alert("VOUS AVEZ GAGNE !");
      }, 500);
    }
  }

  return {
    solution,
    currentGuess,
    guesses,
    handleKeyup,
    guessStatus,
    letterStatus,
    rows,
  };
}
