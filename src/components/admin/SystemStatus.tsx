import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertTriangle } from "lucide-react";

type SystemStatus = {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  progress: number;
  lastChecked: string;
  description: string;
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

      const statuses: SystemStatus[] = [
        {
          name: 'Lead Management AI',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
          description: 'Matching and prioritizing leads'
        },
        {
          name: 'Marketing Automation',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
          description: 'Managing campaigns and content'
        },
        {
          name: 'AI Chatbot',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
          description: 'Handling user queries 24/7'
        },
        {
          name: 'Database Management',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
          description: 'Optimizing data operations'
        },
        {
          name: 'Content Generation',
          status: 'operational',
          progress: 100,
          lastChecked: new Date().toISOString(),
          description: 'Creating SEO-optimized content'
        },
      ];

      return statuses;
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">System Status</h2>
        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
          All Systems Operational
        </Badge>
      </div>
      
      <div className="grid gap-4">
        {systemStatuses?.map((status) => (
          <Card key={status.name} className="p-4 bg-white/5 backdrop-blur-sm border-white/10">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white">{status.name}</h3>
                  {status.status === 'operational' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                <p className="text-sm text-gray-400">{status.description}</p>
              </div>
              <div className="text-right">
                <Badge 
                  variant="outline"
                  className={
                    status.status === 'operational' 
                      ? 'bg-green-500/10 text-green-500 border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  }
                >
                  {status.status}
                </Badge>
                <p className="text-xs text-gray-400 mt-2">
                  Last checked: {new Date(status.lastChecked).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <Progress 
              value={status.progress} 
              className="mt-4 bg-white/10" 
              indicatorClassName="bg-green-500"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}