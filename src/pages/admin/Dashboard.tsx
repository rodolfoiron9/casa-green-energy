import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

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
      }
    };

    checkAuth();
  }, [navigate, toast]);

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="leads" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Leads
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Total Leads</h3>
                <p className="text-3xl font-bold">0</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
                <p className="text-3xl font-bold">0</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Content Pieces</h3>
                <p className="text-3xl font-bold">0</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leads">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Leads Management</h2>
              <p>Leads management interface coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Content Management</h2>
              <AIAssistant />
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Chat Management</h2>
              <p>Chat management interface coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
              <p>Activity log interface coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p>Settings interface coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;