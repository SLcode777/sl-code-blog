import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { error } from "console";

//submitHandler permet de récupérer les données reçues par l'API de resend et déclenche l'envoi du mail

const resend = new Resend(process.env.RESEND_API_KEY); //va récupérer la clé API

const submitHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode non autorisée" });
  }

  const { firstName, email } = req.body; //récupère les champs de mon formulaire

  if (!email || !firstName) {
    return res.status(400).json({ message: "Le prénom et l'email son requis" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Lucy <contact@paper-street.fr>", //e-mail de l'expéditeur
      to: [email], //e-mail récupéré dans le form
      subject: "Ton inscription sur mon blog SL Code !",
      text: "ceci est un champ obligatoire", //je sais pas trop à quoi il sert celui-là 😅
      react: EmailTemplate({ firstName }), //prénom récupéré dans le form
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
