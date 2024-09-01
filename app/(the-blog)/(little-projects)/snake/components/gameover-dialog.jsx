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
import { useEffect, useRef } from "react";

export const GameoverDialog = ({ isLost, score }) => {
  const triggerRef = useRef(null);

  const inputRef = useRef(null);

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
    const playerName = () => {
      if (inputRef.current.value === "") {
        return "ANONYME";
      } else {
        return inputRef.current.value.toUpperCase();
      }
    };
    const data = { player: playerName(), score: score };

    console.log(data);

    addScoreToDatabase(data);

    // window.location.reload();
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
                t&apos;inscrire sur le tableau des scores ! <br /> (le tableau
                des scores arrive bientôt)
                <input
                  ref={inputRef}
                  className="mt-4 px-2 w-full"
                  placeholder="Ton meilleur pseudo"
                ></input>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className="w-full"
                onClick={() => {
                  handleClick();
                }}
              >
                Envoyer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export const entry = () => {
  handleClick();
};
