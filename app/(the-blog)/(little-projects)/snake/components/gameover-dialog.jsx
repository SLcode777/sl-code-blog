import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useEffect, useRef, useState } from "react";

export const GameoverDialog = ({ isLost, score, checkIfNewTopScore, onPlayerNameSubmit }) => {
  const triggerRef = useRef(null);
  
  const inputRef = useRef(null);
  
  const [currentTopScore, setCurrentTopScore] = useState(0);
  const [isNewTopOne, setIsNewTopOne] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");
  
  //here I simulate a click on an invisible button to show the GameoverDialog because I couldn't find a way to simply display it automatically when isLost is set to (true)...
  useEffect(() => {
    if (isLost && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [isLost]);

  const addScoreToDatabase = async (donnees) => {
    try {
      const response = await fetch("api/snake-add-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donnees),
      });

      const data = await response.json();
      console.log("score ajouté:", data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  function handleClick() {
    const playerName = () =>
      inputRef.current.value === "" ? "ANONYME" : inputRef.current.value;

    onPlayerNameSubmit(playerName)

    const data = { player: playerName(), score: score };

    addScoreToDatabase(data);

    checkIfNewTopScore(score);

    if (score <= currentTopScore) {
      window.location.reload();
    }
  }


  return (
    <>
      {isLost && (
        <AlertDialog>
          <AlertDialogTrigger ref={triggerRef}></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>💥 GAME OVER 💥</AlertDialogTitle>
              <AlertDialogDescription className="text-md leading-10 ">
                Ton score est : <b>{score}</b> <br /> Entre ton pseudo pour
                t&apos;inscrire sur le tableau des scores !
                <input
                  ref={inputRef}
                  className="mt-4 px-2 w-full"
                  placeholder="Ton meilleur pseudo"
                  maxLength={20}
                ></input>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div className="flex flex-col w-full gap-4">
                <AlertDialogAction
                  className="w-full"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Envoyer
                </AlertDialogAction>
                <AlertDialogAction
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent text-accent-foreground"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Non, je veux juste refaire une partie
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

