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
            <NavigationMenuTrigger className="bg-stone-900">
              Mes petits projets fun
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-row bg-[#0e0d0b]">
              <div className="flex flex-col p-4 w-64 bg-stone-900 text-sm leading-8 border-l-4 border-yellow-500">
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
