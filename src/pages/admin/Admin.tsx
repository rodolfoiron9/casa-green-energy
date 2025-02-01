import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistantDashboard } from "@/components/admin/AIAssistantDashboard";
import { AIChatSessions } from "@/components/admin/AIChatSessions";
import { MarketingMetrics } from "@/components/admin/MarketingMetrics";
import { LeadManagement } from "@/components/admin/LeadManagement";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { User, Settings, Bell } from "lucide-react";

export default function Admin() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'settings'>('dashboard');

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-6">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="dashboard" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  AI Management
                </TabsTrigger>
                <TabsTrigger value="leads" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Lead Management
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <MarketingMetrics />
                  <RecentActivity />
                </div>
              </TabsContent>

              <TabsContent value="ai" className="space-y-6">
                <AIAssistantDashboard />
                <AIChatSessions />
              </TabsContent>

              <TabsContent value="leads" className="space-y-6">
                <LeadManagement />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}