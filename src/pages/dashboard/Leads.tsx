import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserPlus, UserCheck, Clock, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderLeads = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+44 123 456 7890",
    status: "New",
    date: "2024-03-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+44 123 456 7891",
    status: "In Progress",
    date: "2024-03-14",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike.w@example.com",
    phone: "+44 123 456 7892",
    status: "Contacted",
    date: "2024-03-13",
  },
];

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
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-casa-navy">Lead Management</h2>
          <p className="text-muted-foreground">Track and manage your leads efficiently</p>
        </div>
        <Button className="bg-casa-blue hover:bg-casa-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
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
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      lead.status === 'New' 
                        ? 'bg-blue-100 text-blue-800'
                        : lead.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </TableCell>
                  <TableCell>{lead.date}</TableCell>
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