import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function RecentActivity() {
  const { toast } = useToast();
  const { data: recentActivities } = useQuery({
    queryKey: ['recentActivities'],
    queryFn: async () => {
      const { data } = await supabase
        .from('ai_chat_interactions')
        .select(`
          *,
          leads (
            id,
            name,
            email,
            phone,
            status
          )
        `)
        .order('created_at', { ascending: false })
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
        // Open chat interface
        toast({
          title: "Chat Interface",
          description: "Opening chat with " + lead.name,
        });
        break;
    }

    // Log the interaction
    await supabase.from('lead_interactions').insert({
      lead_id: lead.id,
      interaction_type: `${method}_initiated`,
      interaction_data: { method, timestamp: new Date().toISOString() }
    });
  };

  return (
    <Card className="p-6 bg-casa-navy">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Recent Lead Activity</h2>
        <Link to="/admin/activity" className="text-casa-gold hover:text-yellow-300 text-sm">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {recentActivities?.map((activity) => (
          <Card key={activity.id} className="p-4 bg-white/5 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <div>
                <p className="font-medium text-white">{activity.user_message.substring(0, 50)}...</p>
                <p className="text-sm text-gray-400">
                  {new Date(activity.created_at).toLocaleDateString()} - {activity.leads?.name || 'Unknown Lead'}
                </p>
              </div>
              {activity.leads && (
                <div className="flex gap-2">
                  {activity.leads.email && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleContactLead('email', activity.leads)}
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  )}
                  {activity.leads.phone && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleContactLead('phone', activity.leads)}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleContactLead('chat', activity.leads)}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}