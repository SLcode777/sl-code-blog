import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SUB_APY_KEY);

interface contactInfo {
  email: string;
  firstName: string;
  audienceId: string;
  unsubscribed?: boolean;
}

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
      audienceId: "9595ebc2-603c-4cfa-b3f5-db3224fe0cb4",
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout du contacte à Resend", error);
  }
};
