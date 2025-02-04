import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

interface SettingItemProps {
  settingKey: string;
  settingValue: any;
}

export const SettingItem = ({ settingKey, settingValue }: SettingItemProps) => {
  return (
    <Card className="p-4 border rounded-lg bg-background/50">
      <div className="flex items-center gap-2">
        <Settings className="w-4 h-4 text-muted-foreground" />
        <div className="font-medium">{settingKey}</div>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        {JSON.stringify(settingValue)}
      </div>
    </Card>
  );
};