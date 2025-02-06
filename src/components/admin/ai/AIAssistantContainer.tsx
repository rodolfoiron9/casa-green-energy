import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AIAssistantHeader } from "./AIAssistantHeader";
import { ModelSelector } from "./ModelSelector";
import { ChatInterface } from "./ChatInterface";
import type { AIModel } from "@/api/chat";

export function AIAssistantContainer() {
  const [selectedModel, setSelectedModel] = useState<AIModel>("gemini");

  return (
    <Card className="p-6 space-y-4 bg-white/10 backdrop-blur-sm border-casa-blue/20 hover:border-casa-blue/40 transition-all">
      <AIAssistantHeader />
      <ModelSelector 
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
      />
      <ChatInterface selectedModel={selectedModel} />
    </Card>
  );
}