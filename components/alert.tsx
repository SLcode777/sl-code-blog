import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export function AlertMailSent() {
  return (
    <Alert className="mt-4 border-lime-700">
      <AlertTitle className="text-lime-700">Message</AlertTitle>
      <AlertDescription className="italic">
        Ton mail a bien été envoyé !
      </AlertDescription>
    </Alert>
  );
}

export function AlertMailNotSent() {
  return (
    <Alert className="mt-4 border-red-700">
      <AlertTitle className="text-red-700">Message</AlertTitle>
      <AlertDescription className="italic">
        Une erreur s&apos;est produite
      </AlertDescription>
    </Alert>
  );
}
