import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Settings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<{
    full_name: string | null;
    avatar_url: string | null;
  } | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
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

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', session.user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not load profile settings",
      });
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('No user logged in');

      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: profile?.full_name,
          updated_at: new Date().toISOString(),
        })
        .eq('id', session.user.id);

      if (error) throw error;

      // Log successful profile update
      await supabase.from('ai_analytics').insert({
        metric_name: 'profile_update',
        metric_value: {
          timestamp: new Date().toISOString(),
          success: true
        },
        user_id: session.user.id
      });

      toast({
        title: "Settings updated",
        description: "Your profile settings have been saved successfully.",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not update settings",
      });
    } finally {
      setLoading(false);
    }
  };

  const createAiTask = async (taskType: string, description: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('Not authenticated');

      const { error } = await supabase.from('ai_tasks').insert({
        task_type: taskType,
        description,
        user_id: session.user.id
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
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-casa-navy dark:text-white">Settings</h1>
          </div>

          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-casa-navy dark:text-white">Profile Settings</h2>
              <form onSubmit={updateProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profile?.full_name || ''}
                    onChange={(e) => setProfile(prev => ({ ...prev!, full_name: e.target.value }))}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-casa-navy hover:bg-blue-800 text-white"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </form>
            </Card>

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

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Appearance</h2>
              <div className="flex items-center justify-between">
                <Label htmlFor="darkMode">Dark Mode</Label>
                <Switch
                  id="darkMode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <Switch
                  id="emailNotifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}