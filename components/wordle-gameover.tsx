import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";

interface WordleGameoverProps {
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
  gameResult: string;
  solution: string;
  isExploding: boolean;
  setIsExploding: (isExploding: boolean) => void;
}

export function WordleGameover({
  showDialog,
  setShowDialog,
  gameResult,
  solution,
  isExploding,
}: WordleGameoverProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showDialog && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [showDialog]);

  return (
    <>
      {showDialog && (
        <AlertDialog>
          <AlertDialogTrigger ref={triggerRef}></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-4">
                {" "}
                {gameResult === "win"
                  ? "🎉 VOUS AVEZ GAGNE !"
                  : "💥 VOUS AVEZ PERDU !"}
              </AlertDialogTitle>
              <AlertDialogDescription>
                Le mot secret est : {solution.toUpperCase()} !
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setShowDialog(false)}>
                Fermer
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => window.location.reload()}>
                Rejouer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {isExploding === true && showDialog && (
        <ConfettiExplosion
          force={0.8}
          duration={1500}
          particleCount={300}
          width={1600}
          height={"200vh"}
        />
      )}
    </>
  );
}
