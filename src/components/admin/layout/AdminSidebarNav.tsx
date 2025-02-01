import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  href: string;
  title: string;
  icon: JSX.Element;
  status?: 'active' | 'coming-soon' | 'in-development';
}

interface SidebarNavProps {
  items: NavItem[];
}

export function AdminSidebarNav({ items }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <Link key={item.href} to={item.href} className="block">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 font-normal hover:bg-accent/50",
              location.pathname === item.href && "bg-accent/50",
              "relative"
            )}
          >
            {item.icon}
            <span>{item.title}</span>
            {item.status === 'coming-soon' && (
              <span className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                Soon
              </span>
            )}
            {item.status === 'in-development' && (
              <span className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs">
                Dev
              </span>
            )}
          </Button>
        </Link>
      ))}
    </nav>
  );
}