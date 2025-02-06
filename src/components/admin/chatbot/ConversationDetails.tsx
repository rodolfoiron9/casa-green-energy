import { Card } from "@/components/ui/card";
import type { ChatbotConversation } from "@/types/database";

interface ConversationDetailsProps {
  conversation: ChatbotConversation;
}

export const ConversationDetails = ({ conversation }: ConversationDetailsProps) => {
  return (
    <Card className="p-4 bg-white/5 backdrop-blur-lg border border-casa-gold/20">
      <h3 className="text-lg font-semibold mb-4 text-casa-navy">Conversation Details</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Platform</p>
          <p className="font-medium">{conversation.platform}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">{conversation.status}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Created At</p>
          <p className="font-medium">
            {new Date(conversation.created_at).toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Metadata</p>
          <pre className="bg-gray-50 p-2 rounded text-sm">
            {JSON.stringify(conversation.metadata, null, 2)}
          </pre>
        </div>
      </div>
    </Card>
  );
};