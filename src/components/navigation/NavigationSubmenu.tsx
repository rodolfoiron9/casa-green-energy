import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { LucideIcon } from "lucide-react";
import { SubmenuItem } from "./types";

interface NavigationSubmenuProps {
  title: string;
  icon: React.ReactElement<LucideIcon>;
  items: SubmenuItem[];
}

export const NavigationSubmenu = ({ title, icon, items }: NavigationSubmenuProps) => (
  <>
    <NavigationMenuTrigger className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 transition-colors">
      <span className="flex items-center gap-2">
        {icon}
        {title}
      </span>
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 bg-casa-navy/95 backdrop-blur-lg border border-white/10">
        {items.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                to={item.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-casa-gold/10 hover:text-casa-gold text-casa-gold/80 flex items-center gap-3"
              >
                {item.icon}
                <div>
                  <div className="text-sm font-medium leading-none">{item.title}</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  </>
);