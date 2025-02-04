import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Wand2 } from "lucide-react";
import { Database } from "@/integrations/supabase/types";

type ContentType = Database["public"]["Enums"]["content_type"];

const contentTypes: { value: ContentType; label: string }[] = [
  { value: 'service_page', label: 'Service Page' },
  { value: 'project_page', label: 'Project Page' },
  { value: 'blog_post', label: 'Blog Post' },
  { value: 'faq', label: 'FAQ' },
  { value: 'form', label: 'Form' },
  { value: 'footer', label: 'Footer' },
  { value: 'policy', label: 'Policy' },
];

export const ContentGenerator = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState<ContentType | "">("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!title || !contentType || !prompt) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, contentType, prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate content');

      const { content } = await response.json();

      const { error } = await supabase
        .from('ai_generated_content')
        .insert({
          title,
          content,
          content_type: contentType,
          status: 'draft',
          user_id: (await supabase.auth.getUser()).data.user?.id
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content generated successfully",
      });

      setTitle("");
      setContentType("");
      setPrompt("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate content",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Generate New Content</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter content title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content Type</label>
          <Select value={contentType} onValueChange={(value: ContentType) => setContentType(value)}>
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
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full flex items-center gap-2"
        >
          <Wand2 className="w-4 h-4" />
          {isGenerating ? "Generating..." : "Generate Content"}
        </Button>
      </div>
    </Card>
  );
};