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
          <NavigationMenuTrigger className="bg-transparent text-[#0066cc] hover:text-[#0066cc]/80 hover:bg-white/10 flex items-center gap-2">
            {icon}
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 bg-[#0066cc] shadow-lg backdrop-blur-lg">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white flex items-center gap-2 text-white"
                  >
                    {item.icon}
                    <div>
                      <div className="text-sm font-medium leading-none">
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