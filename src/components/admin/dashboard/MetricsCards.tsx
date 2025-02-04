import { Card } from "@/components/ui/card";
import { Users, Calendar, Download, Bot } from "lucide-react";

interface MetricsCardsProps {
  metrics: any[] | null;
}

const getMetricValue = (metrics: any[] | null, metricName: string): string => {
  const metric = metrics?.find(m => m.metric_name === metricName);
  if (!metric) return '0';
  
  const value = metric.metric_value;
  if (typeof value === 'number') return value.toString();
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? '1' : '0';
  if (Array.isArray(value)) return value.length.toString();
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length.toString();
  }
  return '0';
};

export const MetricsCards = ({ metrics }: MetricsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Total Leads</h3>
            <p className="text-3xl font-bold">{getMetricValue(metrics, 'total_leads')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Calendar className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Bookings</h3>
            <p className="text-3xl font-bold">{getMetricValue(metrics, 'total_bookings')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Download className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Downloads</h3>
            <p className="text-3xl font-bold">{getMetricValue(metrics, 'total_downloads')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Bot className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-semibold mb-1">AI Chats</h3>
            <p className="text-3xl font-bold">{getMetricValue(metrics, 'total_ai_chats')}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};