import { Home, Users, MessageSquare, Settings, Database, LayoutDashboard, ChartBar } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/admin" },
  { title: "Analytics", icon: ChartBar, url: "/admin/analytics" },
  { title: "Customers", icon: Users, url: "/admin/customers" },
  { title: "Messages", icon: MessageSquare, url: "/admin/messages" },
  { title: "Database", icon: Database, url: "/admin/database" },
  { title: "Settings", icon: Settings, url: "/admin/settings" },
];

export function AdminSidebar() {
  return (
    <Sidebar className="border-r border-white/10 bg-white/5 backdrop-blur-lg">
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Home className="h-6 w-6 text-casa-gold" />
              <span>Admin</span>
            </h2>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-casa-gold" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}