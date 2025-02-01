import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminHeader() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="hidden md:flex items-center gap-2 ml-8">
            <Input
              type="search"
              placeholder="Search..."
              className="w-64"
            />
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-casa-gold rounded-full text-xs flex items-center justify-center text-casa-navy font-bold">3</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}