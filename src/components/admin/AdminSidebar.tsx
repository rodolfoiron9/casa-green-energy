import {
  Database,
  MessageSquare,
  Settings,
  Users,
  BarChart,
  Bot,
  FileText,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Database",
    icon: Database,
    path: "/admin/database",
  },
  {
    title: "Analytics",
    icon: BarChart,
    path: "/admin/analytics",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    path: "/admin/ai-chat",
  },
  {
    title: "AI Content",
    icon: FileText,
    path: "/admin/ai-content",
  },
  {
    title: "Lead Management",
    icon: Users,
    path: "/admin/leads",
  },
  {
    title: "Chatbot Config",
    icon: Bot,
    path: "/admin/chatbot",
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
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold">AI Admin Panel</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
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