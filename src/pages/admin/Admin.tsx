import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistantDashboard } from "@/components/admin/AIAssistantDashboard";
import { AIChatSessions } from "@/components/admin/AIChatSessions";
import { ProfileSettings } from "@/components/admin/settings/ProfileSettings";
import { AISettings } from "@/components/admin/settings/AISettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { 
  Bot, 
  Users, 
  Settings,
  UserCircle,
  Database,
  MessageSquare,
  LineChart,
  GitBranch,
  Rocket
} from "lucide-react";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-6">
            <Tabs defaultValue="database" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="database" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database & API
                </TabsTrigger>
                <TabsTrigger value="chatbot" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chatbot & Leads
                </TabsTrigger>
                <TabsTrigger value="marketing" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Marketing & SEO
                </TabsTrigger>
                <TabsTrigger value="monitoring" className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4" />
                  System Monitor
                </TabsTrigger>
                <TabsTrigger value="automation" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Automation
                </TabsTrigger>
              </TabsList>

              <TabsContent value="database" className="space-y-6">
                <div className="grid gap-6">
                  <AIAssistantDashboard />
                  <AIChatSessions />
                </div>
              </TabsContent>

              <TabsContent value="chatbot" className="space-y-6">
                <div className="grid gap-6">
                  <AIAssistantDashboard />
                  <AIChatSessions />
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-6">
                <div className="grid gap-6">
                  <AIAssistantDashboard />
                  <AIChatSessions />
                </div>
              </TabsContent>

              <TabsContent value="monitoring" className="space-y-6">
                <div className="grid gap-6">
                  <AIAssistantDashboard />
                  <AIChatSessions />
                </div>
              </TabsContent>

              <TabsContent value="automation" className="space-y-6">
                <div className="grid gap-6">
                  <AIAssistantDashboard />
                  <AIChatSessions />
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}