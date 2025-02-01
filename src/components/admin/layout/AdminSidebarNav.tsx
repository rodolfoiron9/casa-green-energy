import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
    status?: 'active' | 'coming-soon' | 'in-development';
  }[];
}

export function AdminSidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="w-full"
        >
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2",
              location.pathname === item.href && "bg-accent",
              item.status === 'coming-soon' && "opacity-70",
              item.status === 'in-development' && "text-blue-500"
            )}
          >
            {item.icon}
            <span>{item.title}</span>
            {item.status === 'coming-soon' && (
              <span className="ml-auto text-xs text-muted-foreground">Soon</span>
            )}
            {item.status === 'in-development' && (
              <span className="ml-auto text-xs text-blue-500">Dev</span>
            )}
          </Button>
        </Link>
      ))}
    </nav>
  );
}