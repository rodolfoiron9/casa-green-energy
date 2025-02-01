import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function ProfileSettings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<{
    full_name: string | null;
    avatar_url: string | null;
  } | null>(null);

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

  return (
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
  );
}