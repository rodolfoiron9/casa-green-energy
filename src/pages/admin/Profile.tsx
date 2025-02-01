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

      // Set email from auth session
      setUserEmail(session.user.email);

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', session.user.id)
        .single();

      if (error) {
        toast.error("Error fetching profile");
        console.error('Error fetching profile:', error);
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
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile & AI Assistant</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="profile" className="flex-1">Profile Information</TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4 mt-4">
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
                    className="w-full bg-gray-100"
                  />
                </div>

                <Button 
                  onClick={handleSaveChanges}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Save Changes
                </Button>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  {/* Add notification settings here */}
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
            <AIAssistant />
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}