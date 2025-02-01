import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardMetrics } from "@/components/admin/DashboardMetrics";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">AI Admin Dashboard</h1>
        <DashboardMetrics />
      </div>
    </ProtectedRoute>
  );
}