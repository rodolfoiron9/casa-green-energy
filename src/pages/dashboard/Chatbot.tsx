import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquare, Users, Zap } from "lucide-react";

export default function Chatbot() {
  const stats = [
    {
      title: "Active Sessions",
      value: "234",
      icon: Bot,
      description: "Current chats",
    },
    {
      title: "Messages",
      value: "1.2K",
      icon: MessageSquare,
      description: "Last 24 hours",
    },
    {
      title: "Users Helped",
      value: "892",
      icon: Users,
      description: "This week",
    },
    {
      title: "Resolution Rate",
      value: "94%",
      icon: Zap,
      description: "Success rate",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">Chatbot Management</h2>
        <p className="text-muted-foreground">Monitor and configure AI chatbot</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}