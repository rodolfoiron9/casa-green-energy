import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { LeadsManagement } from "@/components/admin/LeadsManagement";
import { ActivityLog } from "@/components/admin/ActivityLog";
import { SettingsPanel } from "@/components/admin/SettingsPanel";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Activity,
  ChartBar,
  Calendar,
  Download,
  Bot
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: metrics } = useQuery({
    queryKey: ['admin-metrics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admin_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      return data;
    }
  });

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
          <TabsList className="flex flex-wrap gap-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Total Leads</h3>
                    <p className="text-3xl font-bold">{metrics?.find(m => m.metric_name === 'total_leads')?.metric_value || 0}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Bookings</h3>
                    <p className="text-3xl font-bold">{metrics?.find(m => m.metric_name === 'total_bookings')?.metric_value || 0}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Download className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Downloads</h3>
                    <p className="text-3xl font-bold">{metrics?.find(m => m.metric_name === 'total_downloads')?.metric_value || 0}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Bot className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">AI Chats</h3>
                    <p className="text-3xl font-bold">{metrics?.find(m => m.metric_name === 'total_ai_chats')?.metric_value || 0}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ChartBar className="w-5 h-5" />
                  Performance Metrics
                </h3>
                {/* Performance metrics chart will be added here */}
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activities
                </h3>
                <ActivityLog limit={5} />
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leads">
            <LeadsManagement />
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
            <ActivityLog />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;