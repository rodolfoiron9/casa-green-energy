import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Users, 
  MessageSquare, 
  Activity,
  AlertTriangle,
  CheckCircle 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MetricCard } from "@/components/admin/metrics/MetricCard";
import { MetricsChart } from "@/components/admin/metrics/MetricsChart";

interface DashboardMetric {
  title: string;
  value: string | number;
  description: string;
  icon: any;
  change?: string;
  changeType?: 'positive' | 'negative';
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [chartData, setChartData] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch leads count
        const { count: leadsCount } = await supabase
          .from('leads')
          .select('*', { count: 'exact', head: true });

        // Fetch chat interactions count
        const { count: chatCount } = await supabase
          .from('ai_chat_interactions')
          .select('*', { count: 'exact', head: true });

        // Set metrics
        setMetrics([
          {
            title: "Total Leads",
            value: leadsCount || 0,
            description: "Active leads in the system",
            icon: Users,
            change: "+12%",
            changeType: "positive"
          },
          {
            title: "Chat Interactions",
            value: chatCount || 0,
            description: "AI chat conversations",
            icon: MessageSquare,
            change: "+5%",
            changeType: "positive"
          },
          {
            title: "System Health",
            value: "98.5%",
            description: "System uptime and performance",
            icon: Activity,
            change: "-0.5%",
            changeType: "negative"
          },
          {
            title: "Conversion Rate",
            value: "24%",
            description: "Lead to customer conversion",
            icon: BarChart,
            change: "+2%",
            changeType: "positive"
          }
        ]);

        // Sample chart data - replace with real data
        setChartData([
          { name: 'Jan', value: 400 },
          { name: 'Feb', value: 300 },
          { name: 'Mar', value: 600 },
          { name: 'Apr', value: 800 },
          { name: 'May', value: 500 },
          { name: 'Jun', value: 700 },
        ]);

      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error fetching dashboard data",
          description: "Please try again later",
        });
      }
    };

    fetchDashboardData();
  }, [toast]);

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-6 bg-gradient-to-br from-casa-navy to-blue-900 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>All Systems Operational</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <AlertTriangle className="w-5 h-5" />
              <span>2 Warnings</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <Card className="p-6 bg-blue-900 text-white">
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <MetricsChart data={chartData} />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-blue-900 text-white">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {/* Add recent activity items here */}
            </div>
          </Card>

          <Card className="p-6 bg-blue-900 text-white">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="space-y-4">
              {/* Add system status items here */}
            </div>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}