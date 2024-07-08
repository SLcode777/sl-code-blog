"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";
import { buttonVariants } from "./ui/button";

export function FreelanceHeader() {
  useEffect(() => {
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      if (href) {
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = 50;
          const elementPosition = targetElement.offsetTop - offset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) =>
        handleSmoothScroll(
          event as unknown as React.MouseEvent<HTMLAnchorElement>
        )
      );
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", (event) =>
          handleSmoothScroll(
            event as unknown as React.MouseEvent<HTMLAnchorElement>
          )
        );
      });
    };
  }, []);

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
          <a
            className="tracking-wider font-light link-underline"
            href="#services"
          >
            Services
          </a>
          <a
            className="tracking-wider font-light link-underline"
            href="#tarifs"
          >
            Tarifs
          </a>
          <a
            className="tracking-wider font-light link-underline"
            href="#projets"
          >
            Réalisations
          </a>
          <a className="tracking-wider font-light link-underline" href="#avis">
            Avis clients
          </a>
          <a
            className="tracking-wider font-light link-underline"
            href="#contact"
          >
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
