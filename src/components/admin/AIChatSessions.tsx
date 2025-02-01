import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface ChatSession {
  id: string;
  created_at: string;
  user_message: string;
  ai_response: string;
  metadata: {
    status?: 'active' | 'completed' | 'error';
    duration?: number;
    tokens?: number;
  };
}

export function AIChatSessions() {
  const { data: sessions, isLoading } = useQuery({
    queryKey: ['ai-chat-sessions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_chat_interactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return data as ChatSession[];
    },
  });

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'completed':
        return 'bg-blue-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return <div>Loading sessions...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Recent AI Chat Sessions
        </CardTitle>
        <CardDescription>
          View and manage recent AI chat interactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>User Message</TableHead>
              <TableHead>AI Response</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions?.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-medium">
                  {formatDate(session.created_at)}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {session.user_message}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {session.ai_response}
                </TableCell>
                <TableCell>
                  <Badge 
                    className={`${getStatusColor(session.metadata?.status)}`}
                  >
                    {session.metadata?.status || 'unknown'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {session.metadata?.duration ? `${session.metadata.duration}ms` : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}