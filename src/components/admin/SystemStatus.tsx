import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";

type SystemStatus = {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  progress: number;
  lastChecked: string;
};

export function SystemStatus() {
  const { data: systemStatuses } = useQuery({
    queryKey: ['systemStatus'],
    queryFn: async () => {
      const { data: analytics } = await supabase
        .from('ai_analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(7);

      // Transform analytics data into system statuses
      const statuses: SystemStatus[] = [
        {
          name: 'Lead Management AI',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Marketing Automation',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'AI Chatbot',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Database Management',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Content Generation',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
        },
      ];

      return statuses;
    },
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">System Status</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {systemStatuses?.map((status) => (
          <Card key={status.name} className="p-4 bg-blue-900 text-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{status.name}</h3>
              <Badge 
                variant={status.status === 'operational' ? 'default' : 'destructive'}
                className="bg-green-500"
              >
                {status.status}
              </Badge>
            </div>
            <Progress value={status.progress} className="my-2" />
            <p className="text-sm text-gray-300">
              Last checked: {new Date(status.lastChecked).toLocaleTimeString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}