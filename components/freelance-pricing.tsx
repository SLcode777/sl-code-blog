import { CircleCheck } from "lucide-react";
import Image from "next/image";

export const Pricing = () => {
  return (
    <>
      <div className="flex flex-row w-full h-max  max-w-4xl items-center gap-1">
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/90  border border-3 border-stone-200  rounded-xl  pb-10 hover:-translate-y-3 hover:translate-z-50 hover:shadow-stone-600/75 hover:shadow-xl ">
          <div className="bg-stone-200 text-black font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            MINIMALISTE
          </div>
          <Image
            src={"/img/icon-dev.svg"}
            width={75}
            height={75}
            alt="logo balise"
          ></Image>
          <div className="font-semibold text-lg mt-4">SITE 1 PAGE</div>
          <div className="font-light text-stone-700 text-md px-8 text-center"></div>
          <div className="text-4xl font-bold mb-2">350€</div>
          <div className="font-light text-stone-700 text-md mb-2 px-8 text-center text-balance">
            Vous fournissez la maquette <br />
            Je développe la page web :)
          </div>
          <div className="flex flex-col self-start gap-3">
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">1 page</div>
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
          <div className="px-6 w-full mt-2">
            <button className="bg-stone-200 px-4 py-2 font-medium rounded-full w-full">
              Demander un devis
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/90   rounded-xl pb-10 h-full z-10 hover:shadow-stone-600/75 shadow-xl hover:-translate-y-3">
          <div className="bg-stone-900 text-white font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            LE + POPULAIRE
          </div>
          <Image
            src={"/img/icon-star.svg"}
            width={75}
            height={75}
            alt="logo star"
          ></Image>
          <div className="font-semibold text-lg mt-4">SITE 2 A 5 PAGES</div>
          <div className="font-light text-stone-700 text-md mt-2 text-center"></div>
          <div className="text-4xl font-bold mb-4">450€ à 750€</div>
          <div className="font-light text-stone-700 text-md mb-4 px-8 text-center text-balance">
            Vous fournissez la maquette <br />
            Je développe le site web :)
          </div>
          <div className="flex flex-col self-start gap-3 mb-4">
            <div className="ml-10  flex flex-row gap-2 ">
              <CircleCheck />
              <div className="font-semibold">2 à 5 pages</div>
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
          <div className="px-6 w-full">
            <button className="bg-stone-900 text-white font-medium px-4 py-2 rounded-full w-full">
              Demander un devis
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3  items-center bg-white/90  border border-3 border-stone-200  rounded-xl  pb-10 h-[660px] hover:-translate-y-3 hover:translate-z-50 hover:shadow-stone-600/75 hover:shadow-xl">
          <div className="bg-yellow-500/60 text-black font-semibold  rounded-t-xl tracking-wider py-0.5 w-full text-center mb-10">
            ALL INCLUSIVE
          </div>
          <Image
            src={"/img/icon-stack.svg"}
            width={75}
            height={75}
            alt="logo stack"
          ></Image>
          <div className="font-semibold text-lg mt-4">SITE + DESIGN</div>
          <div className="font-light text-stone-700 text-md mt-2"></div>
          <div className="flex flex-row gap-3 items-center">
            <div className="text-3xl font-semibold mb-4">à partir de</div>

            <div className="text-4xl font-bold mb-4">700€</div>
          </div>
          <div className="font-light text-stone-700 text-md mt-2 text-center text-balance px-2">
            Sur devis en fonction du nombre de pages
          </div>
          <div className="px-6 w-full">
            <button className="bg-yellow-500/60 px-4 py-2 font-medium rounded-full w-full mt-44">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
