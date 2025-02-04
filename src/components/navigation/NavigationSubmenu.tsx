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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export interface NavigationSubmenuProps {
  items: SubmenuItem[];
  title: string;
  icon?: React.ReactElement<LucideIcon>;
}

export const NavigationSubmenu = ({ items, title, icon }: NavigationSubmenuProps) => {
  // Function to get relevant image based on title/category
  const getImageForItem = (title: string) => {
    const images: { [key: string]: string } = {
      "Air Source Heat Pumps": "/placeholder.svg",
      "Electrical Services": "/placeholder.svg",
      "Home Energy Solutions": "/placeholder.svg",
      "Maintenance Services": "/placeholder.svg",
      "Green Energy Systems": "/placeholder.svg",
      "Warranty Protection": "/placeholder.svg",
    };
    return images[title] || "/placeholder.svg";
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-[#0066cc] hover:text-[#0066cc]/80 hover:bg-white/10 flex items-center gap-2">
            {icon}
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 bg-casa-navy shadow-lg backdrop-blur-lg">
              {items.map((item) => (
                <li key={item.href}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white flex items-center gap-2 text-white group"
                      >
                        {item.icon}
                        <div className="flex-1">
                          <div className="text-sm font-medium leading-none group-hover:text-casa-gold transition-colors">
                            {item.title}
                          </div>
                          {item.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-white/70 group-hover:text-white/90 transition-colors">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent 
                      className="w-80 bg-casa-navy border-casa-gold"
                      align="start"
                    >
                      <div className="space-y-2">
                        <img
                          src={getImageForItem(item.title)}
                          alt={item.title}
                          className="aspect-video w-full object-cover rounded-md"
                        />
                        <p className="text-sm text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};