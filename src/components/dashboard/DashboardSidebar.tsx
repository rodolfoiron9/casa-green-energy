import {
  LayoutDashboard,
  FileText,
  Settings,
  MessageSquare,
  Key,
  Database,
  BookOpen,
  Download,
  Users,
  HelpCircle,
  FooterIcon,
  Server,
  LayoutTemplate,
  FormInput,
} from "lucide-react";
import { Link } from "react-router-dom";
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
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Content", icon: FileText, path: "/dashboard/content" },
  { title: "Forms", icon: FormInput, path: "/dashboard/forms" },
  { title: "AI Chat Bot", icon: MessageSquare, path: "/dashboard/chatbot" },
  { title: "API Keys", icon: Key, path: "/dashboard/api-keys" },
  { title: "Database", icon: Database, path: "/dashboard/database" },
  { title: "Blog Posts", icon: FileText, path: "/dashboard/blog-posts" },
  { title: "Books", icon: BookOpen, path: "/dashboard/books" },
  { title: "Downloads", icon: Download, path: "/dashboard/downloads" },
  { title: "Leads", icon: Users, path: "/dashboard/leads" },
  { title: "Subscribers", icon: Users, path: "/dashboard/subscribers" },
  { title: "FAQs", icon: HelpCircle, path: "/dashboard/faqs" },
  { title: "Footer Content", icon: Settings, path: "/dashboard/footer" },
  { title: "Server Content", icon: Server, path: "/dashboard/server" },
  { title: "Templates", icon: LayoutTemplate, path: "/dashboard/templates" },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-casa-navy">Casa Admin</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
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