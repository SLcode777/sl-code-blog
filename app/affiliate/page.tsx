import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { AffiCard } from "./affi-card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Affiliation Codeline",
  description:
    "Liens d'affiliation pour les formations et cours gratuits de Melvyn Malherbe",
};

const AffiLinks = [
  {
    title: "BeginJavascript",
    link: "https://dub.sh/beginjsfree-slcode",
    description: "Cours gratuits extraits de la formation BeginJavascript",
    image: "/img/affi-beginjs.webp",
    tag: "gratuit",
  },
  {
    title: "BeginReact",
    link: "https://dub.sh/reactfree-slcode",
    description: "Cours gratuits extraits de la formation BeginReact",
    image: "/img/affi-beginreact.webp",
    tag: "gratuit",
  },
  {
    title: "NextReact",
    link: "https://dub.sh/nextfree-slcode",
    description: "Cours gratuits extraits de la formation NextReact",
    image: "/img/affi-nextreact.webp",
    tag: "gratuit",
  },
  {
    title: "NextAI",
    link: "https://dub.sh/nextaifree-slcode",
    description: "Cours gratuits extraits de la formation NextAI",
    image: "/img/affi-beginjs.webp",
    tag: "gratuit",
  },
  {
    title: "NextTailwind",
    link: "https://dub.sh/tailwind-slcode",
    description: "Cours gratuits extraits de la formation NexTailwind",
    image: "/img/affi-nextailwind.webp",
    tag: "gratuit",
  },
  {
    title: "NowTS",
    link: "https://dub.sh/nowts-slcode",
    description:
      "Boilerplate pour démarrer tes projets avec les services essentiels préconfigurés",
    image: "/img/affi-nowts.webp",
    tag: "formation",
  },
  {
    title: "BeginJavascript",
    link: "https://dub.sh/beginjslp-slcode",
    description: "La formation complète pour maîtriser Javascript",
    image: "/img/affi-beginjs.webp",
    tag: "formation",
  },
  {
    title: "BeginReact",
    link: "https://dub.sh/reactlp-slcode",
    description: "La formation complète pour maîtriser React",
    image: "/img/affi-beginreact.webp",
    tag: "formation",
  },
  {
    title: "NextReact",
    link: "https://dub.sh/nextlp-slcode",
    description: "La formation complète pour maîtriser Next.js",
    image: "/img/affi-nextreact.webp",
    tag: "formation",
  },
  {
    title: "NextAI",
    link: "https://dub.sh/nextailp-slcode",
    description: "La formation complète pour intégrer l'IA dans tes projets",
    image: "/img/affi-beginjs.webp",
    tag: "formation",
  },
  {
    title: "NextTailwind",
    link: "https://dub.sh/tailwind-slcode",
    description:
      "La formation complète pour maîtriser Tailwind et le design web",
    image: "/img/affi-nextailwind.webp",
    tag: "formation",
  },
];

export default async function AffiliatePage() {
  const link = "https://dub.sh/codeline-slcode";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          
          <h1 className="inline-block titre text-4xl lg:text-5xl">
            Liens Cours Gratuits & Formations
          </h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex italic mb-8">
        {" "}
        Si tu hésites à te lancer avec les mêmes formations que moi, Melvyn a
        pas mal de cours gratuits pour te donner un avant goût de ses
        formations. Je t&apos;ai tout regroupé ici ! <br /> <br /> Et si au final ça te
        plaît et que tu prends l&apos;une de ses formations via un des liens
        ci-dessous, cela me permettra d&apos;être récompensée et je t&apos;en
        serai éternellement reconnaissante !! 🤩
      </div>
      <h1 className="inline-block titre my-4 text-2xl lg:text-3xl">
        La Plateforme
      </h1>
      <div className="border rounded-lg flex flex-col items-centergap-2 gap-2 pt-2 bg-black/30 mb-8">
        <h1 className="text-3xl font-bold text-white text-center">Codeline</h1>
        <p className="italic text-md pl-4 text-center">
          La meilleure plateforme de formation pour les développeurs !
        </p>
        <Image
          src="/img/codeline.png"
          alt="affi-beginjs"
          width={850}
          height={800}
          className="hover:cursor-pointer rounded-b-lg"
        />
      </div>

      <h1 className="inline-block titre my-4 text-2xl lg:text-3xl">
        Les Cours Gratuits
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {AffiLinks.filter((link) => link.tag === "gratuit").map((link) => (
          <AffiCard
            key={link.title}
            title={link.title}
            link={link.link}
            description={link.description}
            image={link.image}
            tag={link.tag}
          />
        ))}
      </div>
      <h1 className="inline-block titre my-4 text-2xl lg:text-3xl">
        Les Formations
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {AffiLinks.filter((link) => link.tag === "formation").map((link) => (
          <AffiCard
            key={link.title}
            title={link.title}
            link={link.link}
            description={link.description}
            image={link.image}
            tag={link.tag}
          />
        ))}
      </div>
    </div>
  );
}
