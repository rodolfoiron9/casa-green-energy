import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { TableName } from "@/types/database";
import { toast } from "sonner";

export function DatabaseMetrics() {
  const { data: metrics } = useQuery({
    queryKey: ["database-metrics"],
    queryFn: async () => {
      const tables: TableName[] = ["leads", "content", "blog_posts"];
      const results = await Promise.all(
        tables.map(async (table) => {
          const { count, error } = await supabase
            .from(table)
            .select("*", { count: "exact", head: true });
          
          if (error) {
            toast.error(`Error fetching ${table} count: ${error.message}`);
            return { table, count: 0 };
          }
          
          return { table, count: count || 0 };
        })
      );
      return results;
    }
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics?.map(({ table, count }) => (
        <Card key={table}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {table.charAt(0).toUpperCase() + table.slice(1).replace(/_/g, ' ')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{count}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}