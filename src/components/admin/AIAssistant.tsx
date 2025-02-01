import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { toast } from "sonner";
import { handleChatRequest } from "@/api/chat";
import { MessageSquare, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { AIModel } from "@/api/chat";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function AIAssistant() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<AIModel>("gemini");

  // Fetch recent AI interactions to provide context
  const { data: recentInteractions } = useQuery({
    queryKey: ['aiInteractions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_chat_interactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching AI interactions:', error);
        throw error;
      }

      return data;
    },
  });

  const handleSubmit = async () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsLoading(true);
    try {
      // Get current user session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) {
        throw new Error('User not authenticated');
      }

      console.log('Sending request to AI with model:', selectedModel);
      const result = await handleChatRequest(message, selectedModel);
      console.log('Received AI response:', result);
      setResponse(result.response);
      toast.success(`Response received from ${selectedModel}`);

      // Log successful interaction
      await supabase.from('ai_analytics').insert({
        metric_name: 'ai_interaction_success',
        metric_value: {
          model: selectedModel,
          message_length: message.length,
          response_length: result.response.length,
          timestamp: new Date().toISOString()
        },
        user_id: session.user.id
      });

    } catch (error: any) {
      console.error('AI Assistant error:', error);
      toast.error(error.message || "Failed to get AI response. Please try again.");

      // Get current user session for error logging
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        // Log error for monitoring
        await supabase.from('ai_analytics').insert({
          metric_name: 'ai_interaction_error',
          metric_value: {
            model: selectedModel,
            error: error.message,
            timestamp: new Date().toISOString()
          },
          user_id: session.user.id
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-casa-gold" />
        <h2 className="text-xl font-semibold">AI Assistant</h2>
      </div>

      <Select
        value={selectedModel}
        onValueChange={(value) => setSelectedModel(value as AIModel)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select AI Model" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gemini">Gemini</SelectItem>
          <SelectItem value="deepseek">Deepseek</SelectItem>
        </SelectContent>
      </Select>

      <Textarea
        placeholder="Ask me anything about leads, marketing, or administrative tasks..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[100px]"
      />

      {response && (
        <div className="p-4 bg-secondary rounded-lg">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}

      <Button 
        onClick={handleSubmit} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {recentInteractions && recentInteractions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Recent Interactions</h3>
          <div className="space-y-2">
            {recentInteractions.map((interaction) => (
              <div key={interaction.id} className="text-sm text-gray-500">
                <p className="font-medium">{interaction.user_message.substring(0, 50)}...</p>
                <p className="text-xs">
                  {new Date(interaction.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}