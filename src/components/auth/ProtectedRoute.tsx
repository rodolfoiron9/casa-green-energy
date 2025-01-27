import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "Please login to access the dashboard",
        });
        navigate("/auth");
        return;
      }

      // Check if user has admin role
      const { data: userRole, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .maybeSingle();

      if (error) {
        console.error('Error checking user role:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "An error occurred while checking permissions",
        });
        navigate("/");
        return;
      }

      if (!userRole || userRole.role !== 'admin') {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You need admin privileges to access this area",
        });
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate, toast]);

  return <>{children}</>;
};