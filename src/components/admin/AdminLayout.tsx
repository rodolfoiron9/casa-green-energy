import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}