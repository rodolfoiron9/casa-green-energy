import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Download, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const DatabasePage = () => {
  const [tables, setTables] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastBackup, setLastBackup] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchDatabaseInfo = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('ai_analytics')
        .select('created_at')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;

      // Get table information
      const tablesList = [
        'ai_analytics',
        'ai_chat_interactions',
        'ai_content',
        'api_keys',
        'blog_posts',
        'leads',
        'subscribers',
        'templates'
      ];

      const tablesData = await Promise.all(
        tablesList.map(async (tableName) => {
          const { count } = await supabase
            .from(tableName)
            .select('*', { count: 'exact', head: true });
          return { name: tableName, count };
        })
      );

      setTables(tablesData);
      setLastBackup(data?.[0]?.created_at ? new Date(data[0].created_at).toLocaleString() : 'Never');
    } catch (error) {
      console.error('Error fetching database info:', error);
      toast({
        title: "Error",
        description: "Failed to fetch database information",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDatabaseInfo();
  }, []);

  const handleBackup = async () => {
    toast({
      title: "Backup Started",
      description: "Your database backup has been initiated.",
    });
    // Here you would implement the actual backup logic
  };

  const handleRefresh = () => {
    fetchDatabaseInfo();
    toast({
      title: "Refreshing",
      description: "Updating database information...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Database Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={handleBackup}>
            <Download className="w-4 h-4 mr-2" />
            Backup Database
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tables.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tables.reduce((acc, table) => acc + (table.count || 0), 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lastBackup || 'Never'}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Database Tables</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table Name</TableHead>
                <TableHead>Record Count</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                </TableRow>
              ) : tables.map((table) => (
                <TableRow key={table.name}>
                  <TableCell className="font-medium">{table.name}</TableCell>
                  <TableCell>{table.count || 0}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabasePage;