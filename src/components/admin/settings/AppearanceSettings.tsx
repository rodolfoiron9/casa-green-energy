import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function AppearanceSettings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Appearance</h2>
      <div className="flex items-center justify-between">
        <Label htmlFor="darkMode">Dark Mode</Label>
        <Switch
          id="darkMode"
          checked={darkMode}
          onCheckedChange={setDarkMode}
        />
      </div>
    </Card>
  );
}