import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AISystemMetrics } from "@/components/admin/AISystemMetrics";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <AISystemMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </ProtectedRoute>
  );
}