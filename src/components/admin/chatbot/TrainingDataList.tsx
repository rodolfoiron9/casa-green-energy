import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { TrainingData } from "@/types/database";

interface TrainingDataListProps {
  trainingData: TrainingData[] | null;
  isLoading: boolean;
}

export const TrainingDataList = ({ trainingData, isLoading }: TrainingDataListProps) => {
  if (isLoading) return <div>Loading training data...</div>;

  return (
    <div className="space-y-4">
      {trainingData?.map((data) => (
        <motion.div
          key={data.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-4 bg-white/5 backdrop-blur-lg border border-casa-gold/20 hover:border-casa-gold/40 transition-all">
            <div className="space-y-2">
              <div>
                <p className="font-medium text-casa-navy">Input: {data.input_text}</p>
                <p className="text-sm">Response: {data.response_text}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Category: {data.category}</span>
                <span>Confidence: {(data.confidence_score * 100).toFixed(1)}%</span>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};