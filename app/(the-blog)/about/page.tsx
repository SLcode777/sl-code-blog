import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de moi",
  description: "Pourquoi j'ai voulu me reconvertir dans le développement",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block titre text-4xl lg:text-5xl">
            Qui suis-je ?
          </h1>
        </div>
      </div>
      <hr className="my-8 " />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>Stella</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Baby dev
          </p>
        </div>
        <div className="text-muted-foreground text-lg py-4">
          Quand j&apos;avais 14 ans, les professeurs m&apos;ont demandé ce que
          j&apos;aimais dans la vie. Quand j&apos;ai répondu que j&apos;aimais
          par dessus tout l&apos;informatique et les ordinateurs, on m&apos;a
          donc logiquement orienté vers.... le secrétariat ! 😅
          <br /> <br />
          Après une année d&apos;étude, j&apos;ai rapidement bifurqué vers la
          comptabilité, qui me proposait un peu plus de challenge,
          d&apos;énigmes à résoudre, de logique à mettre en action.
          <br /> <br />
          Comptable depuis 20 ans, je n&apos;ai jamais laissé tombé cette
          passion pour l&apos;informatique et les technologies... Jusqu&apos;à
          présent, je pouvais passer des heures à créer des quasi-applications
          sur Excel grâce aux connaissances acquises en autodidacte. A
          configurer des espaces Notion, pour mes besoins personnels, et
          professionnels.
          <br /> <br />
          Et puis, j&apos;ai découvert il y a quelques temps le monde du no-code
          qui m&apos;ouvre de nouvelles portes, celle de la programmation de
          véritables applications, pour mes propres besoins et surtout pour les
          besoins des autres. Je me suis formée sur Bubble mais je me suis vite
          aperçu qu&apos;il m&apos;en fallait plus ! J&apos;ai donc choisi
          d&apos;apprendre Javascript, HTML et CSS dans un premier temps parce
          que je veux voir et maîtriser ce qu&apos;il y a &quot;sous le
          capot&quot; pour devenir développeuse ! Par la suite, je veux
          apprendre React, Next.js et le SQL pour être capable de développer mes
          propres applications web. Le parcours sera beaucoup plus long que si
          j&apos;avais choisi de rester sur des outils no-code, mais je suis
          plus motivée que jamais à percer les secrets de ces langages
          mystérieux qui font ronronner nos applications et sites préférés ^^
          <br /> <br />
          Je prépare avec ardeur et passion mon lancement dans ce nouveau monde
          et je réfléchis, à mes futurs produits, à mon branding, mes
          stratégies, etc... <br />
          <br />
          Je suis persuadée que cette &quot;erreur de parcours&quot; m&apos;a
          apporté de nombreuses qualités qui me permettront de me démarquer dans
          ce domaine : logique, rigueur, résilience, respect des deadlines,
          etc... <br />
          <br />
          J&apos;ai décidé de documenter mon parcours, de ma formation aux
          langages et concepts, à la création de ma première application, en
          passant par tous les questionnements et les choix qui vont se
          présenter à moi sur le chemin de l&apos;entrepreneuriat ! Cela me
          permettra de : <br />
          <br />
          <ul>
            <li>- poser mes objectifs</li>
            <li>- voir mes progrès et donc rester motivée</li>
            <li>- ne pas oublier tout ce que j&apos;ai réalisé</li>
            <li>
              - pouvoir discuter avec des personnes passionnées de dev ou des
              personnes sur un parcours de reconversion vers le dev
            </li>
          </ul>{" "}
          <br />
          <br /> Bref, un nouveau chapitre qui s&apos;ouvre à moi 🤩 <br />
          <br />A suivre 🚀🌟
        </div>
      </div>
    </div>
  );
}
