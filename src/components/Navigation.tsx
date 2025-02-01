import { Menu, Home, Briefcase, BookOpen, MessageSquare, ArrowRight, Building2, Server, Globe, Database, Computer, Factory, UserCog, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { NavigationLink } from "./navigation/NavigationLink";
import { NavigationSubmenu } from "./navigation/NavigationSubmenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { MenuItem } from "./navigation/types";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
      const { data: userRole } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();
      
      setIsAdmin(userRole?.role === 'admin');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      setIsAuthenticated(false);
      setIsAdmin(false);
    }
  };

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
    <nav className="fixed top-0 w-full z-50 bg-casa-navy shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-casa-gold flex items-center gap-2">
            CASA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {!isDashboard && (
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
            )}

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  {isAdmin && (
                    <Button
                      variant="outline"
                      className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 flex items-center gap-2"
                      asChild
                    >
                      <Link to="/dashboard">
                        <UserCog className="w-4 h-4" />
                        Admin Panel
                      </Link>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="text-casa-gold hover:bg-casa-gold/10 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 flex items-center gap-2"
                  asChild
                >
                  <Link to="/auth">Login</Link>
                </Button>
              )}
              {!isDashboard && (
                <Link to="/contact">
                  <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 flex items-center gap-2">
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          {!isDashboard && <MobileMenu items={menuItems} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;