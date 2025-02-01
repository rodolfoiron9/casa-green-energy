import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, MessageSquare, FileText } from "lucide-react";

export function DashboardMetrics() {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: async () => {
      const { data: leads, error: leadsError } = await supabase
        .from('leads')
        .select('*', { count: 'exact' });

      const { data: interactions, error: interactionsError } = await supabase
        .from('ai_chat_interactions')
        .select('*', { count: 'exact' });

      const { data: content, error: contentError } = await supabase
        .from('ai_content')
        .select('*', { count: 'exact' });

      if (leadsError || interactionsError || contentError) {
        throw new Error('Failed to fetch metrics');
      }

      return {
        totalLeads: leads?.length || 0,
        totalInteractions: interactions?.length || 0,
        totalContent: content?.length || 0,
      };
    },
  });

  if (isLoading) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics?.totalLeads}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Interactions</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics?.totalInteractions}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Content</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics?.totalContent}</div>
        </CardContent>
      </Card>
    </div>
  );
}