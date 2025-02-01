import {
  LayoutDashboard,
  PlayCircle,
  Boxes,
  FileText,
  Settings,
  Users,
  LineChart,
  Bot,
  Rocket,
  Bell,
  CreditCard,
  LogOut,
  User,
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
    title: "Platform",
    items: [
      {
        title: "Playground",
        href: "/admin/playground",
        icon: <PlayCircle className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Models",
        href: "/admin/models",
        icon: <Boxes className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Documentation",
        href: "/admin/docs",
        icon: <FileText className="h-4 w-4" />,
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
  {
    title: "Projects",
    items: [
      {
        title: "Design Engineering",
        href: "/admin/design",
        icon: <LayoutDashboard className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Sales & Marketing",
        href: "/admin/marketing",
        icon: <LineChart className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "AI Assistant",
        href: "/admin/ai",
        icon: <Bot className="h-4 w-4" />,
        status: 'active',
      },
      {
        title: "Growth",
        href: "/admin/growth",
        icon: <Rocket className="h-4 w-4" />,
        status: 'active',
      },
    ],
  },
];

export const userMenuItems = [
  {
    title: "Account",
    href: "/admin/account",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Billing",
    href: "/admin/billing",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: <Bell className="h-4 w-4" />,
  },
  {
    title: "Log out",
    href: "/auth/logout",
    icon: <LogOut className="h-4 w-4" />,
  },
];