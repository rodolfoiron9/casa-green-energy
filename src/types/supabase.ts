import type { Database as GeneratedDatabase } from "@/integrations/supabase/types";

// Extend the generated Database type with our new tables
export type Database = GeneratedDatabase & {
  public: {
    Tables: {
      chatbot_conversations: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          user_id: string;
          platform: string;
          conversation_data: any;
          metadata: any;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id: string;
          platform: string;
          conversation_data?: any;
          metadata?: any;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id?: string;
          platform?: string;
          conversation_data?: any;
          metadata?: any;
          status?: string;
        };
      };
      chatbot_training_data: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          user_id: string;
          input_text: string;
          response_text: string;
          category: string;
          confidence_score: number;
          metadata: any;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id: string;
          input_text: string;
          response_text: string;
          category?: string;
          confidence_score?: number;
          metadata?: any;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id?: string;
          input_text?: string;
          response_text?: string;
          category?: string;
          confidence_score?: number;
          metadata?: any;
        };
      };
    };
    Views: GeneratedDatabase["public"]["Views"];
    Functions: GeneratedDatabase["public"]["Functions"];
    Enums: GeneratedDatabase["public"]["Enums"];
    CompositeTypes: GeneratedDatabase["public"]["CompositeTypes"];
  };
};