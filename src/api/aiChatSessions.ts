import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Json } from "@/integrations/supabase/types";

export interface ChatMetadata {
  status: 'active' | 'completed' | 'error';
  duration?: number;
  model?: string;
  error?: string;
}

export interface AIChatSession {
  id: string;
  created_at: string;
  user_message: string;
  ai_response: string;
  metadata: ChatMetadata;
}

export async function fetchChatSessions(limit = 10) {
  try {
    const { data, error } = await supabase
      .from('ai_chat_interactions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;

    // Transform the data to ensure metadata is properly typed
    return (data || []).map(session => ({
      ...session,
      metadata: session.metadata as ChatMetadata
    })) as AIChatSession[];
  } catch (error: any) {
    console.error('Error fetching chat sessions:', error);
    toast.error('Failed to fetch chat sessions');
    throw error;
  }
}

export async function deleteChatSession(sessionId: string) {
  try {
    const { error } = await supabase
      .from('ai_chat_interactions')
      .delete()
      .eq('id', sessionId);

    if (error) throw error;
    toast.success('Chat session deleted successfully');
  } catch (error: any) {
    console.error('Error deleting chat session:', error);
    toast.error('Failed to delete chat session');
    throw error;
  }
}

export async function updateChatSession(sessionId: string, updates: Partial<AIChatSession>) {
  try {
    const { error } = await supabase
      .from('ai_chat_interactions')
      .update(updates)
      .eq('id', sessionId);

    if (error) throw error;
    toast.success('Chat session updated successfully');
  } catch (error: any) {
    console.error('Error updating chat session:', error);
    toast.error('Failed to update chat session');
    throw error;
  }
}

export async function getChatSessionById(sessionId: string) {
  try {
    const { data, error } = await supabase
      .from('ai_chat_interactions')
      .select('*')
      .eq('id', sessionId)
      .maybeSingle();

    if (error) throw error;
    
    if (data) {
      return {
        ...data,
        metadata: data.metadata as ChatMetadata
      } as AIChatSession;
    }
    
    return null;
  } catch (error: any) {
    console.error('Error fetching chat session:', error);
    toast.error('Failed to fetch chat session');
    throw error;
  }
}