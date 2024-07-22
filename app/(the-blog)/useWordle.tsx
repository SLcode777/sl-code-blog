import { useState, useEffect, useRef } from "react";
import { WORDS } from "@/lib/words";

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
  const [showDialog, setShowDialog] = useState(false);
  const [gameResult, setGameResult] = useState<string>("");
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const audioRefWin = useRef<HTMLAudioElement | null>(null);
  const audioRefLost = useRef<HTMLAudioElement | null>(null);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    audioRef1.current = new Audio("./keyboard01.wav");
    audioRef2.current = new Audio("./click01.wav");
    audioRefWin.current = new Audio("./validation01.mp3");
    audioRefLost.current = new Audio("./negative-beep.wav");
    setSolution(selectRandomWord(WORDS));
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
      audioRef1.current?.play();
      if (currentGuess.length === 5) {
        evaluateGuess();
      }
    } else if (key === "Backspace") {
      audioRef2.current?.play();
      setCurrentGuess(currentGuess.slice(0, -1));
    } else {
      if (currentGuess.length < 5 && /^[a-zA-Z]$/.test(key)) {
        audioRef1.current?.play();
        setCurrentGuess(currentGuess + key.toUpperCase());
      }
    }
  };

  const handleLetterClick = (letter: string) => {
    if (letter === "⬅") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (letter === "☑") {
      if (currentGuess.length === 5) {
        evaluateGuess();
      }
    } else {
      if (currentGuess.length < 5 && /^[a-zA-Z]$/.test(letter)) {
        setCurrentGuess(currentGuess + letter);
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
        setGameResult("win");
        audioRefWin.current?.play();
        setShowDialog(true);
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 2000);
      }, 500);
    } else if (guesses.length === 5) {
      setTimeout(() => {
        setGameResult("lost");
        audioRefLost.current?.play();
        setShowDialog(true);
      });
    }
  }

  return {
    solution,
    currentGuess,
    guesses,
    handleKeyup,
    handleLetterClick,
    guessStatus,
    letterStatus,
    rows,
    showDialog,
    setShowDialog,
    gameResult,
    isExploding,
    setIsExploding,
  };
}
