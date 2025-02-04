import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContentGeneratorForm } from "./ContentGeneratorForm";
import { GenerateContentData } from "./types";
import { motion } from "framer-motion";

export const ContentGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (data: GenerateContentData) => {
    if (!data.title || !data.contentType || !data.prompt) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to generate content');

      const { content } = await response.json();

      const { error } = await supabase
        .from('ai_generated_content')
        .insert({
          title: data.title,
          content,
          content_type: data.contentType,
          status: 'draft',
          user_id: (await supabase.auth.getUser()).data.user?.id,
          seo_title: data.seoTitle,
          seo_description: data.seoDescription,
          tags: data.tags,
          form_fields: data.formFields
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-white/5 backdrop-blur-sm border-casa-gold/20">
        <h2 className="text-xl font-semibold mb-4 text-casa-navy">Generate New Content</h2>
        <ContentGeneratorForm 
          onSubmit={handleGenerate}
          isGenerating={isGenerating}
        />
      </Card>
    </motion.div>
  );
};