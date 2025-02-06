export type TableName = 
  | "content" 
  | "leads" 
  | "blog_posts"
  | "marketing_campaigns"
  | "subscribers"
  | "templates"
  | "ai_analytics"
  | "ai_chat_interactions"
  | "ai_content"
  | "ai_tasks"
  | "profiles"
  | "chatbot_conversations"
  | "chatbot_training_data";

export interface TableInfo {
  table_name: TableName;
  row_count: number;
  last_updated: string;
}

export interface ChatbotConversation {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  platform: string;
  conversation_data: any;
  metadata: any;
  status: string;
}

export interface TrainingData {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  input_text: string;
  response_text: string;
  category: string;
  confidence_score: number;
  metadata: any;
  persona: string | null;
  business_hours: {
    enabled: boolean;
    schedule: any[];
  } | null;
}