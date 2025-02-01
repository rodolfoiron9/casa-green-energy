import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { toast } from "sonner";
import { handleChatRequest } from "@/api/chat";
import { MessageSquare, Loader2 } from "lucide-react";

export function AIAssistant() {
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
      const result = await handleChatRequest(message, "gemini");
      setResponse(result.response);
      toast.success("AI response received");
    } catch (error: any) {
      toast.error(error.message || "Failed to get AI response");
      console.error('AI Assistant error:', error);
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

      <Textarea
        placeholder="Ask me anything about the admin panel, data management, or marketing tasks..."
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
    </Card>
  );
}