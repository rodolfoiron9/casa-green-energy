import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created_at: string;
}

export default function ApiKeys() {
  const [newKeyName, setNewKeyName] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch API keys
  const { data: apiKeys, isLoading } = useQuery({
    queryKey: ['api-keys'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('api_keys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as ApiKey[];
    }
  });

  // Create new API key
  const createKeyMutation = useMutation({
    mutationFn: async (name: string) => {
      const key = crypto.randomUUID(); // Generate a random key
      const { data, error } = await supabase
        .from('api_keys')
        .insert([{ name, key }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['api-keys'] });
      setNewKeyName("");
      toast({
        title: "Success",
        description: "API key created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create API key",
        variant: "destructive",
      });
      console.error("Error creating API key:", error);
    },
  });

  // Delete API key
  const deleteKeyMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('api_keys')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['api-keys'] });
      toast({
        title: "Success",
        description: "API key deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete API key",
        variant: "destructive",
      });
      console.error("Error deleting API key:", error);
    },
  });

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a key name",
        variant: "destructive",
      });
      return;
    }
    createKeyMutation.mutate(newKeyName);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">API Keys</h2>
            <p className="text-muted-foreground">
              Manage your API keys for external integrations
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create New API Key</CardTitle>
            <CardDescription>
              Generate a new API key for your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateKey} className="flex gap-4">
              <Input
                placeholder="Enter key name"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="max-w-sm"
              />
              <Button 
                type="submit" 
                disabled={createKeyMutation.isPending}
              >
                {createKeyMutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="h-4 w-4 mr-2" />
                )}
                Generate Key
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your API Keys</CardTitle>
            <CardDescription>
              View and manage your existing API keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : !apiKeys?.length ? (
              <p className="text-muted-foreground text-center py-4">
                No API keys found. Create one to get started.
              </p>
            ) : (
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div
                    key={apiKey.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{apiKey.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Created on {new Date(apiKey.created_at).toLocaleDateString()}
                      </p>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        {apiKey.key}
                      </code>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteKeyMutation.mutate(apiKey.id)}
                      disabled={deleteKeyMutation.isPending}
                    >
                      {deleteKeyMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}