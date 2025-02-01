import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Zap, CheckCircle, Clock } from "lucide-react";

export default function AiContent() {
  const stats = [
    {
      title: "Generated Content",
      value: "324",
      icon: FileText,
      description: "Last 30 days",
    },
    {
      title: "Generation Speed",
      value: "2.3s",
      icon: Zap,
      description: "Average time",
    },
    {
      title: "Success Rate",
      value: "99%",
      icon: CheckCircle,
      description: "Content quality",
    },
    {
      title: "Processing",
      value: "5",
      icon: Clock,
      description: "In queue",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">AI Content Generation</h2>
        <p className="text-muted-foreground">Monitor and manage AI-generated content</p>
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