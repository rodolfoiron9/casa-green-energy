import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-casa-navy/95 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            CASA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      to={item.href}
                      className="text-white/80 hover:text-white transition-colors px-4 py-2"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-casa-navy/95 backdrop-blur-lg border-l border-white/10">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors px-4 py-2"
                  >
                    {item.title}
                  </Link>
                ))}
                <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 mt-4">
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;