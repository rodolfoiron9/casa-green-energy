import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, UserPlus, UserMinus, Users, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderSubscribers = [
  {
    id: 1,
    email: "john.doe@example.com",
    status: "Active",
    joinDate: "2024-03-15",
    source: "Newsletter",
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    status: "Active",
    joinDate: "2024-03-14",
    source: "Website",
  },
  {
    id: 3,
    email: "mike.brown@example.com",
    status: "Inactive",
    joinDate: "2024-03-13",
    source: "Blog",
  },
];

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
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-casa-navy">Subscriber Management</h2>
          <p className="text-muted-foreground">Monitor and engage with your subscriber base</p>
        </div>
        <Button className="bg-casa-blue hover:bg-casa-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Subscriber
        </Button>
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

      <Card>
        <CardHeader>
          <CardTitle>Recent Subscribers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Source</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderSubscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      subscriber.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {subscriber.status}
                    </span>
                  </TableCell>
                  <TableCell>{subscriber.joinDate}</TableCell>
                  <TableCell>{subscriber.source}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 mr-2">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}