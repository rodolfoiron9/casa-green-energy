import { Users, Calendar, MessageSquare, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function DashboardOverview() {
  const { data: customersCount } = useQuery({
    queryKey: ['customersCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  const { data: projectsCount } = useQuery({
    queryKey: ['projectsCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('ai_content')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
      return count || 0;
    },
  });

  const { data: ticketsCount } = useQuery({
    queryKey: ['ticketsCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('ai_chat_interactions')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border-0 shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-300">Total Customers</p>
            <h3 className="text-3xl font-bold mt-2 text-white">{customersCount || 0}</h3>
            <p className="text-sm mt-2 text-emerald-400">+12% from last month</p>
          </div>
          <div className="p-3 bg-casa-gold/10 rounded-lg">
            <Users className="h-6 w-6 text-casa-gold" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border-0 shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-300">Active Projects</p>
            <h3 className="text-3xl font-bold mt-2 text-white">{projectsCount || 0}</h3>
            <p className="text-sm mt-2 text-emerald-400">+5% from last month</p>
          </div>
          <div className="p-3 bg-casa-gold/10 rounded-lg">
            <Calendar className="h-6 w-6 text-casa-gold" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border-0 shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-300">Support Tickets</p>
            <h3 className="text-3xl font-bold mt-2 text-white">{ticketsCount || 0}</h3>
            <p className="text-sm mt-2 text-red-400">-3% from last month</p>
          </div>
          <div className="p-3 bg-casa-gold/10 rounded-lg">
            <MessageSquare className="h-6 w-6 text-casa-gold" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border-0 shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-300">Revenue</p>
            <h3 className="text-3xl font-bold mt-2 text-white">£125,400</h3>
            <p className="text-sm mt-2 text-emerald-400">+18% from last month</p>
          </div>
          <div className="p-3 bg-casa-gold/10 rounded-lg">
            <DollarSign className="h-6 w-6 text-casa-gold" />
          </div>
        </div>
      </Card>
    </div>
  );
}