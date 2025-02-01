import {
  LayoutDashboard,
  FileText,
  Settings,
  Database,
  Bot,
  Key,
  BookOpen,
  Calendar,
  Download,
  Users,
  Mail,
  HelpCircle,
  Server,
  FileCode,
  MessageSquare,
  Forms,
  Footprints,
  ScrollText,
  Templates,
  LineChart,
  Activity,
} from "lucide-react";

interface SidebarSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon: JSX.Element;
    status?: 'active' | 'coming-soon' | 'in-development';
  }[];
}

export const sidebarItems: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: <LayoutDashboard className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
  {
    title: "Content",
    items: [
      {
        title: "Blog Posts",
        href: "/admin/blog",
        icon: <BookOpen className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Forms",
        href: "/admin/forms",
        icon: <Forms className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "FAQs",
        href: "/admin/faqs",
        icon: <HelpCircle className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Footer Content",
        href: "/admin/footer",
        icon: <Footprints className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Server Content",
        href: "/admin/server-content",
        icon: <Server className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Leads",
        href: "/admin/leads",
        icon: <Users className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Bookings",
        href: "/admin/bookings",
        icon: <Calendar className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Downloads",
        href: "/admin/downloads",
        icon: <Download className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Subscribers",
        href: "/admin/subscribers",
        icon: <Mail className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Templates",
        href: "/admin/templates",
        icon: <Templates className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Database",
        href: "/admin/database",
        icon: <Database className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "AI Chat Bot",
        href: "/admin/chatbot",
        icon: <Bot className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "API Keys",
        href: "/admin/api-keys",
        icon: <Key className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Analytics",
        href: "/admin/analytics",
        icon: <LineChart className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Activity Logs",
        href: "/admin/activity",
        icon: <Activity className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
];

export const userMenuItems = [
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Documentation",
    href: "/admin/docs",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Support",
    href: "/admin/support",
    icon: <MessageSquare className="h-4 w-4" />,
  },
];