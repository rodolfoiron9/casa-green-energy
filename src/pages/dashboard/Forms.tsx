import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FormInput, FileText, CheckSquare, AlertCircle, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderForms = [
  {
    id: 1,
    title: "Contact Form",
    submissions: 24,
    lastSubmission: "2024-03-15",
    status: "Active",
  },
  {
    id: 2,
    title: "Quote Request",
    submissions: 18,
    lastSubmission: "2024-03-14",
    status: "Active",
  },
  {
    id: 3,
    title: "Feedback Survey",
    submissions: 12,
    lastSubmission: "2024-03-13",
    status: "Draft",
  },
];

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
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-casa-navy">Form Management</h2>
          <p className="text-muted-foreground">Create and manage your forms</p>
        </div>
        <Button className="bg-casa-blue hover:bg-casa-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Form
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
          <CardTitle>Your Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Form Name</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Last Submission</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderForms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell className="font-medium">{form.title}</TableCell>
                  <TableCell>{form.submissions}</TableCell>
                  <TableCell>{form.lastSubmission}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      form.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {form.status}
                    </span>
                  </TableCell>
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