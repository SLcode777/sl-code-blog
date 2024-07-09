import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesCards() {
  return (
    <div className=" px-8 z-10 select-none ">
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
    icon: "/img/icon-browser.svg",
  },
  {
    title: "Design Web",
    description:
      "Si vous n'avez pas de maquette, nous pouvons créer le design de votre site web pour vous.",
    link: "",
    icon: "/img/icon-design.svg",
  },
  {
    title: "Gestion de l'hébergement",
    description:
      "Paramétrage et gestion de l'hébergement et du nom de domaine.",
    link: "",
    icon: "/img/icon-globe.svg",
  },
  {
    title: "Maintenance",
    description:
      "Maintenance mensuelle qui inclut les mises à jour et les modifications de contenu.",
    link: "",
    icon: "/img/icon-tools.svg",
  },
  {
    title: "Adresses email",
    description: "Paramétrage de vos adresses mails personnalisées.",
    link: "",
    icon: "/img/icon-email.svg",
  },
];
