import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface NewSetting {
  key: string;
  value: any;
}

export const NewSettingForm = () => {
  const [newSetting, setNewSetting] = useState<NewSetting>({ key: "", value: "" });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "You must be logged in to add settings",
        });
        return;
      }

      const { error } = await supabase.from("admin_settings").insert({
        key: newSetting.key,
        value: newSetting.value,
        user_id: session.user.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting added successfully",
      });

      setNewSetting({ key: "", value: "" });
    } catch (error) {
      console.error("Error adding setting:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add setting",
      });
    }
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <Input
            placeholder="Setting key"
            value={newSetting.key}
            onChange={(e) =>
              setNewSetting({ ...newSetting, key: e.target.value })
            }
            required
          />
          <Input
            placeholder="Setting value"
            value={newSetting.value}
            onChange={(e) =>
              setNewSetting({ ...newSetting, value: e.target.value })
            }
            required
          />
        </div>
        <Button type="submit" className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Setting
        </Button>
      </form>
    </Card>
  );
};