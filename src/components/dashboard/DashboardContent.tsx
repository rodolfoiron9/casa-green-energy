import { Outlet } from "react-router-dom";

export function DashboardContent() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </main>
  );
}