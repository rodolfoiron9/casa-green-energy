import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";

interface MobileMenuProps {
  items: {
    title: string;
    href: string;
  }[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden text-white hover:text-casa-gold hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-gradient-to-b from-casa-navy to-casa-blue/90 backdrop-blur-lg border-l border-white/10"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {items.map((item) => (
            <NavigationLink
              key={item.href}
              to={item.href}
              className="text-lg font-medium"
            >
              {item.title}
            </NavigationLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};