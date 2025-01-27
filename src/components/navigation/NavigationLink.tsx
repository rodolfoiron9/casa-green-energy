import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  href: string;
  icon: React.ReactElement<LucideIcon>;
  title: string;
}

export const NavigationLink = ({ href, icon, title }: NavigationLinkProps) => (
  <Link
    to={href}
    className="text-casa-navy hover:text-casa-blue transition-colors px-4 py-2 flex items-center gap-2 font-medium"
  >
    {icon}
    {title}
  </Link>
);