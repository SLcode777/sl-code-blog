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
import { toast, Toaster } from "sonner";

import { useEffect, useRef, useState } from "react";

export const NewTopOneDialog = ({ isNewTopOne, currentPlayer }) => {
  // Etats pour chaque champ du formulaire
  const [punchline, setPunchline] = useState("");
  const [xAccount, setXAccount] = useState("");
  const [linkedinAccount, setLinkedinAccount] = useState("");
  const [githubAccount, setGithubAccount] = useState("");
  const [siteOne, setSiteOne] = useState("");
  const [siteTwo, setSiteTwo] = useState("");
  const triggerRef = useRef(null);

  //here I simulate a click on an invisible button to show the GameoverDialog because I couldn't find a way to simply display it automatically when isNewTopOne is set to (true)...
  useEffect(() => {
    if (isNewTopOne && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [isNewTopOne]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("api/send-newtop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerName: currentPlayer,
          punchline,
          xAccount,
          linkedinAccount,
          githubAccount,
          siteOne,
          siteTwo,
          score,
        }),
      });

      if (!response.ok) {
        toast.error("une erreur s'est produite lors de l'envoi des données !");
        throw new Error("Networ response was not ok");
      }

      toast.success("Les données ont bien été envoyées");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      toast.error("une erreur s'est produite");
    }
  };

  return (
    <>
      {isNewTopOne && (
        <AlertDialog>
          <Toaster position="bottom-center" richColors />

          <AlertDialogTrigger ref={triggerRef}></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>TU ES LE NOUVEAU LEADER ! 😎</AlertDialogTitle>
              <AlertDialogDescription className="text-md">
                <p>
                  Tu es le nouveau champion ! Tu peux partager tes réseaux pour
                  que tout le monde puisse savoir qui tu es ! ^^
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex flex-col gap-1">
              <label htmlFor="playerName" className="px-2 text-sm italic ">
                Ton nom
              </label>
              <input
                id="playerName"
                type="text"
                value={currentPlayer}
                readOnly
                className="px-2 py-1 rounded-md "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="punchline" className="px-2 text-sm italic">
                Punchline
              </label>
              <input
                id="punchline"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setPunchline(e.target.value)}
                value={punchline}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="xAccount" className="px-2 text-sm italic">
                URL de ton compte X (optionnel)
              </label>
              <input
                id="xAccount"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setXAccount(e.target.value)}
                value={xAccount}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="linkedinAccount" className="px-2 text-sm italic">
                URL de ton compte LinkedIn (optionnel)
              </label>
              <input
                id="linkedinAccount"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setLinkedinAccount(e.target.value)}
                value={linkedinAccount}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="githubAccount" className="px-2 text-sm italic">
                URL de ton compte GitHub (optionnel)
              </label>
              <input
                id="githubAccount"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setGithubAccount(e.target.value)}
                value={githubAccount}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="siteOne" className="px-2 text-sm italic">
                URL de ton site 1 (optionnel)
              </label>
              <input
                id="siteOne"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setSiteOne(e.target.value)}
                value={siteOne}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="siteTwo" className="px-2 text-sm italic">
                URL de ton site 2 (optionnel)
              </label>
              <input
                id="siteTwo"
                type="text"
                className="px-2 py-1 rounded-md"
                maxLength={50}
                onChange={(e) => setSiteTwo(e.target.value)}
                value={siteTwo}
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogAction className="w-full" onClick={handleSubmit}>
                Envoyer mes infos
              </AlertDialogAction>
            </AlertDialogFooter>
            <div className="text-sm italic">
              (*) les informations seront validées avant d&apos;apparaître en
              live
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
