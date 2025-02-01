import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, FileText, Users, Activity } from "lucide-react";
import { MetricCard } from "./metrics/MetricCard";
import { MetricsChart } from "./metrics/MetricsChart";

export function AISystemMetrics() {
  const { data: metrics } = useQuery({
    queryKey: ['aiMetrics'],
    queryFn: async () => {
      const { data: analytics } = await supabase
        .from('ai_analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      return analytics;
    },
  });

  const metricCards = [
    {
      title: "AI Chat Sessions",
      value: metrics?.length || 0,
      description: "Total AI chat interactions",
      icon: MessageSquare,
      change: "+12%",
      changeType: "positive" as const
    },
    {
      title: "Content Generated",
      value: metrics?.filter(m => m.metric_name === 'content_generated').length || 0,
      description: "AI-generated content pieces",
      icon: FileText,
      change: "+8%",
      changeType: "positive" as const
    },
    {
      title: "Active Users",
      value: metrics?.filter(m => m.metric_name === 'active_users').length || 0,
      description: "Users engaging with AI features",
      icon: Users,
      change: "+15%",
      changeType: "positive" as const
    },
    {
      title: "System Health",
      value: "98%",
      description: "Overall AI system performance",
      icon: Activity,
      change: "+2%",
      changeType: "positive" as const
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">AI System Metrics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((card) => (
          <MetricCard key={card.title} {...card} />
        ))}
      </div>
      <MetricsChart data={metrics || []} />
    </div>
  );
}