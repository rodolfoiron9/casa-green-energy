import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormInput, FileText, CheckSquare, AlertCircle } from "lucide-react";

export default function Forms() {
  const stats = [
    {
      title: "Total Forms",
      value: "12",
      icon: FormInput,
      description: "Active forms",
    },
    {
      title: "Submissions",
      value: "847",
      icon: FileText,
      description: "Total responses",
    },
    {
      title: "Completion Rate",
      value: "76%",
      icon: CheckSquare,
      description: "Average completion",
    },
    {
      title: "Form Errors",
      value: "2",
      icon: AlertCircle,
      description: "Needs attention",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">Form Management</h2>
        <p className="text-muted-foreground">Create and manage your forms</p>
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
          <CardTitle>Form Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Form builder functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}