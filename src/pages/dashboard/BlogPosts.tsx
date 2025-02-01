import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Eye, ThumbsUp, MessageSquare, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderPosts = [
  {
    id: 1,
    title: "Getting Started with Heat Pumps",
    views: 1240,
    likes: 45,
    status: "Published",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Energy Saving Tips for Summer",
    views: 890,
    likes: 32,
    status: "Draft",
    date: "2024-03-14",
  },
  {
    id: 3,
    title: "Understanding Solar Panels",
    views: 2100,
    likes: 67,
    status: "Published",
    date: "2024-03-13",
  },
];

export default function BlogPosts() {
  const stats = [
    {
      title: "Total Posts",
      value: "124",
      icon: FileText,
      description: "Published posts",
    },
    {
      title: "Total Views",
      value: "32.4K",
      icon: Eye,
      description: "Last 30 days",
    },
    {
      title: "Engagement",
      value: "2.1K",
      icon: ThumbsUp,
      description: "Likes & shares",
    },
    {
      title: "Comments",
      value: "842",
      icon: MessageSquare,
      description: "Total comments",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-casa-navy">Blog Management</h2>
          <p className="text-muted-foreground">Create and manage your blog content</p>
        </div>
        <Button className="bg-casa-blue hover:bg-casa-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
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
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.views}</TableCell>
                  <TableCell>{post.likes}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
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