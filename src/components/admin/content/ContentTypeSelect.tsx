import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContentType, contentTypes } from "./types";
import { motion } from "framer-motion";

interface ContentTypeSelectProps {
  value: ContentType | "";
  onChange: (value: ContentType) => void;
}

export const ContentTypeSelect = ({ value, onChange }: ContentTypeSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">Content Type</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-white/5 backdrop-blur-sm border-casa-gold/20 hover:border-casa-gold/40 transition-colors">
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent className="bg-white/10 backdrop-blur-lg border-casa-gold/20">
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SelectItem 
                value={type.value}
                className="hover:bg-casa-gold/10 focus:bg-casa-gold/20 cursor-pointer"
              >
                <div className="py-2">
                  <div className="font-medium">{type.label}</div>
                  <div className="text-sm text-gray-500">{type.description}</div>
                </div>
              </SelectItem>
            </motion.div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};