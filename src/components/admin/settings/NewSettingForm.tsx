import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const NewSettingForm = () => {
  const { toast } = useToast();
  const [newSetting, setNewSetting] = useState<{ key: string; value: any }>({
    key: "",
    value: "",
  });

  const handleAddSetting = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "You must be logged in to add settings",
        });
        return;
      }

      const { error } = await supabase
        .from("admin_settings")
        .insert({
          key: newSetting.key,
          value: newSetting.value,
          user_id: user.id,
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
    <div className="flex gap-4 mb-6">
      <Input
        placeholder="Setting Key"
        value={newSetting.key}
        onChange={(e) => setNewSetting({ ...newSetting, key: e.target.value })}
      />
      <Input
        placeholder="Setting Value"
        value={newSetting.value}
        onChange={(e) => setNewSetting({ ...newSetting, value: e.target.value })}
      />
      <Button onClick={handleAddSetting}>Add Setting</Button>
    </div>
  );
};