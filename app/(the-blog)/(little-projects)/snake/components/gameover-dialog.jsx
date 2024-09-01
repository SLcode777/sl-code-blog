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

  useEffect(() => {
    if (isLost && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [isLost]);

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
                t&apos;inscrire sur le tableau des scores ! <br /> (le tableau des scores arrive bientôt)
                <input
                  className="mt-4 px-2 w-full"
                  placeholder="Ton meilleur pseudo"
                ></input>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className="w-full"
                onClick={() => window.location.reload()}
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
