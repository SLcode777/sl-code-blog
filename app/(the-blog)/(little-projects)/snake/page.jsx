"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { GameoverDialog } from "./components/gameover-dialog.jsx";
import { NewTopOneDialog } from "./components/newtop-dialog.jsx";
import { ScoreBoard } from "./components/score-board.jsx";
import { Timer } from "./components/timer.jsx";
import { Top1Display } from "./components/top-1-display.jsx";

export default function Snake() {
  const GRID_SIZE = 20;
  const CELL_SIZE = 20;

  const INITIAL_DIRECTION = { x: 1, y: 0 };
  const INITIAL_FOOD = { x: 15, y: 15 };

  const INITIAL_SNAKE = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
  ];

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [nextDir, setNextDir] = useState(INITIAL_DIRECTION);
  const [hasMoved, setHasMoved] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [isNewTopOne, setIsNewTopOne] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");

  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(10);
  const [speed, setSpeed] = useState(300);
  const [currentTopScore, setCurrentTopScore] = useState(0);

  //calculate new head position
  const calculateNewHead = (snake, direction) => {
    let newHeadX = snake[0].x + direction.x;
    let newHeadY = snake[0].y + direction.y;

    const newHead = { x: newHeadX, y: newHeadY };

    return newHead;
  };

  //check collision with new head position
  const checkCollision = (head, snake) => {
    //collision with a wall
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      return true;
    }

    //collision with itself
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  };

  //check collision with a fruit
  const checkFood = (head, food) => {
    if (head.x === food.x && head.y === food.y) {
      audioRefBeep.current.play();

      return true;
    }
  };

  //calculate new food position
  const calculateNewFood = (min, max) => {
    const newFood = { x: 0, y: 0 };

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    newFood.x = Math.floor(
      Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    );
    newFood.y = Math.floor(
      Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    );

    return newFood;
  };

  //check overlaping newFood and set newFood
  const setNewFood = () => {
    let newFood = calculateNewFood(0, 19);

    const checkOverlap = snake.some(
      (cell) => cell.x === newFood.x && cell.y === newFood.y
    );

    if (!checkOverlap) {
      setFood(newFood);
    } else {
      setNewFood();
    }
  };

  //MAIN FUNCTION HANDLING SNAKE MOVES AND ALL EVENTS (COLLISIONS/FRUITS)
  const moveSnake = useCallback(() => {
    setDirection(nextDir);

    //calculate new head position
    const newHead = calculateNewHead(snake, nextDir);

    //check collision with wall or self
    if (checkCollision(newHead, snake)) {
      setIsPlaying(false);
      setIsLost(true);
      audioRefGameover.current.play();
      console.log("GAME OVER !");
      return;
    }

    //add new head to a copy of snake
    const newSnake = [...snake];
    newSnake.unshift(newHead);

    //check if snake eats fruit. If yes, update snake without removing tail, else remove tail.
    if (!checkFood(newHead, food)) {
      newSnake.pop();
    } else if (checkFood(newHead, food)) {
      setNewFood();
      setScore((prevScore) => prevScore + points);
    }

    //update snake
    setSnake([...newSnake]);
    setHasMoved(true);
  }, [snake, nextDir, food, score, points]); //do not add setNewFood as a dependency

  //handle snake moving at regular intervals
  useEffect(() => {
    if (!isPlaying) return;

    const gameInterval = setInterval(moveSnake, speed);

    return () => {
      clearInterval(gameInterval);
    };
  }, [moveSnake, isPlaying, speed]);

  //handle key press to change snake direction
  useEffect(() => {
    if (!hasMoved) return;

    let currentDir = direction;
    let newDir = direction;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (currentDir.x !== 0 && currentDir.y !== 1) {
            newDir = { x: 0, y: -1 };
          }
          break;
        case "ArrowDown":
          if (currentDir.x !== 0 && currentDir.y !== -1) {
            newDir = { x: 0, y: 1 };
          }
          break;
        case "ArrowLeft":
          if (currentDir.x !== 1 && currentDir.y !== 0) {
            newDir = { x: -1, y: 0 };
          }
          break;
        case "ArrowRight":
          if (currentDir.x !== -1 && currentDir.y !== 0) {
            newDir = { x: 1, y: 0 };
          }
          break;
      }
      setNextDir(newDir);
      setHasMoved(false);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [direction, hasMoved]);

  //handle speed increase
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        if (speed > 75) {
          setSpeed((prevSpeed) => prevSpeed - 25);
          setPoints((prevPoints) => prevPoints + 10);
        }
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [speed, isPlaying]);

  //prevent window scroll
  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPlaying]);

  //sound effects
  const audioRefBeep = useRef(null);
  const audioRefGameover = useRef(null);

  //fetch current top score
  useEffect(() => {
    const fetchTopOneScore = async () => {
      try {
        const response = await fetch("api/snake-get-top1");

        const data = await response.json();

        const { score } = data[0];
        setCurrentTopScore(score);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchTopOneScore();
  }, [currentTopScore]);

  //compare new score to current top score
  const checkIfNewTopScore = (playerScore) => {
    if (playerScore > currentTopScore) {
      setIsNewTopOne(true);
    } else {
      setIsNewTopOne(false);
    }
  };

  //stocker le nom du joueur
  const handlePlayerName = (name) => {
    setCurrentPlayer(name);
  };

  return (
    <>
      <div className="container max-w-4xl py-6 lg:py-10">
        <Helmet>
          <meta property="og:image" content="./og-wordle.png" />
          <title>Snake</title>
        </Helmet>
        <audio ref={audioRefBeep} src="/beep.mp3" preload="auto"></audio>
        <audio
          ref={audioRefGameover}
          src="/nokia-3310-ringtone.mp3"
          preload="auto"
        ></audio>

        <div className="flex flex-col text-center gap-4 md:flex-row md:justify-between md:gap-8 h-[100%]">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block titre text-4xl lg:text-5xl">
              THE SNAKE GAME
            </h1>
          </div>
        </div>
        <hr className="m-4 md:mb-8" />
      </div>
      <div id="global-container" className="flex flex-col lg:flex-row">
        <div id="left-container" className="w-full"></div>
        <div id="center-container" className="flex flex-col">
          <div
            id="stats-container"
            className="flex flex-row justify-center gap-4 pb-4 text-xl font-bold w-[400px] self-center "
          >
            <div className="w-[400px] flex flex-row justify-between ">
              <Timer isPlaying={isPlaying} />
              <div>Score : {score}</div>
            </div>
          </div>

          <div className="snake-container ">
            <div className="game-board">
              <div
                className="snake-head z-10"
                style={{
                  left: `${snake[0].x * CELL_SIZE}px`,
                  top: `${snake[0].y * CELL_SIZE}px`,
                }}
              >
                {snake.filter((index) => (snake[index] = 0))}{" "}
              </div>
              {snake.map((segment, index) => (
                <div
                  key={index}
                  className="snake-segment"
                  style={{
                    left: `${segment.x * CELL_SIZE}px`,
                    top: `${segment.y * CELL_SIZE}px`,
                  }}
                />
              ))}
              <div
                className="food"
                style={{
                  left: `${food.x * CELL_SIZE}px`,
                  top: `${food.y * CELL_SIZE}px`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4 pt-4 ">
            <div className="w-[400px] flex flex-row justify-between">
              {isPlaying ? (
                <button
                  className="rounded bg-orange-300 px-2  text-black"
                  onClick={() => setIsPlaying(false)}
                >
                  Pause Game
                </button>
              ) : (
                <button
                  className=" rounded bg-lime-400 px-2 text-black font-medium"
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  Start Game
                </button>
              )}
            </div>
          </div>
          

          <GameoverDialog
            isLost={isLost}
            score={score}
            checkIfNewTopScore={checkIfNewTopScore}
            onPlayerNameSubmit={handlePlayerName}
          />
          <NewTopOneDialog
            isNewTopOne={isNewTopOne}
            currentPlayer={currentPlayer}
          />

          <div className="flex flex-col items-center ">
            <ScoreBoard />
          </div>
        </div>
        <Top1Display />
      </div>
    </>
  );
}
