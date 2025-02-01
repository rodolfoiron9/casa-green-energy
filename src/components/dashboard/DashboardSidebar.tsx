import {
  LayoutDashboard,
  FileText,
  Settings,
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
  Brain,
  MessageSquare,
  Bot,
  Zap,
  Database,
  Key,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  {
    group: "Overview",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    ],
  },
  {
    group: "AI Features",
    items: [
      { title: "AI Chat", icon: MessageSquare, path: "/dashboard/ai-chat" },
      { title: "AI Content", icon: Brain, path: "/dashboard/ai-content" },
      { title: "AI Analytics", icon: Zap, path: "/dashboard/ai-analytics" },
      { title: "Chatbot", icon: Bot, path: "/dashboard/chatbot" },
    ],
  },
  {
    group: "Lead Management",
    items: [
      { title: "Leads", icon: Users, path: "/dashboard/leads" },
      { title: "Subscribers", icon: Bell, path: "/dashboard/subscribers" },
      { title: "Forms", icon: FormInput, path: "/dashboard/forms" },
    ],
  },
  {
    group: "Content",
    items: [
      { title: "Blog Posts", icon: FileText, path: "/dashboard/blog-posts" },
      { title: "FAQs", icon: HelpCircle, path: "/dashboard/faqs" },
      { title: "Templates", icon: LayoutTemplate, path: "/dashboard/templates" },
    ],
  },
  {
    group: "Marketing",
    items: [
      { title: "Analytics", icon: BarChart, path: "/dashboard/analytics" },
      { title: "Email Campaigns", icon: Mail, path: "/dashboard/email-campaigns" },
      { title: "SEO", icon: Globe, path: "/dashboard/seo" },
    ],
  },
  {
    group: "System",
    items: [
      { title: "API Keys", icon: Key, path: "/dashboard/api-keys" },
      { title: "Database", icon: Database, path: "/dashboard/database" },
      { title: "Server Status", icon: Server, path: "/dashboard/server" },
      { title: "Security", icon: Shield, path: "/dashboard/security" },
    ],
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-casa-navy">Casa AI Admin</h1>
          <p className="text-sm text-gray-500 mt-1">AI-Powered Management Console</p>
        </div>
        
        {menuItems.map((group) => (
          <SidebarGroup key={group.group}>
            <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            <SidebarContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      data-active={location.pathname === item.path}
                    >
                      <Link 
                        to={item.path} 
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}