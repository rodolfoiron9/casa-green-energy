import { Outlet } from "react-router-dom";
import { Card } from "@/components/ui/card";

export function DashboardContent() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <Card className="p-6 bg-white shadow-sm">
          <Outlet />
        </Card>
      </div>
    </main>
  );
}