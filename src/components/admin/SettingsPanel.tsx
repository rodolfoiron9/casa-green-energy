import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { NewSettingForm } from "./settings/NewSettingForm";
import { SettingsList } from "./settings/SettingsList";

export const SettingsPanel = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>

      <div className="space-y-6">
        <NewSettingForm />
        <SettingsList />
      </div>
    </Card>
  );
};