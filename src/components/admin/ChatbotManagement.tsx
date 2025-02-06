import { useState } from "react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  MessageSquare, 
  Settings, 
  Database as DatabaseIcon, 
  Brain,
  BarChart2,
} from "lucide-react";
import { motion } from "framer-motion";
import { ChatbotHeader } from "./chatbot/ChatbotHeader";
import { ConversationsList } from "./chatbot/ConversationsList";
import { ConversationDetails } from "./chatbot/ConversationDetails";
import { TrainingDataList } from "./chatbot/TrainingDataList";
import type { ChatbotConversation, TrainingData } from "@/types/database";

export function ChatbotManagement() {
  const [selectedConversation, setSelectedConversation] = useState<ChatbotConversation | null>(null);
  const [activePersona, setActivePersona] = useState("general");

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

  const { data: settings } = useQuery({
    queryKey: ['chatbot-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chatbot_settings')
        .select('*')
        .maybeSingle();

      if (error) {
        toast.error('Failed to fetch chatbot settings');
        throw error;
      }
      return data;
    },
  });

  return (
    <Card className="p-6 bg-white/5 backdrop-blur-lg border border-casa-gold/20">
      <ChatbotHeader />

      <Tabs defaultValue="conversations" className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4">
          <TabsTrigger value="conversations" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Conversations
          </TabsTrigger>
          <TabsTrigger value="training" className="flex items-center gap-2">
            <DatabaseIcon className="w-4 h-4" />
            Training Data
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-casa-navy">Recent Conversations</h3>
              <ConversationsList 
                conversations={conversations}
                isLoading={conversationsLoading}
                onSelectConversation={setSelectedConversation}
              />
            </div>
            
            {selectedConversation && (
              <ConversationDetails conversation={selectedConversation} />
            )}
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-casa-navy">Training Data</h3>
                <TrainingDataList 
                  trainingData={trainingData}
                  isLoading={trainingDataLoading}
                />
              </Card>
            </div>
            
            <div>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-casa-navy">Active Personas</h3>
                <div className="space-y-2">
                  {['general', 'sales', 'technical', 'customer_service'].map((persona) => (
                    <motion.button
                      key={persona}
                      className={`w-full px-4 py-2 rounded-lg text-left transition-all ${
                        activePersona === persona 
                          ? 'bg-casa-navy text-white' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      onClick={() => setActivePersona(persona)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Brain className="w-4 h-4 inline-block mr-2" />
                      {persona.charAt(0).toUpperCase() + persona.slice(1).replace('_', ' ')}
                    </motion.button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Conversation Metrics</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Conversations</p>
                  <p className="text-2xl font-bold">{conversations?.length || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Conversations</p>
                  <p className="text-2xl font-bold">
                    {conversations?.filter(c => c.status === 'active').length || 0}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Training Metrics</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Training Samples</p>
                  <p className="text-2xl font-bold">{trainingData?.length || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Confidence</p>
                  <p className="text-2xl font-bold">
                    {trainingData 
                      ? (trainingData.reduce((acc, curr) => acc + curr.confidence_score, 0) / trainingData.length * 100).toFixed(1)
                      : 0}%
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Performance</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Response Time (avg)</p>
                  <p className="text-2xl font-bold">1.2s</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-2xl font-bold">98.5%</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Personality Type</p>
                  <p className="font-medium">{settings?.personality_type || 'Professional'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <pre className="bg-gray-50 p-2 rounded text-sm">
                    {JSON.stringify(settings?.business_hours || {}, null, 2)}
                  </pre>
                </div>
                <motion.button
                  className="w-full px-4 py-2 rounded-lg bg-casa-navy text-white hover:bg-casa-navy/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Update Settings
                </motion.button>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Custom Responses</h3>
              <div className="space-y-4">
                {settings?.custom_responses && Array.isArray(settings.custom_responses) && 
                  settings.custom_responses.map((response: any, index: number) => (
                    <div key={index} className="p-2 bg-gray-50 rounded">
                      <p className="font-medium">{response.trigger}</p>
                      <p className="text-sm text-gray-500">{response.response}</p>
                    </div>
                  ))}
                <motion.button
                  className="w-full px-4 py-2 rounded-lg bg-casa-navy text-white hover:bg-casa-navy/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Custom Response
                </motion.button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}