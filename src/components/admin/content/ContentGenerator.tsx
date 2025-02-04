import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContentGeneratorForm } from "./ContentGeneratorForm";
import { GenerateContentData } from "./types";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIContentList } from "./AIContentList";
import { 
  FileText, 
  Wand2, 
  BarChart2, 
  Settings,
  History,
  BookOpen
} from "lucide-react";

export const ContentGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("generate");

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

      // Log error
      await supabase.from('ai_analytics').insert({
        metric_name: 'content_generation_error',
        metric_value: {
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        },
        user_id: (await supabase.auth.getUser()).data.user?.id
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
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          <TabsTrigger value="generate" className="flex items-center gap-2">
            <Wand2 className="w-4 h-4" />
            Generate
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="w-4 h-4" />
            History
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generate">
          <Card className="p-6 bg-white/5 backdrop-blur-sm border-casa-blue/20">
            <h2 className="text-xl font-semibold mb-4 text-casa-navy">Generate New Content</h2>
            <ContentGeneratorForm 
              onSubmit={handleGenerate}
              isGenerating={isGenerating}
            />
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <AIContentList />
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Content Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Generation Stats</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Total Content: 156</p>
                  <p className="text-sm text-gray-600">Published: 89</p>
                  <p className="text-sm text-gray-600">Draft: 67</p>
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Avg. Generation Time: 2.3s</p>
                  <p className="text-sm text-gray-600">Success Rate: 98.5%</p>
                  <p className="text-sm text-gray-600">Error Rate: 1.5%</p>
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Content Types</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Blog Posts: 45</p>
                  <p className="text-sm text-gray-600">Service Pages: 23</p>
                  <p className="text-sm text-gray-600">Landing Pages: 21</p>
                </div>
              </Card>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Generation History</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Blog Post: The Future of Renewable Energy</h3>
                      <p className="text-sm text-gray-600">Generated on: {new Date().toLocaleDateString()}</p>
                    </div>
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      Published
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Content Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Blog Post', 'Service Page', 'Landing Page'].map((template) => (
                <Card key={template} className="p-4 hover:border-casa-gold transition-colors cursor-pointer">
                  <h3 className="font-semibold">{template}</h3>
                  <p className="text-sm text-gray-600">Optimized template for {template.toLowerCase()}</p>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Content Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">AI Model Settings</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Current Model: GPT-4</p>
                  <p className="text-sm text-gray-600">Temperature: 0.7</p>
                  <p className="text-sm text-gray-600">Max Tokens: 2000</p>
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Content Preferences</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Default Language: English</p>
                  <p className="text-sm text-gray-600">Tone: Professional</p>
                  <p className="text-sm text-gray-600">SEO Optimization: Enabled</p>
                </div>
              </Card>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};