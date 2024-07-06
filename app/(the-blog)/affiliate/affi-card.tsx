"use client";

import Image from "next/image";

interface AffiCardProps {
  title: string;
  link: string;
  description: string;
  image: string;
  tag: string;
}

export const AffiCard: React.FC<AffiCardProps> = ({
  title,
  link,
  description,
  image,
  tag,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="border hover:border-yellow-500 hover:cursor-pointer rounded-lg flex flex-col items-centergap-2 gap-2 pt-2 bg-black/30"
      >
        <h1 className="text-xl font-bold text-white text-center">{title}</h1>
        <p className="italic text-sm pl-4 ">{description}</p>
        <Image
          src={image}
          alt="affi-beginjs"
          width={400}
          height={400}
          className=" rounded-b-lg"
        />
        {tag === "gratuit" ? (
          <div className="ml-4 mb-2 text-sm font-bold bg-lime-500 max-w-fit px-2 rounded-md text-black">
            Cours gratuits
          </div>
        ) : (
          <div className="ml-4 mb-2 text-sm font-medium bg-yellow-500 max-w-fit px-2 rounded-md text-black">
            Formation complète
          </div>
        )}
      </div>
    </>
  );
};

export const CodelineCard = () => {
  const link = "https://dub.sh/codeline-slcode";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="hover:cursor-pointer" onClick={handleClick}>
      <h1 className="inline-block titre my-4 text-2xl lg:text-3xl">
        La Plateforme
      </h1>
      <div className="border hover:border-yellow-500 rounded-lg flex flex-col items-centergap-2 gap-2 pt-2 bg-black/30 mb-8">
        <h1 className="text-3xl font-bold text-white text-center">Codeline</h1>
        <p className="italic text-md pl-4 text-center">
          La meilleure plateforme de formation pour les développeurs !
        </p>
        <Image
          src="/img/codeline.png"
          alt="affi-beginjs"
          width={850}
          height={800}
          className="rounded-b-lg"
        />
      </div>
    </div>
  );
};
