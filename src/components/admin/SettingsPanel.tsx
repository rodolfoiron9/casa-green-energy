import { Card } from "@/components/ui/card";
import { SettingsHeader } from "./settings/SettingsHeader";
import { NewSettingForm } from "./settings/NewSettingForm";
import { SettingsList } from "./settings/SettingsList";

export const SettingsPanel = () => {
  return (
    <Card className="p-6">
      <SettingsHeader />
      <div className="space-y-6">
        <NewSettingForm />
        <SettingsList />
      </div>
    </Card>
  );
};