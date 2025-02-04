import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { SettingItem } from "./SettingItem";

interface Setting {
  id: string;
  key: string;
  value: any;
  created_at: string;
}

export const SettingsList = () => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const { toast } = useToast();

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("admin_settings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch settings",
      });
    }
  };

  useEffect(() => {
    fetchSettings();
  }, [toast]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("admin_settings")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting deleted successfully",
      });

      fetchSettings();
    } catch (error) {
      console.error("Error deleting setting:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete setting",
      });
    }
  };

  const handleUpdate = async (id: string, key: string, value: any) => {
    try {
      const { error } = await supabase
        .from("admin_settings")
        .update({ key, value })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting updated successfully",
      });

      fetchSettings();
    } catch (error) {
      console.error("Error updating setting:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update setting",
      });
    }
  };

  return (
    <div className="space-y-4">
      {settings.map((setting) => (
        <SettingItem
          key={setting.id}
          id={setting.id}
          settingKey={setting.key}
          settingValue={setting.value}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};