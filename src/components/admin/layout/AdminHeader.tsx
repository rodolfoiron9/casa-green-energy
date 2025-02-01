import { Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminHeader() {
  return (
    <header className="border-b border-blue-800 bg-casa-navy p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          <div className="hidden md:flex items-center gap-2 ml-8">
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 bg-blue-900/50 border-blue-700 text-white placeholder:text-gray-400"
            />
            <Button variant="ghost" size="icon" className="text-gray-300">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}