import { Menu, Phone, Mail, MapPin, Home, Briefcase, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menuItems = [
    { title: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { 
      title: "Services",
      href: "#services",
      icon: <Briefcase className="w-4 h-4" />,
      submenu: [
        { title: "Air Source Heat Pumps", href: "#services" },
        { title: "Electrical Services", href: "#services" },
        { title: "Home Energy Solutions", href: "#services" },
        { title: "Maintenance Services", href: "#services" },
        { title: "Green Energy Systems", href: "#services" },
        { title: "Warranty & Protection", href: "#services" },
      ]
    },
    { 
      title: "Resources",
      href: "#",
      icon: <BookOpen className="w-4 h-4" />,
      submenu: [
        { title: "Energy Saving Tips", href: "/blog" },
        { title: "Government Grants", href: "/blog" },
        { title: "Case Studies", href: "/blog" },
        { title: "FAQs", href: "/blog" },
      ]
    },
    { title: "Contact", href: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
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
                    {item.submenu ? (
                      <NavigationMenuTrigger className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 transition-colors">
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.title}
                        </span>
                      </NavigationMenuTrigger>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-casa-gold hover:text-casa-gold/90 transition-colors px-4 py-2 flex items-center gap-2"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                    {item.submenu && (
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 bg-casa-navy/95 backdrop-blur-lg border border-white/10">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-casa-gold/10 hover:text-casa-gold text-casa-gold/80"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/contact">
              <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 flex items-center gap-2">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;