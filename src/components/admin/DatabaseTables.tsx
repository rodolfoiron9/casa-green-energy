import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface TableInfo {
  name: string;
  rowCount: number;
  lastUpdated: string;
}

export function DatabaseTables() {
  const { data: tables } = useQuery({
    queryKey: ['databaseTables'],
    queryFn: async () => {
      const tableNames = [
        'leads',
        'ai_chat_interactions',
        'marketing_campaigns',
        'ai_content',
        'marketing_content',
        'lead_interactions'
      ];
      
      const tablesInfo = await Promise.all(
        tableNames.map(async (table): Promise<TableInfo> => {
          const { count } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });
          
          const { data: lastRecord } = await supabase
            .from(table)
            .select('updated_at')
            .order('updated_at', { ascending: false })
            .limit(1)
            .single();

          return {
            name: table,
            rowCount: count || 0,
            lastUpdated: lastRecord?.updated_at || new Date().toISOString()
          };
        })
      );

      return tablesInfo;
    },
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
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tables?.map((table) => (
              <TableRow key={table.name}>
                <TableCell className="font-medium">{table.name}</TableCell>
                <TableCell>{table.rowCount}</TableCell>
                <TableCell>{new Date(table.lastUpdated).toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500">
                    Active
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}