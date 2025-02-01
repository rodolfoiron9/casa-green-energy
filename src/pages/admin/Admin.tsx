import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistantDashboard } from "@/components/admin/AIAssistantDashboard";
import { AIChatSessions } from "@/components/admin/AIChatSessions";
import { DashboardMetrics } from "@/components/admin/DashboardMetrics";
import { MarketingMetrics } from "@/components/admin/MarketingMetrics";
import { LeadManagement } from "@/components/admin/LeadManagement";
import { SystemStatus } from "@/components/admin/SystemStatus";
import { ProfileSettings } from "@/components/admin/settings/ProfileSettings";
import { AISettings } from "@/components/admin/settings/AISettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Bot, 
  Users, 
  Settings,
  UserCircle 
} from "lucide-react";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-6">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="dashboard" className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  AI Management
                </TabsTrigger>
                <TabsTrigger value="leads" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Leads
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <DashboardMetrics />
                <div className="grid gap-6 md:grid-cols-2">
                  <MarketingMetrics />
                  <SystemStatus />
                </div>
              </TabsContent>

              <TabsContent value="ai" className="space-y-6">
                <AIAssistantDashboard />
                <AIChatSessions />
              </TabsContent>

              <TabsContent value="leads" className="space-y-6">
                <LeadManagement />
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <ProfileSettings />
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <AISettings />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}