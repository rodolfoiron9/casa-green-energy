import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="flex h-16 items-center gap-x-4 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="relative flex flex-1 items-center">
            <Search className="pointer-events-none absolute left-4 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="h-10 w-full border-0 pl-11 pr-4 text-sm bg-gray-50 dark:bg-gray-800 focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-casa-gold text-[10px] font-medium text-casa-navy">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Profile"
            >
              <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}