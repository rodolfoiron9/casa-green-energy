import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { AISystemMetrics } from "@/components/admin/AISystemMetrics";
import { MarketingMetrics } from "@/components/admin/MarketingMetrics";
import { ProfileSettings } from "@/components/admin/settings/ProfileSettings";
import { NotificationSettings } from "@/components/admin/settings/NotificationSettings";
import { AppearanceSettings } from "@/components/admin/settings/AppearanceSettings";
import { AISettings } from "@/components/admin/settings/AISettings";

export default function Admin() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'settings'>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        return (
          <div className="space-y-6">
            <ProfileSettings />
            <NotificationSettings />
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <AppearanceSettings />
            <AISettings />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <DashboardOverview />
            <div className="grid gap-6 md:grid-cols-2">
              <AISystemMetrics />
              <MarketingMetrics />
            </div>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        {renderContent()}
      </AdminLayout>
    </ProtectedRoute>
  );
}