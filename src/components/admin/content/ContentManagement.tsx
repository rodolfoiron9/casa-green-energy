import { Card } from "@/components/ui/card";
import { ContentHeader } from "./components/ContentHeader";
import { ContentGrid } from "./components/ContentGrid";

export const ContentManagement = () => {
  return (
    <Card className="p-6">
      <ContentHeader />
      <ContentGrid />
    </Card>
  );
};