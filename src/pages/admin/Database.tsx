import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DatabaseMetrics } from "@/components/admin/DatabaseMetrics";
import { DatabaseTables } from "@/components/admin/DatabaseTables";
import { DatabaseBackups } from "@/components/admin/DatabaseBackups";

export default function Database() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-casa-navy dark:text-white">Database Management</h1>
          </div>
          <DatabaseMetrics />
          <DatabaseTables />
          <DatabaseBackups />
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}