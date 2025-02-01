import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-300">Welcome back, Admin</p>
          </div>
        </div>

        <DashboardOverview />
        
        <div className="grid gap-6 md:grid-cols-2">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </ProtectedRoute>
  );
}