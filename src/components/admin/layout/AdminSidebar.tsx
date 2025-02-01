import { useState } from "react";
import { LayoutDashboard, UserCog, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/admin/profile",
      icon: (
        <UserCog className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-white dark:bg-neutral-900 flex-shrink-0 border-r border-neutral-200 dark:border-neutral-800",
        open ? "w-64" : "w-20"
      )}
      animate={{ width: open ? "256px" : "80px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col flex-1">
        <Link to="/admin" className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 bg-casa-navy rounded-lg flex items-center justify-center">
            <span className="text-casa-gold font-bold">A</span>
          </div>
          {open && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-semibold text-lg"
            >
              Admin Panel
            </motion.span>
          )}
        </Link>
        <nav className="flex-1">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {link.icon}
                  {open && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}