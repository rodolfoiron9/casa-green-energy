import { Menu, Home, Briefcase, BookOpen, MessageSquare, ArrowRight, Building2, Server, Globe, Database, Computer, Factory } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { NavigationLink } from "./navigation/NavigationLink";
import { NavigationSubmenu } from "./navigation/NavigationSubmenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { MenuItem } from "./navigation/types";

const Navigation = () => {
  const menuItems: MenuItem[] = [
    { title: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { 
      title: "Services",
      href: "/services",
      icon: <Briefcase className="w-4 h-4" />,
      submenu: [
        { title: "Air Source Heat Pumps", href: "/services/air-source-heat-pumps", icon: <Factory className="w-4 h-4" /> },
        { title: "Electrical Services", href: "/services/electrical-services", icon: <Server className="w-4 h-4" /> },
        { title: "Home Energy Solutions", href: "/services/home-energy-solutions", icon: <Building2 className="w-4 h-4" /> },
        { title: "Maintenance Services", href: "/services/maintenance-services", icon: <Computer className="w-4 h-4" /> },
        { title: "Green Energy Systems", href: "/services/green-energy-systems", icon: <Globe className="w-4 h-4" /> },
        { title: "Warranty & Protection", href: "/services/warranty-protection", icon: <Database className="w-4 h-4" /> },
      ]
    },
    { 
      title: "Resources",
      href: "#",
      icon: <BookOpen className="w-4 h-4" />,
      submenu: [
        { title: "Energy Saving Tips", href: "/resources/energy-saving-tips", icon: <Globe className="w-4 h-4" /> },
        { title: "Government Grants", href: "/resources/government-grants", icon: <Building2 className="w-4 h-4" /> },
        { title: "Case Studies", href: "/resources/case-studies", icon: <Database className="w-4 h-4" /> },
        { title: "FAQs", href: "/resources/faqs", icon: <MessageSquare className="w-4 h-4" /> },
      ]
    },
    { title: "Contact", href: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#f1f1f1] to-[#e5e5e5] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-casa-navy flex items-center gap-2">
            CASA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.submenu ? (
                      <NavigationSubmenu
                        title={item.title}
                        icon={item.icon}
                        items={item.submenu}
                      />
                    ) : (
                      <NavigationLink
                        href={item.href}
                        icon={item.icon}
                        title={item.title}
                      />
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/contact">
              <Button className="bg-casa-blue text-white hover:bg-casa-blue/90 flex items-center gap-2">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu items={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;