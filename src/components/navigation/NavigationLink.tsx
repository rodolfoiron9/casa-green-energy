import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink = ({ to, children, className }: NavigationLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 text-white/90 hover:text-casa-gold transition-colors duration-300 relative group",
        "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-casa-gold",
        "after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
    >
      {children}
    </Link>
  );
};