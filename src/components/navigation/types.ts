import { LucideIcon } from "lucide-react";

export interface SubmenuItem {
  title: string;
  href: string;
  icon?: React.ReactElement<LucideIcon>;
}

export interface MenuItem {
  title: string;
  href: string;
  icon: React.ReactElement<LucideIcon>;
  submenu?: SubmenuItem[];
}