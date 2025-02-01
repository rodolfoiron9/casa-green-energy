import { SystemStatus } from "@/components/admin/SystemStatus";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { DashboardMetrics } from "@/components/admin/DashboardMetrics";

export default function Activity() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">System Activity</h1>
          <p className="text-gray-300">Monitor AI system performance and recent activities</p>
        </div>
      </div>

      <SystemStatus />
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
        <DashboardMetrics />
      </div>
    </div>
  );
}