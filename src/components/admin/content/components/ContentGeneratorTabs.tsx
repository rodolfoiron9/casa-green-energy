import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wand2, 
  FileText, 
  BarChart2, 
  History,
  BookOpen,
  Settings 
} from "lucide-react";

interface ContentGeneratorTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  children: React.ReactNode;
}

export const ContentGeneratorTabs = ({ 
  activeTab, 
  onTabChange,
  children 
}: ContentGeneratorTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
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
      {children}
    </Tabs>
  );
};