import { Menu, Home, Briefcase, BookOpen, MessageSquare, ArrowRight, Building2, Server, Globe, Database, Computer, Factory, UserCog, LogOut, ChevronDown } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const iconProps = { size: 20, color: "#403E43" };

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
    { title: "Home", href: "/", icon: <Home {...iconProps} /> },
    { 
      title: "Services",
      href: "/services",
      icon: <Briefcase {...iconProps} />,
      submenu: [
        { title: "Air Source Heat Pumps", href: "/services/air-source-heat-pumps", icon: <Factory {...iconProps} /> },
        { title: "Electrical Services", href: "/services/electrical-services", icon: <Server {...iconProps} /> },
        { title: "Home Energy Solutions", href: "/services/home-energy-solutions", icon: <Building2 {...iconProps} /> },
        { title: "Maintenance Services", href: "/services/maintenance-services", icon: <Computer {...iconProps} /> },
        { title: "Green Energy Systems", href: "/services/green-energy-systems", icon: <Globe {...iconProps} /> },
        { title: "Warranty & Protection", href: "/services/warranty-protection", icon: <Database {...iconProps} /> },
      ]
    },
    { 
      title: "Resources",
      href: "#",
      icon: <BookOpen {...iconProps} />,
      submenu: [
        { title: "Energy Saving Tips", href: "/resources/energy-saving-tips", icon: <Globe {...iconProps} /> },
        { title: "Government Grants", href: "/resources/government-grants", icon: <Building2 {...iconProps} /> },
        { title: "Case Studies", href: "/resources/case-studies", icon: <Database {...iconProps} /> },
        { title: "FAQs", href: "/resources/faqs", icon: <MessageSquare {...iconProps} /> },
      ]
    },
    { title: "Contact", href: "/contact", icon: <MessageSquare {...iconProps} /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#403E43] flex items-center gap-2 hover:text-[#221F26] transition-colors"
          >
            CASA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {!isDashboard && (
              <NavigationMenu>
                <NavigationMenuList className="text-[#403E43]">
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="bg-[#F6F6F7] text-[#403E43] hover:bg-[#E5E5E6] border-gray-200 flex items-center gap-2"
                        >
                          <UserCog {...iconProps} />
                          Admin
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white border border-gray-200">
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard" className="flex items-center gap-2 text-[#403E43] hover:text-[#221F26]">
                            <UserCog {...iconProps} />
                            Admin Panel
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 text-[#403E43] hover:text-[#221F26]">
                          <LogOut {...iconProps} />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              ) : (
                <Button
                  className="bg-[#403E43] text-white hover:bg-[#221F26] transition-colors flex items-center gap-2"
                  asChild
                >
                  <Link to="/auth">Login</Link>
                </Button>
              )}
              {!isDashboard && (
                <Link to="/contact">
                  <Button className="bg-[#403E43] text-white hover:bg-[#221F26] transition-colors flex items-center gap-2">
                    Get Quote <ArrowRight {...iconProps} className="text-white" />
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
