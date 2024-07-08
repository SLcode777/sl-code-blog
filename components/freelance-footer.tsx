import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function FreelanceFooter() {
  return (
    <footer>
      <div className=" relative  bottom-0 left-0 right-0 flex flex-row gap-x-4 h-48 z-50 justify-center bg-stone-900 items-center  text-orange-100 ">
        <div className=" flex space-x-4"></div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:hello@sl-code.dev"
        >
          <span className="sr-only">Mail</span>
          <Mail className="h-6 w-6  hover:text-orange-700" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.linkedin}
        >
          <span className="sr-only">Linkedin</span>
          <Icons.linkedin className="h-6 w-6 hover:text-orange-700" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.twitter}
        >
          <span className="sr-only">Twitter</span>
          <Icons.twitter className="h-6 w-6 hover:text-orange-700" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.github}
        >
          <span className="sr-only">GitHub</span>
          <Icons.gitHub className="h-6 w-6  hover:text-orange-700" />
        </a>
      </div>
      <div className="hidden mb-2 space-x-2 justify-center text-sm text-muted-foreground">
        <a href={siteConfig.links.portfolio} target="_blank">
          {siteConfig.author}
        </a>
      </div>
    </footer>
  );
}
