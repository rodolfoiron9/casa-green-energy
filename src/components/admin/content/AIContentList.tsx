import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const AIContentList = () => {
  const { toast } = useToast();
  
  const { data: contents, isLoading } = useQuery({
    queryKey: ['ai-contents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_generated_content')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('ai_generated_content')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete content",
      });
    } else {
      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
    }
  };

  if (isLoading) return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-casa-gold"></div>
    </div>
  );

  return (
    <div className="space-y-4">
      {contents?.map((content, index) => (
        <motion.div
          key={content.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-4 bg-white/5 backdrop-blur-sm border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-casa-gold/10">
                  <FileText className="w-5 h-5 text-casa-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-casa-navy">{content.title}</h3>
                  <p className="text-sm text-casa-navy/60">
                    {content.content_type} - {content.status}
                  </p>
                  {content.tags && content.tags.length > 0 && (
                    <div className="flex gap-2 mt-1">
                      {content.tags.map((tag: string) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-casa-gold/10 text-casa-navy">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-casa-gold/20 hover:border-casa-gold/40 transition-colors"
                >
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(content.id)}
                  className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};