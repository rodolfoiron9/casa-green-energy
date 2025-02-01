import {
  LayoutDashboard,
  FileText,
  Settings,
  MessageSquare,
  Key,
  Database,
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
      { title: "Overview", icon: LayoutDashboard, path: "/dashboard" },
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
    group: "Content Management",
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
          <h1 className="text-2xl font-bold text-casa-navy">Casa Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Management Console</p>
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
                        className="flex items-center gap-2"
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