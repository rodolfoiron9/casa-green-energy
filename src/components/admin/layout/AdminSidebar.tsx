import { Home, Users, MessageSquare, Settings, Database } from "lucide-react";
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
  { title: "Dashboard", icon: Home, url: "/admin" },
  { title: "Leads", icon: Users, url: "/admin/leads" },
  { title: "Chat Sessions", icon: MessageSquare, url: "/admin/chat" },
  { title: "Database", icon: Database, url: "/admin/database" },
  { title: "Settings", icon: Settings, url: "/admin/settings" },
];

export function AdminSidebar() {
  return (
    <Sidebar className="border-r border-blue-800 bg-casa-navy">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-blue-800 hover:text-white rounded-md transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
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