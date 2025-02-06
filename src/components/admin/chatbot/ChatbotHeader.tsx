import { MessageSquare } from "lucide-react";

export const ChatbotHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <MessageSquare className="w-6 h-6 text-casa-gold animate-pulse" />
      <h2 className="text-2xl font-bold text-casa-navy">Chatbot Management</h2>
    </div>
  );
};