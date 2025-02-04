import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface NavigationLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactElement<LucideIcon>;
  title?: string;
  to?: string;
}

export const NavigationLink = ({ href, children, className, icon, title }: NavigationLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "px-4 py-2 text-white/90 hover:text-casa-gold transition-colors duration-300 relative group flex items-center gap-2",
        "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-casa-gold",
        "after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
    >
      {icon}
      {title || children}
    </Link>
  );
};