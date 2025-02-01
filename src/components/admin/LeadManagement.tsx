import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LeadManagement() {
  const { toast } = useToast();
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

  const handleContactLead = async (method: 'email' | 'phone' | 'chat', lead: any) => {
    if (!lead) return;
    
    switch (method) {
      case 'email':
        window.location.href = `mailto:${lead.email}`;
        break;
      case 'phone':
        window.location.href = `tel:${lead.phone}`;
        break;
      case 'chat':
        toast({
          title: "Opening Chat",
          description: "Starting conversation with " + lead.name,
        });
        break;
    }

    await supabase.from('lead_interactions').insert({
      lead_id: lead.id,
      interaction_type: `${method}_initiated`,
      interaction_data: { method, timestamp: new Date().toISOString() }
    });
  };

  return (
    <Card className="p-6 bg-casa-navy">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Active Leads</h2>
      </div>
      <div className="space-y-4">
        {leads?.map((lead) => (
          <Card key={lead.id} className="p-4 bg-white/5 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-white">{lead.name}</h3>
                  <p className="text-sm text-gray-300">{lead.email}</p>
                  {lead.phone && (
                    <p className="text-sm text-gray-300">{lead.phone}</p>
                  )}
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
              {lead.requirements && (
                <p className="text-sm text-gray-300">
                  {lead.requirements.substring(0, 100)}...
                </p>
              )}
              <div className="flex gap-2">
                {lead.email && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleContactLead('email', lead)}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                )}
                {lead.phone && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleContactLead('phone', lead)}
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleContactLead('chat', lead)}
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}