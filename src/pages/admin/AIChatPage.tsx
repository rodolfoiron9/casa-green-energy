import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardMetrics } from "@/components/admin/DashboardMetrics";
import { AIChatSessions } from "@/components/admin/AIChatSessions";

export default function AIChatPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-8">AI Chat Management</h1>
        <DashboardMetrics />
        <AIChatSessions />
      </div>
    </AdminLayout>
  );
}