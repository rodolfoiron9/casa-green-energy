import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AIAssistantDashboard } from "@/components/admin/AIAssistantDashboard";
import { AIChatSessions } from "@/components/admin/AIChatSessions";
import { ProfileSettings } from "@/components/admin/settings/ProfileSettings";
import { AISettings } from "@/components/admin/settings/AISettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, 
  Database,
  Shield,
  MessageSquare,
  Code,
  GitBranch,
  Bug,
  Users,
  LineChart,
  Briefcase,
  DollarSign,
  FileText,
  Search,
  Mail,
  BarChart,
  HeadphonesIcon,
  Brain,
  TrendingUp,
  Settings
} from "lucide-react";

export default function Admin() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="core" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Core Features
              </TabsTrigger>
              <TabsTrigger value="management" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Management
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Marketing
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                Chatbot
              </TabsTrigger>
              <TabsTrigger value="growth" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Growth
              </TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">Database Management</h3>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Autonomous CRUD operations and schema management with Supabase
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      Enhance
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      Fix Bugs
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">System Monitoring</h3>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Real-time performance tracking and error detection
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      Enhance
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      Fix Bugs
                    </button>
                  </div>
                </div>

                {/* Add other core feature cards similarly */}
              </div>
            </TabsContent>

            <TabsContent value="management" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">Lead Distribution</h3>
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    AI-powered lead matching and distribution system
                  </p>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Create
                  </button>
                </div>

                {/* Add other management feature cards similarly */}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">Content Generation</h3>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">In Development</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    AI-powered SEO content and marketing material creation
                  </p>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Enhance
                  </button>
                </div>

                {/* Add other marketing feature cards similarly */}
              </div>
            </TabsContent>

            <TabsContent value="chatbot" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bot className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">Support Chatbot</h3>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">In Development</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    24/7 AI chatbot for homeowners and contractors
                  </p>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Enhance
                  </button>
                </div>

                {/* Add other chatbot feature cards similarly */}
              </div>
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-semibold">Growth Analytics</h3>
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    AI-driven business insights and growth recommendations
                  </p>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Create
                  </button>
                </div>

                {/* Add other growth feature cards similarly */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
