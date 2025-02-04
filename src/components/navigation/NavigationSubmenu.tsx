import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface NavigationSubmenuProps {
  items: {
    title: string;
    href: string;
    description?: string;
  }[];
  trigger: string;
}

export const NavigationSubmenu = ({ items, trigger }: NavigationSubmenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-casa-gold hover:bg-white/10">
            {trigger}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 bg-gradient-to-b from-casa-navy to-casa-blue/90 backdrop-blur-lg border border-white/10">
              {items.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-casa-gold"
                    >
                      <div className="text-sm font-medium leading-none text-white/90">
                        {item.title}
                      </div>
                      {item.description && (
                        <p className="line-clamp-2 text-sm leading-snug text-white/70">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};