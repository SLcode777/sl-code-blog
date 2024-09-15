import Image from "next/image";

export const Top1Display = () => {
  return (
    <>
      <div
        id="right-container"
        className="w-full flex flex-col mt-6 lg:mt-0 lg:ml-12 py-10 pl-4 gap-4  border-yellow-400/40 items-center lg:items-start text-center lg:text-start"
      >
        <h2 className="titre text-2xl mb-2">QUI EST TOP 1 ?</h2>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="image de profil"
          width={72}
          height={72}
        ></Image>
        <div className="flex flex-col gap-1">
          <div className="italic text-sm ">Nom</div>
          <div className="text-[#ccbc9e]">STELLA</div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">Punchline</div>
          <div className="text-[#ccbc9e] max-w-72 text-balance">
            Arriveras-tu à battre mon score ? 😎{" "}
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">X</div>
          <a
            className="text-[#ccbc9e] max-w-72"
            href="https://x.com/StellaSLcode"
            target="_blank"
            rel="noreferrer noopener"
          >
            @StellaSLcode
          </a>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">LinkedIn</div>
          <a
            className="text-[#ccbc9e] max-w-72 "
            href="https://www.linkedin.com/in/stella-de-sl-code-419929293/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stella de SL Code
          </a>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">Github</div>
          <a
            className="text-[#ccbc9e] max-w-72 "
            href="https://github.com/SLcode777/"
            target="_blank"
            rel="noreferrer noopener"
          >
            SLcode777
          </a>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">Lien 1</div>
          <a
            className="text-[#ccbc9e] max-w-72 "
            href="https://www.sl-code.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mon Blog
          </a>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="italic text-sm ">Lien 2</div>
          <a
            className="text-[#ccbc9e] max-w-72 "
            href=""
            target="_blank"
            rel="noreferrer noopener"
          >
            -
          </a>
        </div>
      </div>
    </>
  );
};
