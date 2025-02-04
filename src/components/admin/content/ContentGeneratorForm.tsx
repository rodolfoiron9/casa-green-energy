import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { ContentTypeSelect } from "./ContentTypeSelect";
import { ContentType, GenerateContentData } from "./types";

interface ContentGeneratorFormProps {
  onSubmit: (data: GenerateContentData) => Promise<void>;
  isGenerating: boolean;
}

export const ContentGeneratorForm = ({ onSubmit, isGenerating }: ContentGeneratorFormProps) => {
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState<ContentType | "">("");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async () => {
    await onSubmit({ title, contentType, prompt });
    setTitle("");
    setContentType("");
    setPrompt("");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter content title"
        />
      </div>
      <ContentTypeSelect 
        value={contentType}
        onChange={(value) => setContentType(value)}
      />
      <div>
        <label className="block text-sm font-medium mb-1">Generation Prompt</label>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what content you want to generate..."
          rows={4}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isGenerating}
        className="w-full flex items-center gap-2"
      >
        <Wand2 className="w-4 h-4" />
        {isGenerating ? "Generating..." : "Generate Content"}
      </Button>
    </div>
  );
};