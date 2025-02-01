import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Key, Loader2, Copy, Trash } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const ApiKeys = () => {
  const [newKeyName, setNewKeyName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get current user's ID on component mount
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        setUserId(session.user.id);
      }
    };
    getCurrentUser();
  }, []);

  // Fetch API keys
  const { data: apiKeys, isLoading } = useQuery({
    queryKey: ['api-keys'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('api_keys')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Create new API key
  const createKeyMutation = useMutation({
    mutationFn: async (name: string) => {
      if (!userId) throw new Error("User not authenticated");
      
      const key = `casa_${crypto.randomUUID()}`;
      const { data, error } = await supabase
        .from('api_keys')
        .insert({
          name,
          key,
          user_id: userId
        })
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
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create API key",
      });
      console.error('Error creating API key:', error);
    }
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
        variant: "destructive",
        title: "Error",
        description: "Failed to delete API key",
      });
      console.error('Error deleting API key:', error);
    }
  });

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a key name",
      });
      return;
    }
    if (!userId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please login to create API keys",
      });
      return;
    }
    createKeyMutation.mutate(newKeyName);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Success",
        description: "API key copied to clipboard",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy API key",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">API Keys</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New API Key</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateKey} className="flex gap-4">
            <Input
              placeholder="Enter key name"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              className="max-w-sm"
            />
            <Button type="submit" disabled={createKeyMutation.isPending}>
              {createKeyMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Key className="w-4 h-4 mr-2" />
              )}
              Generate New Key
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total API Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : apiKeys?.length || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active API Keys</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys?.map((apiKey) => (
                  <TableRow key={apiKey.id}>
                    <TableCell>{apiKey.name}</TableCell>
                    <TableCell className="font-mono">
                      {apiKey.key.substring(0, 12)}...
                    </TableCell>
                    <TableCell>
                      {new Date(apiKey.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteKeyMutation.mutate(apiKey.id)}
                        disabled={deleteKeyMutation.isPending}
                      >
                        <Trash className="w-4 h-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {apiKeys?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No API keys found. Create one to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiKeys;