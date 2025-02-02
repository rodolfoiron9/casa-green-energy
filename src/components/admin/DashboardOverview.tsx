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

  const metrics = [
    {
      title: "Total Customers",
      value: customersCount || 0,
      change: "+12%",
      icon: Users,
      bgColor: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      title: "Active Projects",
      value: projectsCount || 0,
      change: "+5%",
      icon: Calendar,
      bgColor: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      title: "Support Tickets",
      value: ticketsCount || 0,
      change: "-3%",
      icon: MessageSquare,
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-500"
    },
    {
      title: "Revenue",
      value: "£125,400",
      change: "+18%",
      icon: DollarSign,
      bgColor: "bg-purple-500",
      textColor: "text-purple-500"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card 
          key={metric.title} 
          className="relative overflow-hidden p-6 bg-casa-navy/80 backdrop-blur-lg border-casa-gold/20 hover:border-casa-gold/40 transition-all duration-200"
        >
          <div className="flex justify-between items-start">
            <div className="relative z-10">
              <p className="text-sm font-medium text-casa-gold">{metric.title}</p>
              <h3 className="text-3xl font-bold mt-2 text-white">{metric.value}</h3>
              <p className={`text-sm mt-2 ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change} from last month
              </p>
            </div>
            <div className={`p-3 rounded-lg ${metric.bgColor}/10`}>
              <metric.icon className={`h-6 w-6 ${metric.textColor}`} />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 -mr-8 -mb-8 opacity-10">
            <metric.icon className={`w-full h-full ${metric.textColor}`} />
          </div>
        </Card>
      ))}
    </div>
  );
}