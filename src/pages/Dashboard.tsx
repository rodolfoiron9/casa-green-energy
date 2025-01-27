import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-gray-100">
          <DashboardSidebar />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Dashboard;