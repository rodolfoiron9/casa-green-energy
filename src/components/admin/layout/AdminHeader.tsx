import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function AdminHeader() {
  const navigate = useNavigate();
  const { toast } = useToast();

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
      navigate("/auth");
    }
  };

  return (
    <header className="border-b border-white/10 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">AI Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-white hover:text-white/80"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}