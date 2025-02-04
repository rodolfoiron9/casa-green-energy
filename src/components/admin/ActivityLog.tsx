import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Activity, History } from "lucide-react";

export const ActivityLog = () => {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("admin_activity_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) throw error;
      return data;
    },
  });

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Activity Log</h2>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities?.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  {new Date(activity.created_at).toLocaleString()}
                </TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  {typeof activity.details === "object"
                    ? JSON.stringify(activity.details)
                    : activity.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};