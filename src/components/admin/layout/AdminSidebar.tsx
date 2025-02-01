import { 
  LayoutDashboard, 
  Settings,
  User,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', view: 'dashboard', icon: LayoutDashboard },
  { name: 'Profile', view: 'profile', icon: User },
  { name: 'Settings', view: 'settings', icon: Settings },
];

interface AdminSidebarProps {
  currentView: string;
  onViewChange: (view: 'dashboard' | 'profile' | 'settings') => void;
}

export function AdminSidebar({ currentView, onViewChange }: AdminSidebarProps) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-casa-navy px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <a href="/" className="flex items-center gap-2 text-white">
            <Home className="h-6 w-6" />
            <span className="text-xl font-semibold">Casa Energy</span>
          </a>
        </div>
        
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onViewChange(item.view as 'dashboard' | 'profile' | 'settings')}
                      className={cn(
                        "group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6",
                        currentView === item.view
                          ? "bg-blue-800 text-white"
                          : "text-gray-300 hover:bg-blue-800/50 hover:text-white"
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {item.name}
                    </button>
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