import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { ChatbotConversation } from "@/types/database";

interface ConversationsListProps {
  conversations: ChatbotConversation[] | null;
  isLoading: boolean;
  onSelectConversation: (conversation: ChatbotConversation) => void;
}

export const ConversationsList = ({ 
  conversations, 
  isLoading, 
  onSelectConversation 
}: ConversationsListProps) => {
  if (isLoading) return <div>Loading conversations...</div>;

  return (
    <div className="space-y-2">
      {conversations?.map((conversation) => (
        <motion.div
          key={conversation.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card 
            className="p-4 hover:bg-white/10 backdrop-blur-lg cursor-pointer transition-all border border-casa-gold/20 hover:border-casa-gold/40"
            onClick={() => onSelectConversation(conversation)}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-casa-navy">Platform: {conversation.platform}</p>
                <p className="text-sm text-gray-500">
                  {new Date(conversation.created_at).toLocaleString()}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                conversation.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100'
              }`}>
                {conversation.status}
              </span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};