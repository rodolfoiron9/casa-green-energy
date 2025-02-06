import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { handleChatRequest } from "@/api/chat";
import type { AIModel } from "@/api/chat";

interface ChatInterfaceProps {
  selectedModel: AIModel;
}

export const ChatInterface = ({ selectedModel }: ChatInterfaceProps) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsLoading(true);
    try {
      const result = await handleChatRequest(message, selectedModel);
      setResponse(result.response);
      toast.success(`Response received from ${selectedModel}`);
    } catch (error: any) {
      console.error('AI Assistant error:', error);
      toast.error(error.message || "Failed to get AI response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Ask me anything about leads, marketing, or administrative tasks..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[100px] bg-white/5 backdrop-blur-sm border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
      />

      {response && (
        <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-casa-gold/20">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}

      <Button 
        onClick={handleSubmit} 
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-casa-navy to-casa-blue hover:from-casa-blue hover:to-casa-navy border border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300"
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
    </div>
  );
};