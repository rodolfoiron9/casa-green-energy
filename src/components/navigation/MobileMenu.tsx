import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { MenuItem } from "./types";

interface MobileMenuProps {
  items: MenuItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => (
  <Sheet>
    <SheetTrigger asChild className="md:hidden">
      <Button variant="ghost" size="icon" className="text-white">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="bg-casa-navy/95 backdrop-blur-lg border-l border-white/10">
      <div className="flex flex-col gap-4 mt-8">
        {items.map((item) => (
          <div key={item.title}>
            <Link
              to={item.href}
              className="text-casa-gold hover:text-casa-gold/90 transition-colors px-4 py-2 block flex items-center gap-2"
            >
              {item.icon}
              {item.title}
            </Link>
            {item.submenu && (
              <div className="ml-4 mt-2 space-y-2">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.href}
                    className="text-casa-gold/60 hover:text-casa-gold transition-colors px-4 py-1 block text-sm"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/contact">
          <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 w-full mt-4 flex items-center gap-2">
            Get Quote <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </SheetContent>
  </Sheet>
);