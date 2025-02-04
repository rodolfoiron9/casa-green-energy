import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { handleChatRequest } from "@/api/chat";
import { toast } from "sonner";
import { MessageSquare, Settings, Database } from "lucide-react";
import { Database } from "@/types/supabase";

type ChatbotConversation = Database["public"]["Tables"]["chatbot_conversations"]["Row"];
type TrainingData = Database["public"]["Tables"]["chatbot_training_data"]["Row"];

export function ChatbotManagement() {
  const [selectedConversation, setSelectedConversation] = useState<ChatbotConversation | null>(null);

  const { data: conversations, isLoading: conversationsLoading } = useQuery({
    queryKey: ['chatbot-conversations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chatbot_conversations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Failed to fetch conversations');
        throw error;
      }
      return data as ChatbotConversation[];
    },
  });

  const { data: trainingData, isLoading: trainingDataLoading } = useQuery({
    queryKey: ['chatbot-training-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chatbot_training_data')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Failed to fetch training data');
        throw error;
      }
      return data as TrainingData[];
    },
  });

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-casa-gold" />
        <h2 className="text-2xl font-bold">Chatbot Management</h2>
      </div>

      <Tabs defaultValue="conversations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="conversations" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Conversations
          </TabsTrigger>
          <TabsTrigger value="training" className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            Training Data
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-4">
          {conversationsLoading ? (
            <div>Loading conversations...</div>
          ) : (
            <div className="grid gap-4">
              {conversations?.map((conversation) => (
                <Card key={conversation.id} className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedConversation(conversation)}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Platform: {conversation.platform}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(conversation.created_at).toLocaleString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      conversation.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                    }`}>
                      {conversation.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          {trainingDataLoading ? (
            <div>Loading training data...</div>
          ) : (
            <div className="grid gap-4">
              {trainingData?.map((data) => (
                <Card key={data.id} className="p-4">
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">Input: {data.input_text}</p>
                      <p className="text-sm">Response: {data.response_text}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Category: {data.category}</span>
                      <span>Confidence: {(data.confidence_score * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Chatbot Settings</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Model: Gemini</p>
                <Button variant="outline" className="w-full">
                  Update Settings
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
