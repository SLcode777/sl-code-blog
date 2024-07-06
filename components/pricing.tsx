import { cn } from "@/lib/utils";
import { CircleCheck, Link } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

export const Pricing = () => {
  return (
    <>
      <h1 className="inline-block titre text-4xl lg:text-5xl">
        Creation de sites web sur mesure
      </h1>
      <hr className="mt-4 mb-8" />
      <div className="flex text-start gap-3 mb-6 italic">
        Je créé sur mesure votre site web moderne et accessible.
      </div>
      <div className="flex flex-row w-full h-max gap-2 max-w-4xl">
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/40  border border-3 border-gray-400/40  rounded-xl  pb-10 h-[95%]">
          <div className="bg-yellow-500/30 text-black font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            MINIMALISTE
          </div>
          <Image
            src={"/img/3d-palette.png"}
            width={100}
            height={100}
            alt="logo at"
          ></Image>
          <div className="font-semibold text-lg mt-4">DESIGN</div>
          <div className="font-light text-stone-700 text-md mt-2 px-8 text-center">
            Proposition de maquette
          </div>
          <div className="text-4xl font-bold mb-4">350€ à 600€</div>
          <div className="font-light text-stone-700 text-md mt-2 px-8 text-center">
            Si vous n&apos;avez pas de maquette, je vous propose de plannifier
            avec vous votre futur site internet.
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/40  border border-3 border-gray-400/40  rounded-xl pb-10">
          <div className="bg-yellow-500/60 text-black font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            LE + POPULAIRE
          </div>
          <Image
            src={"/img/3d-at.png"}
            width={100}
            height={100}
            alt="logo at"
          ></Image>
          <div className="font-semibold text-lg mt-4">SITE VITRINE</div>
          <div className="font-light text-stone-700 text-md mt-2 text-center">
            Pour les commerces locaux <br />
            et les indépendants
          </div>
          <div className="text-4xl font-bold mb-4">350€</div>
          <div className="flex flex-col self-start gap-3">
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">Site 1 page</div>
            </div>
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">Moderne</div>
            </div>
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">Responsive</div>
            </div>

            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">Accessible</div>
            </div>
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">Optimisé</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/40  border border-3 border-gray-400/40  rounded-xl  pb-10">
          <div className="bg-stone-500/60 text-black font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            ALL INCLUSIVE
          </div>
          <Image
            src={"/img/3d-copy.png"}
            width={100}
            height={100}
            alt="logo at"
          ></Image>
          <div className="font-semibold text-lg mt-4">
            PAGES SUPPLEMENTAIRES
          </div>
          <div className="font-light text-stone-700 text-md mt-2">
            de 2 à 5 pages
          </div>
          <div className="text-4xl font-bold mb-4">100€ / page</div>
          <div className="font-light text-stone-700 text-md mt-2">
            Sur devis à partir de 6 pages
          </div>
        </div>
      </div>
      <Link
        href=""
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full sm:w-fit font-bold my-4 dark:hover:bg-[#FFFCDB]]"
        )}
      >
        Contact
      </Link>
    </>
  );
};
