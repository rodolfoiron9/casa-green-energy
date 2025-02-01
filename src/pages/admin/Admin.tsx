import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { AIAssistantDashboard } from "@/components/admin/AIAssistantDashboard";
import Settings from "./Settings";
import Profile from "./Profile";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/ai-assistant" element={<AIAssistantDashboard />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AdminLayout>
    </ProtectedRoute>
  );
}