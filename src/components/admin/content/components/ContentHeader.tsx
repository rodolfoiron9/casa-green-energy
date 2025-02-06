import { FileText } from "lucide-react";

export const ContentHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <FileText className="w-6 h-6 text-casa-gold" />
        <h2 className="text-2xl font-bold text-casa-navy">Content Management</h2>
      </div>
    </div>
  );
};