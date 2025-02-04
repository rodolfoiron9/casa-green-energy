import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Calendar,
  DollarSign,
  Star,
  Clock,
  CheckCircle
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricsCardsProps {
  metrics?: any[];
}

export const MetricsCards = ({ metrics }: MetricsCardsProps) => {
  const cards = [
    {
      title: "Total Leads",
      value: "124",
      change: "+12%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Active Chats",
      value: "28",
      change: "+5",
      icon: MessageSquare,
      color: "text-purple-500",
    },
    {
      title: "Appointments",
      value: "45",
      change: "+15%",
      icon: Calendar,
      color: "text-orange-500",
    },
    {
      title: "Revenue",
      value: "£52,450",
      change: "+22%",
      icon: DollarSign,
      color: "text-casa-gold",
    },
    {
      title: "Customer Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      title: "Response Time",
      value: "2.5h",
      change: "-15%",
      icon: Clock,
      color: "text-red-500",
    },
    {
      title: "Tasks Completed",
      value: "89",
      change: "+34%",
      icon: CheckCircle,
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                <h3 className="text-2xl font-bold text-casa-navy mb-2">
                  {card.value}
                </h3>
                <span className={`text-sm ${
                  card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {card.change} from last month
                </span>
              </div>
              <div className={`p-3 rounded-full bg-gray-50 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};