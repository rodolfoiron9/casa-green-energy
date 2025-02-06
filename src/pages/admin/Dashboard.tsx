import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { LeadsManagement } from "@/components/admin/LeadsManagement";
import { ActivityLog } from "@/components/admin/ActivityLog";
import { SettingsPanel } from "@/components/admin/SettingsPanel";
import { MetricsCards } from "@/components/admin/dashboard/MetricsCards";
import { ServiceStatus } from "@/components/admin/dashboard/ServiceStatus";
import { ContentManagement } from "@/components/admin/content/ContentManagement";
import { ChatbotManagement } from "@/components/admin/ChatbotManagement";
import { BookingCalendar } from "@/components/admin/bookings/BookingCalendar";
import { GuidesManager } from "@/components/admin/guides/GuidesManager";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Bot,
  Calendar,
  BarChart,
  PieChart,
  TrendingUp,
  AlertCircle
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-casa-navy">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="bg-casa-gold text-white px-4 py-2 rounded-lg hover:bg-casa-gold/90 transition-colors">
                <AlertCircle className="w-4 h-4 inline-block mr-2" />
                System Status
              </button>
              <button className="bg-casa-navy text-white px-4 py-2 rounded-lg hover:bg-casa-navy/90 transition-colors">
                <TrendingUp className="w-4 h-4 inline-block mr-2" />
                Analytics
              </button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="flex flex-wrap gap-2 bg-white p-1 rounded-lg shadow-sm">
              <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <LayoutDashboard className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="leads" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <Users className="w-4 h-4" />
                Leads & Guides
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <FileText className="w-4 h-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <Bot className="w-4 h-4" />
                Chatbot
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <Calendar className="w-4 h-4" />
                Bookings
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <BarChart className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2 data-[state=active]:bg-casa-navy data-[state=active]:text-white">
                <PieChart className="w-4 h-4" />
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <MetricsCards metrics={metrics} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ServiceStatus />
                <ActivityLog limit={5} />
              </div>
              <SettingsPanel />
            </TabsContent>

            <TabsContent value="leads">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LeadsManagement />
                <GuidesManager />
              </div>
            </TabsContent>

            <TabsContent value="content">
              <ContentManagement />
            </TabsContent>

            <TabsContent value="chatbot">
              <ChatbotManagement />
            </TabsContent>

            <TabsContent value="bookings">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-casa-navy">Booking Management</h2>
                <BookingCalendar />
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-casa-navy">Analytics Dashboard</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Traffic Overview</h3>
                    {/* Add traffic chart component here */}
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Conversion Rates</h3>
                    {/* Add conversion chart component here */}
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">User Engagement</h3>
                    {/* Add engagement metrics component here */}
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-casa-navy">Reports & Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Performance Reports</h3>
                    {/* Add performance reports component here */}
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Revenue Analytics</h3>
                    {/* Add revenue analytics component here */}
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
