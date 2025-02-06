import { Card } from "@/components/ui/card";
import { ContentHeader } from "./components/ContentHeader";
import { ContentGrid } from "./components/ContentGrid";

export const ContentManagement = () => {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-sm border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-300">
      <ContentHeader />
      <ContentGrid />
    </Card>
  );
};