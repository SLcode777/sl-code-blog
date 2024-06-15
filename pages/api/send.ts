import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { error } from "console";
import { addContactToAudience } from "./contacts-resend";

//submitHandler permet de récupérer les données reçues par l'API de resend et déclenche l'envoi du mail et enfin créé le contact dans l'Audience Resend

const resend = new Resend(process.env.RESEND_MAIL_API_KEY); //initialisation de Resend avec la clé API

const submitHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode non autorisée" }); //ici on return si la methode n'est pas POST
  }

  const { firstName, email } = req.body; //ici, on utilise la Destructuration qui va récupèrer les champs de mon formulaire, ou plus précisément du corps de la requête HTTP, et créer les variables firstName et email

  if (!email || !firstName) {
    return res.status(400).json({ message: "Le prénom et l'email son requis" }); //ici oon gère l'erreur si l'un des deux est manquant
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Stella de SL Code <hello@sl-code.dev>", //e-mail de l'expéditeur
      to: [email], //e-mail récupéré dans le form
      subject: "Ton inscription sur mon blog SL Code !",
      text: "ceci est un champ obligatoire", //le corps du message en texte brut
      react: EmailTemplate({ firstName }), //composant react pour le contenu du mail personnalisé avec le prénom provenant du form
    });

    if (error) {
      return res.status(400).json(error);
    }

    //ici on utilise la fonction d'ajout de contact à l'audience resend
    await addContactToAudience({
      email: email,
      firstName: firstName,
      unsubscribed: false,
      audienceId: "9595ebc2-603c-4cfa-b3f5-db3224fe0cb4",
    });

    res.status(200).json(data);
  } catch {
    console.error("Erreur lors de l'envoi de l'email", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export default submitHandler;
