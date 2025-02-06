import { Card } from "@/components/ui/card";
import { ContentHeader } from "./components/ContentHeader";
import { ContentGeneratorContainer } from "./components/ContentGeneratorContainer";
import { AIAssistantContainer } from "../ai/AIAssistantContainer";

export const ContentManagement = () => {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-sm border-casa-blue/20">
      <ContentHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContentGeneratorContainer />
        <AIAssistantContainer />
      </div>
    </Card>
  );
};