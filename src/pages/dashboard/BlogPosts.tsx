import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye, ThumbsUp, MessageSquare } from "lucide-react";

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
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">Blog Management</h2>
        <p className="text-muted-foreground">Create and manage your blog content</p>
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
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Blog management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}