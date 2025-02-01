import {
  LayoutDashboard,
  MessageSquare,
  Users,
  FileText,
  Settings,
  Activity,
  BarChart,
  Bot,
} from "lucide-react";
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
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    path: "/admin/ai-chat",
  },
  {
    title: "Lead Management",
    icon: Users,
    path: "/admin/leads",
  },
  {
    title: "Content",
    icon: FileText,
    path: "/admin/content",
  },
  {
    title: "Analytics",
    icon: BarChart,
    path: "/admin/analytics",
  },
  {
    title: "Chatbot Config",
    icon: Bot,
    path: "/admin/chatbot",
  },
  {
    title: "Activity",
    icon: Activity,
    path: "/admin/activity",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
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