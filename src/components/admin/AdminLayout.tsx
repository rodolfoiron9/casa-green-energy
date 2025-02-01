import { ReactNode } from "react";
import { AdminSidebarNav } from "./layout/AdminSidebarNav";
import { sidebarItems } from "./layout/AdminSidebarItems";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="flex">
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-full flex-col overflow-y-auto px-4 py-6">
            <h2 className="mb-6 px-2 text-lg font-semibold tracking-tight">
              Casa Energy Admin
            </h2>
            <div className="space-y-6">
              {sidebarItems.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-2 px-2 text-sm font-medium text-muted-foreground">
                    {section.title}
                  </h3>
                  <AdminSidebarNav items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto pl-64">
          <div className="container py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}