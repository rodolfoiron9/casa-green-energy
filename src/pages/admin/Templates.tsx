import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { format } from "date-fns";
import { Loader2, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Template {
  id: string;
  name: string;
  content: string;
  type: string;
  created_at: string;
}

export default function Templates() {
  const { toast } = useToast();

  const { data: templates, isLoading, error } = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      console.log("Fetching templates...");
      const { data, error } = await supabase
        .from("templates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching templates:", error);
        throw error;
      }

      console.log("Templates fetched:", data);
      return data as Template[];
    },
    meta: {
      errorMessage: "Failed to load templates",
    },
  });

  if (isLoading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-96">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-96">
            <p className="text-destructive">Error loading templates</p>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Templates</h1>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> New Template
            </Button>
          </div>

          {templates && templates.length > 0 ? (
            <div className="bg-background rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Created At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id} className="hover:bg-muted/50">
                      <TableCell className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {template.name}
                      </TableCell>
                      <TableCell className="capitalize">{template.type}</TableCell>
                      <TableCell>
                        {format(new Date(template.created_at), "PPP")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-10 border rounded-lg bg-background">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">No templates found</p>
              <p className="text-sm text-muted-foreground">
                Create your first template to get started
              </p>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}