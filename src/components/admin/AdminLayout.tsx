import { ReactNode, useState } from "react";
import { AdminSidebarNav } from "./layout/AdminSidebarNav";
import { sidebarItems, userMenuItems } from "./layout/AdminSidebarItems";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="flex">
        <aside 
          className={cn(
            "fixed left-0 top-0 z-40 h-screen border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            isCollapsed ? "w-16" : "w-64",
            "transition-all duration-300"
          )}
        >
          <div className="flex h-full flex-col">
            {/* Header Section */}
            <div className="flex-none p-4 border-b">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/logo.png" alt="Casa Energy" />
                  <AvatarFallback>CE</AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div>
                    <h2 className="text-sm font-semibold">Casa Energy</h2>
                    <p className="text-xs text-muted-foreground">Enterprise</p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto px-3 py-6">
              <nav className="space-y-6">
                {sidebarItems.map((section, index) => (
                  <div key={index} className="space-y-3">
                    {!isCollapsed && (
                      <h3 className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {section.title}
                      </h3>
                    )}
                    <AdminSidebarNav items={section.items} />
                  </div>
                ))}
              </nav>
            </div>

            {/* User Menu Section */}
            <div className="flex-none p-4 border-t">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                      <>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium">Admin User</p>
                          <p className="text-xs text-muted-foreground">admin@casaenergy.com</p>
                        </div>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem
                      key={item.href}
                      onClick={() => navigate(item.href)}
                      className="flex items-center gap-2"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={cn(
          "flex-1 overflow-y-auto transition-all duration-300",
          isCollapsed ? "pl-16" : "pl-64"
        )}>
          <div className="container py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}