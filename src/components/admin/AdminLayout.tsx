import { ReactNode } from "react";
import { AdminSidebar } from "./layout/AdminSidebar";
import { AdminHeader } from "./layout/AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex w-full bg-neutral-50 dark:bg-neutral-900">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}