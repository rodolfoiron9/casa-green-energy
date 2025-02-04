import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { handleChatRequest } from "@/api/chat";
import { toast } from "sonner";
import { 
  MessageSquare, 
  Settings, 
  Database as DatabaseIcon, 
  Brain,
  BarChart2,
  Users,
  Zap,
  Shield
} from "lucide-react";
import type { Database } from "@/integrations/supabase/types";
import { motion } from "framer-motion";

type ChatbotConversation = Database["public"]["Tables"]["chatbot_conversations"]["Row"];
type TrainingData = Database["public"]["Tables"]["chatbot_training_data"]["Row"];

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
        .single();

      if (error) {
        toast.error('Failed to fetch chatbot settings');
        throw error;
      }
      return data;
    },
  });

  const personas = [
    { id: 'general', name: 'General Assistant', icon: Brain },
    { id: 'sales', name: 'Sales Expert', icon: Users },
    { id: 'technical', name: 'Technical Support', icon: Zap },
    { id: 'customer_service', name: 'Customer Service', icon: Shield },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-casa-gold" />
        <h2 className="text-2xl font-bold">Chatbot Management</h2>
      </div>

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
              <h3 className="text-lg font-semibold">Recent Conversations</h3>
              {conversationsLoading ? (
                <div>Loading conversations...</div>
              ) : (
                <div className="space-y-2">
                  {conversations?.map((conversation) => (
                    <motion.div
                      key={conversation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card 
                        className="p-4 hover:bg-gray-50 cursor-pointer transition-all"
                        onClick={() => setSelectedConversation(conversation)}
                      >
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
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {selectedConversation && (
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Conversation Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Platform</p>
                    <p className="font-medium">{selectedConversation.platform}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">{selectedConversation.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Created At</p>
                    <p className="font-medium">
                      {new Date(selectedConversation.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Metadata</p>
                    <pre className="bg-gray-50 p-2 rounded text-sm">
                      {JSON.stringify(selectedConversation.metadata, null, 2)}
                    </pre>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Training Data</h3>
                {trainingDataLoading ? (
                  <div>Loading training data...</div>
                ) : (
                  <div className="space-y-4">
                    {trainingData?.map((data) => (
                      <motion.div
                        key={data.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="p-4">
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
                      </motion.div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
            
            <div>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Active Personas</h3>
                <div className="space-y-2">
                  {personas.map((persona) => (
                    <motion.div
                      key={persona.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant={activePersona === persona.id ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setActivePersona(persona.id)}
                      >
                        <persona.icon className="w-4 h-4 mr-2" />
                        {persona.name}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <Button variant="outline" className="w-full">
                  Update Settings
                </Button>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Custom Responses</h3>
              <div className="space-y-4">
                {settings?.custom_responses?.map((response: any, index: number) => (
                  <div key={index} className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">{response.trigger}</p>
                    <p className="text-sm text-gray-500">{response.response}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Add Custom Response
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}