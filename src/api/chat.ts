import { supabase } from "@/integrations/supabase/client";
import { handleDeepseekRequest } from "./deepseek";

export type AIModel = "gemini" | "deepseek";

export async function handleChatRequest(message: string, model: AIModel = "gemini") {
  try {
    if (model === "deepseek") {
      return handleDeepseekRequest(message);
    }

    // For Gemini model, use Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('chat', {
      body: { message }
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    console.error('Error in chat request:', error);
    throw new Error(error.message || 'Failed to get AI response');
  }
}