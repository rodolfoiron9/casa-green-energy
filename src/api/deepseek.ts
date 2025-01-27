const DEEPSEEK_API_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";

export async function handleDeepseekRequest(message: string) {
  try {
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    
    if (!apiKey) {
      throw new Error('Deepseek API key is not configured');
    }

    const response = await fetch(DEEPSEEK_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Deepseek API request failed');
    }

    const data = await response.json();
    return { response: data.choices[0].message.content };
  } catch (error) {
    console.error('Error in Deepseek request:', error);
    throw error;
  }
}