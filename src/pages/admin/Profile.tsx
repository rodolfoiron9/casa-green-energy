import { AdminLayout } from "@/components/admin/AdminLayout";
import { AIAssistant } from "@/components/admin/AIAssistant";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Profile() {
  const [profile, setProfile] = useState<{
    full_name: string | null;
    avatar_url: string | null;
  } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) return;

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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile & AI Assistant</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            {profile ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <p className="mt-1">{profile.full_name || 'Not set'}</p>
                </div>
                {profile.avatar_url && (
                  <div>
                    <label className="text-sm font-medium">Avatar</label>
                    <img 
                      src={profile.avatar_url} 
                      alt="Profile avatar" 
                      className="mt-1 w-20 h-20 rounded-full"
                    />
                  </div>
                )}
              </div>
            ) : (
              <p>Loading profile...</p>
            )}
          </Card>

          <AIAssistant />
        </div>
      </div>
    </AdminLayout>
  );
}