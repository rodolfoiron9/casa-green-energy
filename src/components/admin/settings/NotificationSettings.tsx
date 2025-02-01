import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <div className="flex items-center justify-between">
        <Label htmlFor="emailNotifications">Email Notifications</Label>
        <Switch
          id="emailNotifications"
          checked={emailNotifications}
          onCheckedChange={setEmailNotifications}
        />
      </div>
    </Card>
  );
}