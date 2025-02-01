import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";

export function MarketingMetrics() {
  const { data: metrics } = useQuery({
    queryKey: ['marketingMetrics'],
    queryFn: async () => {
      const { data } = await supabase
        .from('ai_analytics')
        .select('*')
        .eq('metric_name', 'marketing_performance')
        .order('created_at', { ascending: true })
        .limit(7);
      return data || [];
    },
  });

  return (
    <Card className="p-6 bg-blue-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Marketing Performance</h2>
        <Badge className="bg-yellow-400 text-blue-900">AI Optimized</Badge>
      </div>
      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="created_at" 
              stroke="#9CA3AF"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="metric_value.value" 
              stroke="#FBBF24" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-blue-800 p-4 rounded-lg">
          <p className="text-sm text-gray-300">Conversion Rate</p>
          <p className="text-2xl font-bold">3.2%</p>
          <p className="text-sm text-green-400">+0.5% from last week</p>
        </div>
        <div className="bg-blue-800 p-4 rounded-lg">
          <p className="text-sm text-gray-300">Cost per Lead</p>
          <p className="text-2xl font-bold">£24.50</p>
          <p className="text-sm text-green-400">-£2.30 from last week</p>
        </div>
      </div>
    </Card>
  );
}