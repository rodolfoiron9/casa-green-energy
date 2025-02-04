import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
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
      navigate("/");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-casa-navy to-casa-blue/90 text-white p-4 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-casa-gold hover:text-casa-gold/90 transition-colors">
          Casa
        </Link>
        
        <div className="flex items-center space-x-4">
          {isAdmin && (
            <Button 
              variant="ghost" 
              asChild
              className="text-white hover:text-casa-gold hover:bg-white/10 transition-all duration-300"
            >
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          )}
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-white/20 text-white hover:bg-white/10 hover:text-casa-gold transition-all duration-300"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}