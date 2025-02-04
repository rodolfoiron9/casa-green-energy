import { Settings } from "lucide-react";

export const SettingsHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Settings className="w-6 h-6" />
      <h2 className="text-2xl font-bold">Settings</h2>
    </div>
  );
};