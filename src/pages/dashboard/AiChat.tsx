import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, Brain } from "lucide-react";

export default function AiChat() {
  const stats = [
    {
      title: "Total Conversations",
      value: "1,234",
      icon: MessageSquare,
      description: "Last 30 days",
    },
    {
      title: "Active Users",
      value: "423",
      icon: Users,
      description: "Currently chatting",
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      icon: Clock,
      description: "Last 24 hours",
    },
    {
      title: "AI Accuracy",
      value: "98%",
      icon: Brain,
      description: "Response quality",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">AI Chat Dashboard</h2>
        <p className="text-muted-foreground">Monitor and analyze AI chat interactions</p>
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