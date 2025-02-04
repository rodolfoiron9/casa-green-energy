import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Key } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const SettingsList = () => {
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

  if (isLoading) {
    return <div>Loading settings...</div>;
  }

  return (
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
  );
};