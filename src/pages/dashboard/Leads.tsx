import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, UserCheck, Clock } from "lucide-react";

export default function Leads() {
  const stats = [
    {
      title: "Total Leads",
      value: "164",
      icon: Users,
      description: "Last 30 days",
    },
    {
      title: "New Leads",
      value: "24",
      icon: UserPlus,
      description: "Last 7 days",
    },
    {
      title: "Converted",
      value: "12",
      icon: UserCheck,
      description: "Last 30 days",
    },
    {
      title: "Pending",
      value: "38",
      icon: Clock,
      description: "Awaiting response",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">Lead Management</h2>
        <p className="text-muted-foreground">Track and manage your leads efficiently</p>
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
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Lead management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}