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
    className="text-casa-gold hover:text-casa-gold/90 transition-colors px-4 py-2 flex items-center gap-2"
  >
    {icon}
    {title}
  </Link>
);