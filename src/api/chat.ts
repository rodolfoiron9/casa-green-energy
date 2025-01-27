import { GoogleGenerativeAI } from "@google/generative-ai";
import { handleDeepseekRequest } from "./deepseek";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export type AIModel = "gemini" | "deepseek";

export async function handleChatRequest(message: string, model: AIModel = "gemini") {
  try {
    if (model === "deepseek") {
      return handleDeepseekRequest(message);
    }

    // For Gemini model
    const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await geminiModel.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    return { response: text };
  } catch (error: any) {
    console.error('Error in chat request:', error);
    throw new Error(error.message || 'Failed to get AI response');
  }
}