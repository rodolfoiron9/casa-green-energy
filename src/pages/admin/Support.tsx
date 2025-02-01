import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, Users, Clock, AlertCircle } from "lucide-react";

export default function Support() {
  const { data: supportStats } = useQuery({
    queryKey: ['supportStats'],
    queryFn: async () => {
      const { data: interactions, error } = await supabase
        .from('ai_chat_interactions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return {
        totalInteractions: interactions?.length || 0,
        resolvedInteractions: interactions?.filter(i => i.metadata?.status === 'completed')?.length || 0,
        pendingInteractions: interactions?.filter(i => i.metadata?.status === 'active')?.length || 0,
        errorInteractions: interactions?.filter(i => i.metadata?.status === 'error')?.length || 0,
      };
    },
  });

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-casa-navy dark:text-white">Support Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 flex items-center space-x-4">
              <Users className="w-8 h-8 text-casa-blue" />
              <div>
                <p className="text-sm text-gray-500">Total Interactions</p>
                <p className="text-2xl font-bold">{supportStats?.totalInteractions || 0}</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4">
              <MessageSquare className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Resolved</p>
                <p className="text-2xl font-bold">{supportStats?.resolvedInteractions || 0}</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4">
              <Clock className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold">{supportStats?.pendingInteractions || 0}</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-sm text-gray-500">Errors</p>
                <p className="text-2xl font-bold">{supportStats?.errorInteractions || 0}</p>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="assistant" className="w-full">
            <TabsList>
              <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
              <TabsTrigger value="history">Chat History</TabsTrigger>
            </TabsList>
            <TabsContent value="assistant">
              <AIAssistant />
            </TabsContent>
            <TabsContent value="history">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Support Interactions</h2>
                {/* Chat history will be implemented in the next iteration */}
                <p className="text-gray-500">Chat history feature coming soon...</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}