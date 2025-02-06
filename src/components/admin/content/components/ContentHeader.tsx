import { FileText } from "lucide-react";

export const ContentHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <FileText className="w-5 h-5 text-casa-gold" />
      <h2 className="text-xl font-semibold">Content Management</h2>
    </div>
  );
};