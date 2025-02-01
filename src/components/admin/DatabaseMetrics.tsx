import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TableName } from "@/types/database";
import { useToast } from "@/hooks/use-toast";

export function DatabaseMetrics() {
  const { toast } = useToast();
  const tables: TableName[] = ["content", "leads", "blog_posts"];

  const { data: metrics } = useQuery({
    queryKey: ["database-metrics"],
    queryFn: async () => {
      try {
        const results = await Promise.all(
          tables.map(async (table) => {
            const { count } = await supabase
              .from(table)
              .select("*", { count: "exact", head: true });
            return { table, count: count || 0 };
          })
        );
        return results;
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch database metrics",
          variant: "destructive",
        });
        return [];
      }
    },
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics?.map(({ table, count }) => (
        <Card key={table} className="p-4">
          <h3 className="font-medium">{table}</h3>
          <p className="text-2xl font-bold">{count}</p>
        </Card>
      ))}
    </div>
  );
}