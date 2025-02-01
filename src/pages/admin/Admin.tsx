import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { LeadManagement } from "@/components/admin/LeadManagement";
import { RecentActivity } from "@/components/admin/RecentActivity";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LeadManagement />
            <RecentActivity />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}