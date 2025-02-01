import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, FileText, Activity } from "lucide-react";

export function DatabaseMetrics() {
  const { data: metrics } = useQuery({
    queryKey: ['databaseMetrics'],
    queryFn: async () => {
      const tables = ['leads', 'ai_chat_interactions', 'marketing_campaigns', 'ai_content'];
      const counts = await Promise.all(
        tables.map(async (table) => {
          const { count } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });
          return { table, count: count || 0 };
        })
      );
      return counts;
    },
  });

  const cards = [
    {
      title: "Total Leads",
      value: metrics?.find(m => m.table === 'leads')?.count || 0,
      icon: Users,
      description: "Active leads in database"
    },
    {
      title: "Chat Interactions",
      value: metrics?.find(m => m.table === 'ai_chat_interactions')?.count || 0,
      icon: Database,
      description: "AI chat history"
    },
    {
      title: "Marketing Campaigns",
      value: metrics?.find(m => m.table === 'marketing_campaigns')?.count || 0,
      icon: FileText,
      description: "Active campaigns"
    },
    {
      title: "AI Content",
      value: metrics?.find(m => m.table === 'ai_content')?.count || 0,
      icon: Activity,
      description: "Generated content pieces"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}