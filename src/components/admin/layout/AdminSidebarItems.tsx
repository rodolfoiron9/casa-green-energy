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
  Mail,
  HelpCircle,
  Server,
  Calendar,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: JSX.Element;
  status: 'active' | 'coming-soon' | 'in-development';
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarItems: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: <Layout className="h-4 w-4" />,
        status: 'active',
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
        status: 'active',
      },
      {
        title: "System Monitoring",
        href: "/admin/monitoring",
        icon: <Monitor className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Chat Interface",
        href: "/admin/chat",
        icon: <MessageSquare className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Code Management",
        href: "/admin/code",
        icon: <Code className="h-4 w-4" />,
        status: 'in-development',
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
        status: 'active',
      },
      {
        title: "Forms",
        href: "/admin/forms",
        icon: <FormInput className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "FAQs",
        href: "/admin/faqs",
        icon: <HelpCircle className="h-4 w-4" />,
        status: 'active',
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
        status: 'active',
      },
      {
        title: "Bookings",
        href: "/admin/bookings",
        icon: <Calendar className="h-4 w-4" />,
        status: 'coming-soon',
      },
      {
        title: "Subscribers",
        href: "/admin/subscribers",
        icon: <Mail className="h-4 w-4" />,
        status: 'active',
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
        status: 'in-development',
      },
      {
        title: "Growth Analytics",
        href: "/admin/growth",
        icon: <Rocket className="h-4 w-4" />,
        status: 'coming-soon',
      },
      {
        title: "Revenue Analytics",
        href: "/admin/revenue",
        icon: <LineChart className="h-4 w-4" />,
        status: 'coming-soon',
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
        status: 'active',
      },
      {
        title: "Server",
        href: "/admin/server",
        icon: <Server className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: <Settings className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
];