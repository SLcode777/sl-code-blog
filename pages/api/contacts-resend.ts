import { Resend } from "resend";

//initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_MAIL_API_KEY);

//définition des types TypeScript de l'objet contactInfo
interface contactInfo {
  email: string;
  firstName: string;
  audienceId: string;
  unsubscribed?: boolean;
}

//fonction qui va ajouter un contact à l'audience (la liste de contact dans Resend)
//elle prend en paramètre l'objet contactInfo définit ci-dessus
export const addContactToAudience = async ({
  email,
  firstName,
  audienceId,
  unsubscribed,
}: contactInfo) => {
  try {
    await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
      audienceId: "9595ebc2-603c-4cfa-b3f5-db3224fe0cb4", //Ici j'ai "hardcodé" l'id de l'Audience Resend parce que j'en ai qu'une seule mais on aurait pu la définir en variable
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout du contact à Resend", error);
  }
};
