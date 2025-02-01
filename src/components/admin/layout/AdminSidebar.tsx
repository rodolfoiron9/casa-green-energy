import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Bot,
  Settings,
  User,
  Home
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
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-casa-navy px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <Home className="h-6 w-6" />
            <span className="text-xl font-semibold">Casa Energy</span>
          </NavLink>
        </div>
        
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6",
                          isActive
                            ? "bg-blue-800 text-white"
                            : "text-gray-300 hover:bg-blue-800/50 hover:text-white"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}