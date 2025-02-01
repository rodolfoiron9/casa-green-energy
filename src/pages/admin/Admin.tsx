import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { AISystemMetrics } from "@/components/admin/AISystemMetrics";
import { MarketingMetrics } from "@/components/admin/MarketingMetrics";
import { LeadManagement } from "@/components/admin/LeadManagement";
import { SystemStatus } from "@/components/admin/SystemStatus";
import { RecentActivity } from "@/components/admin/RecentActivity";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <DashboardOverview />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AISystemMetrics />
            <MarketingMetrics />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LeadManagement />
            <div className="space-y-6">
              <SystemStatus />
              <RecentActivity />
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}