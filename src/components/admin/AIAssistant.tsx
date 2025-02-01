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

export function AIAssistant() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<AIModel>("gemini");

  const handleSubmit = async () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsLoading(true);
    try {
      console.log('Sending request to AI with model:', selectedModel);
      const result = await handleChatRequest(message, selectedModel);
      console.log('Received AI response:', result);
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
    </Card>
  );
}