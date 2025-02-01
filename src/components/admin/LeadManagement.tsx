import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function LeadManagement() {
  const { data: leads } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('urgency', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  return (
    <Card className="p-6 bg-blue-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">AI Lead Management</h2>
        <Badge className="bg-yellow-400 text-blue-900">AI Powered</Badge>
      </div>
      <div className="space-y-4">
        {leads?.map((lead) => (
          <div key={lead.id} className="bg-blue-800 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{lead.name}</h3>
                <p className="text-sm text-gray-300">{lead.email}</p>
              </div>
              <Badge 
                className={
                  lead.urgency > 7 ? 'bg-red-500' : 
                  lead.urgency > 4 ? 'bg-yellow-500' : 
                  'bg-green-500'
                }
              >
                Priority {lead.urgency}/10
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Conversion Score</span>
                <span>{Math.round(lead.conversion_score * 100)}%</span>
              </div>
              <Progress value={lead.conversion_score * 100} className="h-2" />
              <p className="text-sm text-gray-300">
                {lead.requirements?.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}