import { ReactNode } from "react";
import { AdminSidebarNav } from "./layout/AdminSidebarNav";
import {
  Database,
  Monitor,
  MessageSquare,
  Code,
  Settings,
  Users,
  LineChart,
  Bot,
  Rocket,
  Bug,
  FileText,
  Layout,
  FormInput,
  Key,
  Download,
  UserPlus,
  Mail,
  HelpCircle,
  Server,
  FileTemplate,
  Calendar,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: <Layout className="h-4 w-4" />,
        status: 'active' as const,
      },
    ],
  },
  {
    title: "Core Features",
    items: [
      {
        title: "Database Management",
        href: "/admin/database",
        icon: <Database className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "System Monitoring",
        href: "/admin/monitoring",
        icon: <Monitor className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Chat Interface",
        href: "/admin/chat",
        icon: <MessageSquare className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Code Management",
        href: "/admin/code",
        icon: <Code className="h-4 w-4" />,
        status: 'in-development' as const,
      },
      {
        title: "Bug Detection",
        href: "/admin/bugs",
        icon: <Bug className="h-4 w-4" />,
        status: 'in-development' as const,
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        title: "Blog Posts",
        href: "/admin/blog",
        icon: <FileText className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Forms",
        href: "/admin/forms",
        icon: <FormInput className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "FAQs",
        href: "/admin/faqs",
        icon: <HelpCircle className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Templates",
        href: "/admin/templates",
        icon: <FileTemplate className="h-4 w-4" />,
        status: 'active' as const,
      },
    ],
  },
  {
    title: "Business Management",
    items: [
      {
        title: "Leads",
        href: "/admin/leads",
        icon: <Users className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Bookings",
        href: "/admin/bookings",
        icon: <Calendar className="h-4 w-4" />,
        status: 'coming-soon' as const,
      },
      {
        title: "Subscribers",
        href: "/admin/subscribers",
        icon: <Mail className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Downloads",
        href: "/admin/downloads",
        icon: <Download className="h-4 w-4" />,
        status: 'active' as const,
      },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      {
        title: "Content Generation",
        href: "/admin/content",
        icon: <Bot className="h-4 w-4" />,
        status: 'in-development' as const,
      },
      {
        title: "Growth Analytics",
        href: "/admin/growth",
        icon: <Rocket className="h-4 w-4" />,
        status: 'coming-soon' as const,
      },
      {
        title: "Revenue Analytics",
        href: "/admin/revenue",
        icon: <LineChart className="h-4 w-4" />,
        status: 'coming-soon' as const,
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "API Keys",
        href: "/admin/api-keys",
        icon: <Key className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Server",
        href: "/admin/server",
        icon: <Server className="h-4 w-4" />,
        status: 'active' as const,
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: <Settings className="h-4 w-4" />,
        status: 'active' as const,
      },
    ],
  },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">
      <div className="flex">
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white dark:bg-neutral-800">
          <div className="flex h-full flex-col overflow-y-auto px-4 py-8">
            <h2 className="mb-8 px-2 text-lg font-semibold">Casa Energy Admin</h2>
            <div className="space-y-6">
              {sidebarItems.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-2 px-2 text-sm font-semibold text-neutral-500">
                    {section.title}
                  </h3>
                  <AdminSidebarNav items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto pl-64">
          {children}
        </main>
      </div>
    </div>
  );
}