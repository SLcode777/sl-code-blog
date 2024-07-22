import UseWordle from "@/app/(the-blog)/useWordle";
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

interface WordleRulesProps {
  showRules: boolean;
  setShowRules: (show: boolean) => void;
}

export function WordleRules({ showRules, setShowRules }: WordleRulesProps) {
  {
    console.log(showRules);
  }

  return (
    <>
      {showRules && (
        <AlertDialog>
          <AlertDialogTrigger></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-4">
                {" "}
                {"COMMENT JOUER ?"}
              </AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setShowRules(false)}>
                Fermer
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => setShowRules(false)}>
                Rejouer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
