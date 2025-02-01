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
  Server,
  LayoutTemplate,
  FormInput,
  Bell,
  BarChart,
  Mail,
  Globe,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  
  // Lead Management
  { title: "Leads", icon: Users, path: "/dashboard/leads" },
  { title: "Subscribers", icon: Bell, path: "/dashboard/subscribers" },
  { title: "Forms", icon: FormInput, path: "/dashboard/forms" },
  
  // Content Management
  { title: "Blog Posts", icon: FileText, path: "/dashboard/blog-posts" },
  { title: "FAQs", icon: HelpCircle, path: "/dashboard/faqs" },
  { title: "Templates", icon: LayoutTemplate, path: "/dashboard/templates" },
  
  // Marketing
  { title: "Analytics", icon: BarChart, path: "/dashboard/analytics" },
  { title: "Email Campaigns", icon: Mail, path: "/dashboard/email-campaigns" },
  { title: "SEO", icon: Globe, path: "/dashboard/seo" },
  
  // System
  { title: "API Keys", icon: Key, path: "/dashboard/api-keys" },
  { title: "Database", icon: Database, path: "/dashboard/database" },
  { title: "Server Status", icon: Server, path: "/dashboard/server" },
  { title: "Security", icon: Shield, path: "/dashboard/security" },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-casa-navy">Casa Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Management Console</p>
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