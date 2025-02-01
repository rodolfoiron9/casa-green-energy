import { AdminLayout } from "@/components/admin/AdminLayout";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Settings2, Bell } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState<{
    full_name: string | null;
    avatar_url: string | null;
  } | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) return;

      setUserEmail(session.user.email);

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', session.user.id)
        .single();

      if (error) {
        toast.error("Error fetching profile");
        return;
      }

      setProfile(data);
    };

    fetchProfile();
  }, []);

  const handleSaveChanges = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.id) return;

    const { error } = await supabase
      .from('profiles')
      .update({ full_name: profile?.full_name })
      .eq('id', session.user.id);

    if (error) {
      toast.error("Error updating profile");
      return;
    }

    toast.success("Profile updated successfully");
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-casa-navy dark:text-white">Profile Settings</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <Tabs defaultValue="profile" className="w-full">
                  <div className="border-b border-gray-200 bg-gray-50/50 dark:bg-gray-800/50 px-6 py-3">
                    <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1">
                      <TabsTrigger value="profile" className="inline-flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="inline-flex items-center gap-2">
                        <Settings2 className="h-4 w-4" />
                        Settings
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="inline-flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Notifications
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="p-6">
                    <TabsContent value="profile" className="space-y-6 mt-0">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={profile?.full_name || ''}
                            onChange={(e) => setProfile(prev => ({ ...prev!, full_name: e.target.value }))}
                            placeholder="Enter your full name"
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={userEmail || ''}
                            disabled
                            className="w-full bg-gray-50 dark:bg-gray-800"
                          />
                        </div>

                        <Button 
                          onClick={handleSaveChanges}
                          className="w-full bg-casa-navy hover:bg-blue-800 text-white"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="settings" className="mt-0">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Account Settings</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Manage your account settings and preferences
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="notifications" className="mt-0">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Notification Preferences</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Control how you receive notifications
                        </p>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
                <AIAssistant />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}