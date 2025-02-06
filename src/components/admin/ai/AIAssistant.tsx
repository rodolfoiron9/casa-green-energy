import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AIAssistantHeader } from "./AIAssistantHeader";
import { ModelSelector } from "./ModelSelector";
import { ChatInterface } from "./ChatInterface";
import type { AIModel } from "@/api/chat";

export function AIAssistant() {
  const [selectedModel, setSelectedModel] = useState<AIModel>("gemini");

  return (
    <Card className="p-6 space-y-4 bg-white/5 backdrop-blur-sm border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300">
      <AIAssistantHeader />
      <ModelSelector 
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
      />
      <ChatInterface selectedModel={selectedModel} />
    </Card>
  );
}