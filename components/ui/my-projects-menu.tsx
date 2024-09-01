import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const MyProjectMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" ">
              Mes petits projets fun
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-row ">
              <div className="flex flex-col p-4 w-64  text-lg italic font-serif leading-8 border-l-4 border-[#efc50b] text-balance text-center bg-stone-100 dark:bg-stone-900" >
                {" "}
                petits projets réalisés lors de challenges ou au cours de mes
                formations
              </div>
              <div className="flex flex-col">
                <Link href="/snake">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    The Snake Game
                  </NavigationMenuLink>
                </Link>
                <Link href="/wordle">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Wordle Challenge
                  </NavigationMenuLink>
                </Link>
                <Link href="/timer">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    My Amazing Timers
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
