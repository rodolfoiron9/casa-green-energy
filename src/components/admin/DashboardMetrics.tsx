import { Users, MessageSquare, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function DashboardMetrics() {
  const { data: usersCount } = useQuery({
    queryKey: ['usersCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  const { data: messagesCount } = useQuery({
    queryKey: ['messagesCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('ai_chat_interactions')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  const { data: contentCount } = useQuery({
    queryKey: ['contentCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('ai_content')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-white dark:bg-casa-navy shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">Total Users</CardTitle>
          <Users className="h-4 w-4 text-casa-gold" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-casa-navy dark:text-white">{usersCount || 0}</div>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-casa-navy shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">AI Chat Messages</CardTitle>
          <MessageSquare className="h-4 w-4 text-casa-gold" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-casa-navy dark:text-white">{messagesCount || 0}</div>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-casa-navy shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-800 dark:text-gray-200">AI Generated Content</CardTitle>
          <FileText className="h-4 w-4 text-casa-gold" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-casa-navy dark:text-white">{contentCount || 0}</div>
        </CardContent>
      </Card>
    </div>
  );
}