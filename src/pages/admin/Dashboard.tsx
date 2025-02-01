import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardMetrics } from "@/components/admin/DashboardMetrics";
import { AISystemMetrics } from "@/components/admin/AISystemMetrics";
import { SystemStatus } from "@/components/admin/SystemStatus";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { LeadManagement } from "@/components/admin/LeadManagement";
import { MarketingMetrics } from "@/components/admin/MarketingMetrics";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">AI-Powered Dashboard</h1>
        <DashboardMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <AISystemMetrics />
          <MarketingMetrics />
        </div>
        <SystemStatus />
        <div className="grid gap-6 md:grid-cols-2">
          <LeadManagement />
          <RecentActivity />
        </div>
      </div>
    </ProtectedRoute>
  );
}