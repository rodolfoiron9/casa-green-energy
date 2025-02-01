import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  change?: string;
  changeType?: 'positive' | 'negative';
}

export function MetricCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  change, 
  changeType 
}: MetricCardProps) {
  return (
    <Card className="p-6 bg-blue-900 text-white">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-casa-gold" />
            <p className="text-sm opacity-80">{title}</p>
          </div>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          <p className="text-sm mt-2">
            {description}
          </p>
          {change && (
            <p className={`text-sm mt-2 ${
              changeType === 'positive' ? 'text-green-400' : 'text-red-400'
            }`}>
              {change} from last month
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}