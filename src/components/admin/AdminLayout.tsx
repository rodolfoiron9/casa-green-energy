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
          <div className="flex h-full flex-col">
            {/* Header Section */}
            <div className="flex-none p-6 border-b">
              <h2 className="text-lg font-semibold tracking-tight">
                Casa Energy Admin
              </h2>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <nav className="space-y-6">
                {sidebarItems.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="px-2 text-sm font-medium text-muted-foreground">
                      {section.title}
                    </h3>
                    <AdminSidebarNav items={section.items} />
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pl-64">
          <div className="container py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}