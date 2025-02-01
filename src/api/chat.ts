import { supabase } from "@/integrations/supabase/client";
import { handleDeepseekRequest } from "./deepseek";

export type AIModel = "gemini" | "deepseek";
export type ChatStatus = "active" | "completed" | "error";

interface ChatMetadata {
  status: ChatStatus;
  model: AIModel;
  startTime: number;
  duration?: number;
  error?: string;
}

export async function handleChatRequest(message: string, model: AIModel = "gemini") {
  const startTime = Date.now();
  let metadata: ChatMetadata = {
    status: "active",
    model,
    startTime,
  };

  try {
    // Update chat interaction record with initial status
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.id) {
      throw new Error('User not authenticated');
    }

    const { data: interaction, error: insertError } = await supabase
      .from('ai_chat_interactions')
      .insert({
        user_message: message,
        ai_response: '',
        metadata,
        user_id: session.user.id,
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // Process the chat request
    const response = model === "deepseek" 
      ? await handleDeepseekRequest(message)
      : await handleGeminiRequest(message);

    // Calculate duration
    const endTime = Date.now();
    metadata = {
      ...metadata,
      status: "completed",
      duration: endTime - startTime,
    };

    // Update the interaction with the response and final metadata
    const { error: updateError } = await supabase
      .from('ai_chat_interactions')
      .update({
        ai_response: response.response,
        metadata,
      })
      .eq('id', interaction.id);

    if (updateError) throw updateError;

    return response;
  } catch (error: any) {
    // Update metadata to reflect error state
    metadata = {
      ...metadata,
      status: "error",
      error: error.message,
    };

    // Try to update the interaction with error status
    if (metadata.startTime) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        await supabase
          .from('ai_chat_interactions')
          .update({ metadata })
          .eq('user_id', session.user.id)
          .eq('metadata->startTime', metadata.startTime);
      }
    }

    console.error('Error in chat request:', error);
    throw new Error(error.message || 'Failed to get AI response');
  }
}

async function handleGeminiRequest(message: string) {
  const { data, error } = await supabase.functions.invoke('chat', {
    body: { message }
  });

  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(error.message);
  }

  return data;
}