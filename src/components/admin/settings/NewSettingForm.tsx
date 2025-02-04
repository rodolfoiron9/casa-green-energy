import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import { Key } from "lucide-react";
import { useState } from "react";

interface SettingInput {
  key: string;
  value: string;
}

export const NewSettingForm = () => {
  const { toast } = useToast();
  const [newSetting, setNewSetting] = useState<SettingInput>({ key: "", value: "" });

  const handleSaveSetting = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("User not authenticated");
      }

      const { error } = await supabase.from("admin_settings").insert({
        key: newSetting.key,
        value: JSON.parse(newSetting.value) as Json,
        user_id: user.id
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting saved successfully",
      });

      setNewSetting({ key: "", value: "" });
    } catch (error) {
      console.error("Error saving setting:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save setting",
      });
    }
  };

  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <Label htmlFor="key">Setting Key</Label>
        <Input
          id="key"
          placeholder="Enter setting key"
          value={newSetting.key}
          onChange={(e) =>
            setNewSetting({ ...newSetting, key: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="value">Setting Value (JSON)</Label>
        <Input
          id="value"
          placeholder='{"value": "example"}'
          value={newSetting.value}
          onChange={(e) =>
            setNewSetting({ ...newSetting, value: e.target.value })
          }
        />
      </div>
      <Button onClick={handleSaveSetting}>
        <Key className="w-4 h-4 mr-2" />
        Save Setting
      </Button>
    </div>
  );
};