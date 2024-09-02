import { useEffect, useState } from "react";

export const ScoreBoard = () => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("api/snake-get-scores");
        const data = await response.json();
        setScores(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="w-[350px] mt-10 justify-center items-center p-6">
      <h1 className=" text-3xl mb-8 text-center titre">TOP 10 DES SCORES</h1>
      {isLoading ? (
        <div className="flex flex-row w-full items-center justify-center content-center ">
          <span className="loading loading-spinner text-warning "></span>
        </div>
      ) : (
        <div id="scores" className="flex flex-row justify-between  text-xl">
          <ul className="w-full">
            {scores.map((score) => (
              <li key={score.id} className="border-b ">
                {" "}
                {`${score.player} `}{" "}
              </li>
            ))}
          </ul>
          <ul>
            {scores.map((score) => (
              <li key={score.id} className="font-bold text-right border-b ">
                {" "}
                {`${score.score} `}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
