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
  // Function to get relevant image based on title/category
  const getImageForItem = (title: string) => {
    const images: { [key: string]: string } = {
      "Air Source Heat Pumps": "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2074&auto=format&fit=crop",
      "Electrical Services": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      "Home Energy Solutions": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      "Maintenance Services": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      "Green Energy Systems": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      "Warranty & Protection": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
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
                <li key={item.href} className="relative overflow-hidden rounded-md">
                  <Link
                    to={item.href}
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:scale-105 flex items-center gap-2 text-white relative z-10 min-h-[80px] group"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 31, 63, 0.85), rgba(0, 31, 63, 0.95)), url(${getImageForItem(item.title)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-casa-navy/90 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center gap-2 w-full">
                      {item.icon}
                      <div className="flex-1">
                        <div className="text-sm font-medium leading-none mb-1 group-hover:text-casa-gold transition-colors">
                          {item.title}
                        </div>
                        {item.description && (
                          <p className="line-clamp-2 text-sm leading-snug text-white/70 group-hover:text-white/90 transition-colors">
                            {item.description}
                          </p>
                        )}
                      </div>
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