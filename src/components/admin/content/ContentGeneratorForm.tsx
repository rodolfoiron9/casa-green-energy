import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { ContentTypeSelect } from "./ContentTypeSelect";
import { ContentType, GenerateContentData } from "./types";
import { motion } from "framer-motion";

interface ContentGeneratorFormProps {
  onSubmit: (data: GenerateContentData) => Promise<void>;
  isGenerating: boolean;
}

export const ContentGeneratorForm = ({ onSubmit, isGenerating }: ContentGeneratorFormProps) => {
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState<ContentType | "">("");
  const [prompt, setPrompt] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async () => {
    await onSubmit({ 
      title, 
      contentType, 
      prompt,
      seoTitle,
      seoDescription,
      tags
    });
    setTitle("");
    setContentType("");
    setPrompt("");
    setSeoTitle("");
    setSeoDescription("");
    setTags([]);
  };

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter content title"
              className="bg-white/5 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
            />
          </div>
          
          <ContentTypeSelect 
            value={contentType}
            onChange={(value) => setContentType(value)}
          />

          {(contentType === 'blog_post' || contentType === 'service_page' || contentType === 'project_page') && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">SEO Title</label>
                <Input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Enter SEO-optimized title"
                  className="bg-white/5 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">SEO Description</label>
                <Textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder="Enter SEO meta description"
                  className="bg-white/5 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
                <Input
                  value={tags.join(", ")}
                  onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))}
                  placeholder="Enter tags"
                  className="bg-white/5 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
                />
              </div>
            </motion.div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Generation Prompt</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what content you want to generate..."
              rows={4}
              className="bg-white/5 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={isGenerating}
        className="w-full flex items-center gap-2 bg-gradient-to-r from-casa-navy to-casa-blue hover:from-casa-blue hover:to-casa-navy border border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300 group"
      >
        <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        {isGenerating ? "Generating..." : "Generate Content"}
      </Button>
    </motion.div>
  );
};