import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText } from "lucide-react";

interface Template {
  id: string;
  name: string;
  content: string;
  type: 'page' | 'email' | 'form';
  created_at: string;
}

async function fetchTemplates() {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Template[];
}

export default function Templates() {
  const { toast } = useToast();
  const { data: templates, isLoading, error } = useQuery({
    queryKey: ['templates'],
    queryFn: fetchTemplates,
    onError: (error) => {
      console.error('Error fetching templates:', error);
      toast({
        title: "Error",
        description: "Failed to load templates. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Templates</h1>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500">
              Failed to load templates. Please try again.
            </div>
          )}

          {templates && templates.length === 0 && (
            <div className="text-center text-gray-500">
              No templates found. Create your first template to get started.
            </div>
          )}

          {templates && templates.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {template.name}
                    </TableCell>
                    <TableCell className="capitalize">{template.type}</TableCell>
                    <TableCell>
                      {new Date(template.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}