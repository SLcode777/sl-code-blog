import Link from "next/link";

export function PromoBanner() {
  return (
    <div className="bg-[#efc50b] text-sm md:text-base self-center mt-16  justify-center flex flex-col  py-2 px-8 text-black gap-2 rounded-full w-fit">
      <p>Mon application mobile est disponible sur le PlayStore !!</p>

      <Link
        href={"https://play.google.com/store/apps/details?id=com.allymeal.app"}
        target="_blank"
        className="font-bold text-center"
      >
        🔥 Télécharger AllyMeal 🔥
      </Link>
    </div>
  );
}
