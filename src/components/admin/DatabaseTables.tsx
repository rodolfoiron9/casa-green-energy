import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { TableInfo, TableName } from "@/types/database";
import { toast } from "sonner";

const TABLES: TableName[] = [
  "content",
  "leads",
  "blog_posts",
  "marketing_campaigns",
  "subscribers"
];

export function DatabaseTables() {
  const { data: tables } = useQuery({
    queryKey: ["database-tables"],
    queryFn: async () => {
      const results = await Promise.all(
        TABLES.map(async (tableName) => {
          const { count, error: countError } = await supabase
            .from(tableName)
            .select("*", { count: "exact", head: true });

          if (countError) {
            toast.error(`Error fetching ${tableName} count: ${countError.message}`);
            return null;
          }

          const { data: lastRecord, error: lastRecordError } = await supabase
            .from(tableName)
            .select("updated_at")
            .order("updated_at", { ascending: false })
            .limit(1);

          if (lastRecordError) {
            toast.error(`Error fetching ${tableName} last update: ${lastRecordError.message}`);
            return null;
          }

          return {
            table_name: tableName,
            row_count: count || 0,
            last_updated: lastRecord?.[0]?.updated_at || "Never"
          } as TableInfo;
        })
      );

      return results.filter((result): result is TableInfo => result !== null);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Database Tables</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Table Name</TableHead>
              <TableHead>Row Count</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tables?.map((table) => (
              <TableRow key={table.table_name}>
                <TableCell className="font-medium">
                  {table.table_name.charAt(0).toUpperCase() + 
                   table.table_name.slice(1).replace(/_/g, ' ')}
                </TableCell>
                <TableCell>{table.row_count}</TableCell>
                <TableCell>
                  {new Date(table.last_updated).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}