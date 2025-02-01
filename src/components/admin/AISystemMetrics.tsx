import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Chart } from "@/components/ui/chart";
import { Settings, MessageSquare, FileText, Users, Activity } from "lucide-react";

interface MetricCard {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative';
}

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

  const metricCards: MetricCard[] = [
    {
      title: "AI Chat Sessions",
      value: metrics?.length || 0,
      description: "Total AI chat interactions",
      icon: <MessageSquare className="h-6 w-6 text-casa-gold" />,
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Content Generated",
      value: metrics?.filter(m => m.metric_name === 'content_generated').length || 0,
      description: "AI-generated content pieces",
      icon: <FileText className="h-6 w-6 text-casa-gold" />,
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Active Users",
      value: metrics?.filter(m => m.metric_name === 'active_users').length || 0,
      description: "Users engaging with AI features",
      icon: <Users className="h-6 w-6 text-casa-gold" />,
      change: "+15%",
      changeType: "positive"
    },
    {
      title: "System Health",
      value: "98%",
      description: "Overall AI system performance",
      icon: <Activity className="h-6 w-6 text-casa-gold" />,
      change: "+2%",
      changeType: "positive"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">AI System Metrics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((card) => (
          <Card key={card.title} className="p-6 bg-blue-900 text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  {card.icon}
                  <p className="text-sm opacity-80">{card.title}</p>
                </div>
                <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
                <p className="text-sm mt-2">
                  {card.description}
                </p>
                {card.change && (
                  <p className={`text-sm mt-2 ${
                    card.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {card.change} from last month
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}