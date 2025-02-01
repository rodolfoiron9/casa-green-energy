import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { ProfileSettings } from "@/components/admin/settings/ProfileSettings";
import { AISettings } from "@/components/admin/settings/AISettings";
import { AppearanceSettings } from "@/components/admin/settings/AppearanceSettings";
import { NotificationSettings } from "@/components/admin/settings/NotificationSettings";

export default function Settings() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-casa-navy dark:text-white">Settings</h1>
          </div>

          <div className="grid gap-6">
            <ProfileSettings />
            <AISettings />
            <AppearanceSettings />
            <NotificationSettings />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}