import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesCards() {
  return (
    <div className=" px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Développement Web",
    description:
      "Création d'un site moderne, accessible, compatible mobile et optimisé.",
    link: "",
  },
  {
    title: "Design Web",
    description:
      "Si vous n'avez pas de maquette, nous pouvons créer le design de votre site web pour vous.",
    link: "",
  },
  {
    title: "Gestion de l'hébergement",
    description:
      "Paramétrage et gestion de l'hébergement et du nom de domaine.",
    link: "",
  },
  {
    title: "Maintenance",
    description:
      "Maintenance mensuelle qui inclut les mises à jour et les modifications de contenu.",
    link: "",
  },
  {
    title: "Adresses email",
    description: "Paramétrage de vos adresses mails personnalisées.",
    link: "",
  },
];
