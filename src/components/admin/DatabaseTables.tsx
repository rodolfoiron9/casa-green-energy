import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { TableName } from "@/types/database";
import { useToast } from "@/components/ui/use-toast";

interface TableInfo {
  table_name: TableName;
  row_count: number;
  last_updated: string;
}

export function DatabaseTables() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: tables, isLoading } = useQuery({
    queryKey: ["database-tables"],
    queryFn: async () => {
      const tableNames: TableName[] = ["content", "leads", "blog_posts", "marketing_campaigns", "subscribers", "templates"];
      
      const tablesInfo = await Promise.all(
        tableNames.map(async (tableName) => {
          const { count: rowCount } = await supabase
            .from(tableName)
            .select("*", { count: "exact", head: true });

          const { data: lastRecord } = await supabase
            .from(tableName)
            .select("updated_at")
            .order("updated_at", { ascending: false })
            .limit(1);

          return {
            table_name: tableName,
            row_count: rowCount || 0,
            last_updated: lastRecord?.[0]?.updated_at || new Date().toISOString(),
          };
        })
      );

      return tablesInfo;
    },
  });

  const handleRefresh = async () => {
    try {
      await queryClient.invalidateQueries({ queryKey: ["database-tables"] });
      toast({
        title: "Cache cleared",
        description: "Database information has been refreshed",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to refresh database information",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading database information...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Database Tables</h2>
        <Button onClick={handleRefresh} size="sm" variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      <div className="grid gap-4">
        {tables?.map((table) => (
          <div
            key={table.table_name}
            className="p-4 rounded-lg border bg-card text-card-foreground"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{table.table_name}</h3>
                <p className="text-sm text-muted-foreground">
                  {table.row_count} rows
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Last updated: {format(new Date(table.last_updated), "PPp")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}