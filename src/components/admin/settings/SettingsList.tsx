import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Setting {
  id: string;
  key: string;
  value: any;
  created_at: string;
}

export const SettingsList = () => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const { toast } = useToast();

  useEffect(() => {
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

    fetchSettings();
  }, [toast]);

  return (
    <div className="space-y-4">
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="p-4 border rounded-lg bg-background/50"
        >
          <div className="font-medium">{setting.key}</div>
          <div className="text-sm text-muted-foreground">
            {JSON.stringify(setting.value)}
          </div>
        </div>
      ))}
    </div>
  );
};