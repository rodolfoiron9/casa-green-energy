import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ContentGeneratorHeader } from "./ContentGeneratorHeader";
import { ContentGeneratorTabs } from "./ContentGeneratorTabs";
import { ContentGeneratorForm } from "../ContentGeneratorForm";
import { AIContentList } from "../AIContentList";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContentGeneratorContainer = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (data: any) => {
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
          form_fields: data.formFields,
          category: data.category,
          seo_metadata: {
            keywords: data.tags,
            readability_score: 85,
            word_count: content.split(' ').length,
            estimated_read_time: Math.ceil(content.split(' ').length / 200)
          }
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content generated successfully",
      });
      
      // Log analytics
      await supabase.from('ai_analytics').insert({
        metric_name: 'content_generation',
        metric_value: {
          content_type: data.contentType,
          generation_time: new Date().toISOString(),
          word_count: content.split(' ').length,
          success: true
        },
        user_id: (await supabase.auth.getUser()).data.user?.id
      });

    } catch (error) {
      console.error('Error generating content:', error);
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
      className="space-y-6"
    >
      <ContentGeneratorTabs activeTab={activeTab} onTabChange={setActiveTab}>
        <Card className="p-6 bg-white/5 backdrop-blur-sm border-casa-blue/20">
          <ContentGeneratorHeader />
          <ContentGeneratorForm 
            onSubmit={handleGenerate}
            isGenerating={isGenerating}
          />
        </Card>
      </ContentGeneratorTabs>
    </motion.div>
  );
};
