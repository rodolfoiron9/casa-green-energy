import { ContentGenerator } from "../ContentGenerator";
import { AIAssistant } from "../../ai/AIAssistant";
import { AIContentList } from "../AIContentList";

export const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ContentGenerator />
      <div>
        <AIAssistant />
        <div className="mt-6">
          <AIContentList />
        </div>
      </div>
    </div>
  );
};