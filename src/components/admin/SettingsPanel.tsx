import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Key } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const SettingsPanel = () => {
  const { toast } = useToast();
  const [newSetting, setNewSetting] = useState({ key: "", value: "" });

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("admin_settings")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const handleSaveSetting = async () => {
    try {
      const { error } = await supabase.from("admin_settings").insert([
        {
          key: newSetting.key,
          value: JSON.parse(newSetting.value),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting saved successfully",
      });

      setNewSetting({ key: "", value: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save setting",
      });
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>

      <div className="space-y-6">
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

        {isLoading ? (
          <div>Loading settings...</div>
        ) : (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Current Settings</h3>
            <div className="space-y-4">
              {settings?.map((setting) => (
                <div
                  key={setting.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{setting.key}</p>
                    <p className="text-sm text-gray-500">
                      {JSON.stringify(setting.value)}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Key className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};