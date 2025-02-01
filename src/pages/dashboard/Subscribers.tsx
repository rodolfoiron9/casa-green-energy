import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, UserPlus, UserMinus, Users } from "lucide-react";

export default function Subscribers() {
  const stats = [
    {
      title: "Total Subscribers",
      value: "2,847",
      icon: Users,
      description: "Active subscribers",
    },
    {
      title: "New Subscribers",
      value: "147",
      icon: UserPlus,
      description: "Last 7 days",
    },
    {
      title: "Unsubscribed",
      value: "23",
      icon: UserMinus,
      description: "Last 30 days",
    },
    {
      title: "Engagement Rate",
      value: "64%",
      icon: Bell,
      description: "Average open rate",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">Subscriber Management</h2>
        <p className="text-muted-foreground">Monitor and engage with your subscriber base</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
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

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Subscriber management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}