import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Target, Zap } from "lucide-react";

export default function AiAnalytics() {
  const stats = [
    {
      title: "AI Performance",
      value: "96%",
      icon: Brain,
      description: "Overall score",
    },
    {
      title: "Accuracy Trend",
      value: "+2.3%",
      icon: TrendingUp,
      description: "vs last month",
    },
    {
      title: "Goals Met",
      value: "12/15",
      icon: Target,
      description: "This month",
    },
    {
      title: "Processing Power",
      value: "85%",
      icon: Zap,
      description: "Utilization",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">AI Analytics Dashboard</h2>
        <p className="text-muted-foreground">Monitor AI performance and metrics</p>
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