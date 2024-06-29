import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-row space-x-4 justify-center items-center">
        <div className="mb-3 flex space-x-4"></div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:hello@sl-code.dev"
        >
          <span className="sr-only">Mail</span>
          <Mail className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.linkedin}
        >
          <span className="sr-only">Linkedin</span>
          <Icons.linkedin className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.twitter}
        >
          <span className="sr-only">Twitter</span>
          <Icons.twitter className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.github}
        >
          <span className="sr-only">GitHub</span>
          <Icons.gitHub className="h-6 w-6" />
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
