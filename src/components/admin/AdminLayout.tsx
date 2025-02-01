import { ReactNode } from "react";
import { AdminSidebarNav } from "./layout/AdminSidebarNav";
import { sidebarItems } from "./layout/AdminSidebarItems";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">
      <div className="flex">
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white dark:bg-neutral-800">
          <div className="flex h-full flex-col overflow-y-auto px-4 py-8">
            <h2 className="mb-8 px-2 text-lg font-semibold">Casa Energy Admin</h2>
            <div className="space-y-6">
              {sidebarItems.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-2 px-2 text-sm font-semibold text-neutral-500">
                    {section.title}
                  </h3>
                  <AdminSidebarNav items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto pl-64">
          {children}
        </main>
      </div>
    </div>
  );
}