import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Download, FileText } from "lucide-react";

const CATEGORIES = [
  "Heat Pumps",
  "Plumbing",
  "Electrics",
  "Heating",
  "General"
];

export const GuidesManager = () => {
  const [isAddGuideOpen, setIsAddGuideOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const { toast } = useToast();

  const { data: guides, refetch } = useQuery({
    queryKey: ['guides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('guides')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  const handleCreateGuide = async () => {
    if (!title || !category || !fileUrl) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    const { error } = await supabase
      .from('guides')
      .insert([
        {
          title,
          description,
          category,
          file_url: fileUrl,
        }
      ]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create guide",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Guide created successfully",
    });

    setIsAddGuideOpen(false);
    refetch();
  };

  const handleDownload = async (guide: any) => {
    // Increment download count
    const { error } = await supabase
      .from('guides')
      .update({ download_count: (guide.download_count || 0) + 1 })
      .eq('id', guide.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update download count",
      });
    }

    // Trigger download
    window.open(guide.file_url, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Available Guides</h3>
        <Dialog open={isAddGuideOpen} onOpenChange={setIsAddGuideOpen}>
          <DialogTrigger asChild>
            <Button>Add New Guide</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Guide</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Guide title"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Guide description"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="file-url">File URL</Label>
                <Input
                  id="file-url"
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  placeholder="URL to the guide file"
                />
              </div>
              <Button onClick={handleCreateGuide}>Create Guide</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides?.map((guide) => (
          <Card key={guide.id} className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{guide.title}</h4>
                <p className="text-sm text-gray-500">{guide.category}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDownload(guide)}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
            {guide.description && (
              <p className="text-sm">{guide.description}</p>
            )}
            <div className="flex items-center text-sm text-gray-500">
              <FileText className="h-4 w-4 mr-1" />
              <span>Downloads: {guide.download_count || 0}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};