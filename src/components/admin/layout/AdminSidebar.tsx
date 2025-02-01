import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Bot,
  Settings,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'AI Assistant', href: '/admin/ai-assistant', icon: Bot },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
  { name: 'Profile', href: '/admin/profile', icon: User },
];

export function AdminSidebar() {
  return (
    <div className="h-full w-64 flex-shrink-0 bg-casa-navy">
      <div className="flex h-16 items-center px-6">
        <img
          className="h-8 w-auto"
          src="/logo.svg"
          alt="Casa Energy"
        />
      </div>
      
      <nav className="mt-6 px-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-400 hover:bg-blue-600/10 hover:text-white"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}