import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Bot, Database, GitBranch, Settings, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export function AIAssistantDashboard() {
  const [isProcessing, setIsProcessing] = useState(false);

  // Fetch AI system status
  const { data: systemStatus } = useQuery({
    queryKey: ['aiSystemStatus'],
    queryFn: async () => {
      const { data: analytics } = await supabase
        .from('ai_analytics')
        .select('*')
        .eq('metric_name', 'system_status')
        .order('created_at', { ascending: false })
        .limit(1);
      return analytics?.[0];
    },
  });

  // Fetch recent AI tasks
  const { data: recentTasks } = useQuery({
    queryKey: ['aiTasks'],
    queryFn: async () => {
      const { data } = await supabase
        .from('ai_tasks')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data;
    },
  });

  const handleAutonomousOperation = async (operation: string) => {
    setIsProcessing(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('Not authenticated');

      // Create a new AI task
      const { data, error } = await supabase
        .from('ai_tasks')
        .insert({
          task_type: 'system_monitoring',
          description: `Autonomous operation: ${operation}`,
          status: 'pending',
          user_id: session.user.id,
          metadata: {
            operation,
            timestamp: new Date().toISOString(),
          }
        })
        .select()
        .single();

      if (error) throw error;

      toast.success(`Started autonomous operation: ${operation}`);

      // Log the operation
      await supabase.from('ai_analytics').insert({
        metric_name: 'autonomous_operation',
        metric_value: {
          operation,
          task_id: data.id,
          timestamp: new Date().toISOString()
        },
        user_id: session.user.id
      });

    } catch (error: any) {
      console.error('Error in autonomous operation:', error);
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Bot className="h-6 w-6 text-casa-blue" />
              AI Assistant Dashboard
            </CardTitle>
            <Badge variant={systemStatus?.metric_value?.status === 'active' ? 'success' : 'destructive'}>
              {systemStatus?.metric_value?.status || 'Unknown'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button 
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => handleAutonomousOperation('database_optimization')}
              disabled={isProcessing}
            >
              <Database className="h-6 w-6" />
              <span>Database Management</span>
            </Button>

            <Button 
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => handleAutonomousOperation('codebase_analysis')}
              disabled={isProcessing}
            >
              <GitBranch className="h-6 w-6" />
              <span>Codebase Analysis</span>
            </Button>

            <Button 
              variant="outline"
              className="h-24 flex flex-col gap-2"
              onClick={() => handleAutonomousOperation('system_monitoring')}
              disabled={isProcessing}
            >
              <Settings className="h-6 w-6" />
              <span>System Monitoring</span>
            </Button>
          </div>

          {recentTasks && recentTasks.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Recent AI Tasks</h3>
              <div className="space-y-2">
                {recentTasks.map((task) => (
                  <Card key={task.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{task.description}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(task.created_at).toLocaleString()}
                        </p>
                      </div>
                      <Badge>{task.status}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {(!recentTasks || recentTasks.length === 0) && (
            <div className="mt-6 text-center p-6 border rounded-lg">
              <AlertCircle className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">No recent AI tasks found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}