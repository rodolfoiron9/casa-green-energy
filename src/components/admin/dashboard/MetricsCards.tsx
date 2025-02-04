import { Card } from "@/components/ui/card";
import { Users, Calendar, Download, Bot, MessageSquare, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

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
  const [realtimeMetrics, setRealtimeMetrics] = useState(metrics);

  useEffect(() => {
    // Subscribe to real-time updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'admin_metrics'
        },
        (payload: RealtimePostgresChangesPayload<{
          id: string;
          metric_name: string;
          metric_value: any;
        }>) => {
          console.log('Real-time metric update:', payload);
          setRealtimeMetrics((current) => {
            if (!current) return current;
            const updatedMetrics = [...current];
            const index = updatedMetrics.findIndex(m => m.id === payload.new.id);
            if (index >= 0) {
              updatedMetrics[index] = payload.new;
            } else {
              updatedMetrics.push(payload.new);
            }
            return updatedMetrics;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Total Leads</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'total_leads')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <Calendar className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Bookings</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'total_bookings')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <Download className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Downloads</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'total_downloads')}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <Bot className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">AI Chats</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'total_ai_chats')}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-4">
          <MessageSquare className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Active Leads</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'active_leads')}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-4">
          <FileText className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-sm font-semibold mb-1">AI Content</h3>
            <p className="text-2xl font-bold">{getMetricValue(realtimeMetrics, 'total_ai_content')}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};