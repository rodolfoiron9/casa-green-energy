import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function handleChatRequest(message: string) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    return { response: text };
  } catch (error) {
    console.error('Error in chat request:', error);
    throw new Error('Failed to get AI response');
  }
}