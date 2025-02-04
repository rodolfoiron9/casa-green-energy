import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface NavigationLinkProps {
  href?: string;
  to?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactElement<LucideIcon>;
  title?: string;
}

export const NavigationLink = ({ href, to, children, className, icon, title }: NavigationLinkProps) => {
  const linkProps = to ? { to } : { to: href || "/" };
  
  return (
    <Link
      {...linkProps}
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