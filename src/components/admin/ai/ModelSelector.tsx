import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AIModel } from "@/api/chat";

interface ModelSelectorProps {
  selectedModel: AIModel;
  onModelChange: (value: AIModel) => void;
}

export const ModelSelector = ({ selectedModel, onModelChange }: ModelSelectorProps) => {
  return (
    <Select value={selectedModel} onValueChange={onModelChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select AI Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gemini">Gemini</SelectItem>
        <SelectItem value="deepseek">Deepseek</SelectItem>
      </SelectContent>
    </Select>
  );
};