import { Wand2 } from "lucide-react";

export const ContentGeneratorHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Wand2 className="w-5 h-5 text-casa-gold" />
      <h2 className="text-xl font-semibold">Content Generator</h2>
    </div>
  );
};