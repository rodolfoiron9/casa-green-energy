import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContentGeneratorForm } from "./ContentGeneratorForm";
import { GenerateContentData } from "./types";

export const ContentGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async ({ title, contentType, prompt }: GenerateContentData) => {
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
      <ContentGeneratorForm 
        onSubmit={handleGenerate}
        isGenerating={isGenerating}
      />
    </Card>
  );
};