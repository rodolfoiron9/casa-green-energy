import { GoogleGenerativeAI } from "@google/generative-ai";
import { handleDeepseekRequest } from "./deepseek";

export type AIModel = "gemini" | "deepseek";

export async function handleChatRequest(message: string, model: AIModel = "gemini") {
  try {
    if (model === "deepseek") {
      return handleDeepseekRequest(message);
    }

    // For Gemini model
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error('Gemini API key not found. Please check your environment variables.');
    }

    console.log('Initializing Gemini with API key:', apiKey.substring(0, 4) + '...');
    const genAI = new GoogleGenerativeAI(apiKey);
    const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    console.log('Sending request to Gemini API...');
    const result = await geminiModel.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    console.log('Received response from Gemini API');
    return { response: text };
  } catch (error: any) {
    console.error('Error in chat request:', error);
    throw new Error(error.message || 'Failed to get AI response');
  }
}