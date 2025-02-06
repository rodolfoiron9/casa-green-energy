import { MessageSquare } from "lucide-react";

export const AIAssistantHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <MessageSquare className="w-5 h-5 text-casa-gold" />
      <h2 className="text-xl font-semibold">AI Assistant</h2>
    </div>
  );
};