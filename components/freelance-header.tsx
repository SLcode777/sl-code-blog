import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";
import { buttonVariants } from "./ui/button";

export function FreelanceHeader() {
  return (
    <header className="z-20 sticky top-0 w-full border-b border-stone-900 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-orange-100/75">
      <div className="container flex flex-row h-20 max-w-screen-2xl mx-auto items-center justify-between">
        <div>
          <Link
            href="/lp"
            className="mr-6 flex items-center space-x-2 text-stone-900"
          >
            <Icons.logo className="h-35 w-20" />
            <span className="font-bold ">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex flex-row w-full ml-32 justify-start  space-x-10">
          <a className="tracking-wider" href="#services">
            Services
          </a>
          <a className="tracking-wider" href="#tarifs">
            Tarifs
          </a>
          <a className="tracking-wider" href="#projets">
            Réalisations
          </a>
          <a className="tracking-wider" href="#avis">
            Avis clients
          </a>
          <a className="tracking-wider" href="#contact">
            Contact
          </a>
        </div>

        <div className="flex flex-row items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "freelance" }),
                  "w-10 px-0 hidden sm:inline-flex "
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "freelance" }),
                  "w-10 px-0  hidden sm:inline-flex"
                )}
              >
                <Icons.linkedin className="h-4 w-4" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "freelance" }),
                  "w-10 px-0  hidden sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4 " />
                <span className="sr-only">X</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
