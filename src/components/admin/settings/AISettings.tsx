import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define the task type enum to match the database
type AITaskType = "code_fix" | "database_operation" | "content_generation" | "lead_management" | "marketing" | "system_monitoring";

export function AISettings() {
  const { toast } = useToast();
  const [aiTasksEnabled, setAiTasksEnabled] = useState(true);

  // Fetch AI tasks
  const { data: aiTasks, isLoading: tasksLoading, error: tasksError } = useQuery({
    queryKey: ['aiTasks'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('ai_tasks')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      return data;
    },
  });

  const createAiTask = async (taskType: AITaskType, description: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('Not authenticated');

      const { error } = await supabase.from('ai_tasks').insert({
        task_type: taskType,
        description,
        user_id: session.user.id,
        status: 'pending'
      });

      if (error) throw error;

      toast({
        title: "Task created",
        description: "New AI task has been created successfully.",
      });
    } catch (error) {
      console.error('Error creating AI task:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not create AI task",
      });
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">AI Assistant Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="aiTasks">AI Tasks Enabled</Label>
          <Switch
            id="aiTasks"
            checked={aiTasksEnabled}
            onCheckedChange={setAiTasksEnabled}
          />
        </div>

        {aiTasksEnabled && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Recent AI Tasks</h3>
            {tasksLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : tasksError ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to load AI tasks. Please try again later.
                </AlertDescription>
              </Alert>
            ) : aiTasks?.length ? (
              <div className="space-y-2">
                {aiTasks.map((task) => (
                  <div key={task.id} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-medium">{task.description}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span>{task.task_type}</span>
                      <span>{task.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No recent AI tasks</p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}