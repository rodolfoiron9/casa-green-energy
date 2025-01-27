const DEEPSEEK_API_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";

export async function handleDeepseekRequest(message: string) {
  try {
    const response = await fetch(DEEPSEEK_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Deepseek API request failed');
    }

    const data = await response.json();
    return { response: data.choices[0].message.content };
  } catch (error) {
    console.error('Error in Deepseek request:', error);
    throw new Error('Failed to get AI response');
  }
}