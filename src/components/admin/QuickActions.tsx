import { FileText, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function QuickActions() {
  return (
    <Card className="p-6 bg-blue-900 text-white">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/admin/new-post">
          <Card className="p-4 bg-blue-800 hover:bg-blue-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-yellow-400" />
              <span>New Post</span>
            </div>
          </Card>
        </Link>
        <Link to="/admin/settings">
          <Card className="p-4 bg-blue-800 hover:bg-blue-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-yellow-400" />
              <span>Settings</span>
            </div>
          </Card>
        </Link>
      </div>
    </Card>
  );
}