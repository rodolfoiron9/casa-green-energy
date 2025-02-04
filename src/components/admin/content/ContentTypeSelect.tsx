import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContentType, contentTypes } from "./types";

interface ContentTypeSelectProps {
  value: ContentType | "";
  onChange: (value: ContentType) => void;
}

export const ContentTypeSelect = ({ value, onChange }: ContentTypeSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Content Type</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent>
          {contentTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};