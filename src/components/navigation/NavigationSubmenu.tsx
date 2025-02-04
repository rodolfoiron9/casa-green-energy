import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { SubmenuItem } from "./types";

export interface NavigationSubmenuProps {
  items: SubmenuItem[];
  title: string;
  icon?: React.ReactElement<LucideIcon>;
}

export const NavigationSubmenu = ({ items, title, icon }: NavigationSubmenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-casa-gold hover:bg-white/10 flex items-center gap-2">
            {icon}
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 bg-gradient-to-b from-casa-navy to-casa-blue/90 backdrop-blur-lg border border-white/10">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-casa-gold flex items-center gap-2"
                  >
                    {item.icon}
                    <div>
                      <div className="text-sm font-medium leading-none text-white/90">
                        {item.title}
                      </div>
                      {item.description && (
                        <p className="line-clamp-2 text-sm leading-snug text-white/70">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};