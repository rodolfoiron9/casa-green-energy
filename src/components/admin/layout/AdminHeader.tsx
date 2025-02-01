import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="border-b border-blue-800 bg-casa-navy p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}