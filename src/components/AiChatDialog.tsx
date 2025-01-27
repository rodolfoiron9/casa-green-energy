import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { handleChatRequest, AIModel } from "../api/chat";

export default function AiChatDialog() {
  const [isOpen, setIsOpen] = useState(false);
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
      const result = await handleChatRequest(message, selectedModel);
      setResponse(result.response);
      toast.success(`Response generated using ${selectedModel} model`);
    } catch (error) {
      toast.error("Failed to get response. Please try again.");
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20
                   flex items-center gap-3 p-6 rounded-xl"
        >
          <MessageSquare className="w-6 h-6" />
          <div className="text-left">
            <h3 className="font-semibold">Chat with AI Assistant</h3>
            <p className="text-sm opacity-80">Get instant help</p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with our AI Assistant</DialogTitle>
          <DialogDescription>
            Select a model and start chatting with our AI assistant.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Select
            value={selectedModel}
            onValueChange={(value) => setSelectedModel(value as AIModel)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gemini">Gemini</SelectItem>
              <SelectItem value="deepseek">Deepseek</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px]"
          />
          {response && (
            <div className="p-4 bg-secondary rounded-lg">
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          )}
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}