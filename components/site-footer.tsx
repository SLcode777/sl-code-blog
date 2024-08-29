import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-row space-x-4 justify-center items-center ">
        <div className="mb-3 flex space-x-4"></div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:hello@sl-code.dev"
        >
          <span className="sr-only">Mail</span>
          <Mail className="h-6 w-6 hover:text-[#efc50b]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.linkedin}
        >
          <span className="sr-only">Linkedin</span>
          <Icons.linkedin className="h-6 w-6 hover:text-[#efc50b]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.twitter}
        >
          <span className="sr-only">Twitter</span>
          <Icons.twitter className="h-6 w-6 hover:text-[#efc50b]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.github}
        >
          <span className="sr-only">GitHub</span>
          <Icons.gitHub className="h-6 w-6 hover:text-[#efc50b]" />
        </a>
      </div>
      <div className="hidden mb-2 space-x-2 justify-center text-sm text-muted-foreground">
        <a href={siteConfig.links.portfolio} target="_blank">
          {siteConfig.author}
        </a>
      </div>
      <div className="flex flex-col items-center w-full mb-6 text-sm gap-4">
        <div>Made with ❤️</div>
        <div className="text-xs flex flex-row gap-2">
          Featured on{" "}
          <Image
            className="rounded-lg"
            src="/img/indiebaguette-logo.webp"
            alt="logo"
            width={16}
            height={16}
          />
          <a className="underline" href="https://baguette.directoryfa.st/products/stella">
            IndieBaguette
          </a>
        </div>
      </div>
    </footer>
  );
}
