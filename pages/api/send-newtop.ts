import { EmailTemplateTopScore } from "@/components/email-new-top-score";
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

//submitHandler permet de récupérer les données reçues par l'API de resend et déclenche l'envoi du mail 

const resend = new Resend(process.env.RESEND_MAIL_API_KEY); //initialisation de Resend avec la clé API

const submitHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode non autorisée" }); //ici on return si la methode n'est pas POST
  }

  const {
    playerName,
    punchline,
    xAccount,
    linkedinAccount,
    githubAccount,
    siteOne,
    siteTwo,
  } = req.body; //ici, on utilise la Destructuration qui va récupèrer les champs de mon formulaire, ou plus précisément du corps de la requête HTTP



  try {
    const { data, error } = await resend.emails.send({
      from: "Stella de SL Code <hello@sl-code.dev>",
      to: ["sl.code.777@gmail.com"],
      subject: "Un nouveau joueur a battu le record du Snake Game!",
      text: "ceci est un champ obligatoire", //le corps du message en texte brut
      react: EmailTemplateTopScore({ playerName, punchline, xAccount, linkedinAccount, githubAccount, siteOne, siteTwo }), //composant react pour le contenu du mail personnalisé 
    });

    if (error) {
      return res.status(400).json(error);
    }


    res.status(200).json(data);
  } catch {
    console.error("Erreur lors de l'envoi de l'email", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export default submitHandler;
