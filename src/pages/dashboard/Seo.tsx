import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Globe, TrendingUp, Search, Link as LinkIcon } from "lucide-react";

const placeholderPages = [
  {
    id: 1,
    page: "/home",
    visits: 1240,
    rank: 1,
    score: 95,
  },
  {
    id: 2,
    page: "/services",
    visits: 890,
    rank: 3,
    score: 88,
  },
  {
    id: 3,
    page: "/contact",
    visits: 560,
    rank: 5,
    score: 92,
  },
];

export default function Seo() {
  const stats = [
    {
      title: "Domain Rating",
      value: "72",
      icon: Globe,
      description: "Out of 100",
    },
    {
      title: "Keywords",
      value: "324",
      icon: Search,
      description: "Ranking keywords",
    },
    {
      title: "Backlinks",
      value: "1.2K",
      icon: LinkIcon,
      description: "Total backlinks",
    },
    {
      title: "Monthly Traffic",
      value: "45.2K",
      icon: TrendingUp,
      description: "Organic visits",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-casa-navy">SEO Performance</h2>
        <p className="text-muted-foreground">Monitor your search engine optimization</p>
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
          <CardTitle>Top Performing Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>SEO Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.page}</TableCell>
                  <TableCell>{page.visits}</TableCell>
                  <TableCell>{page.rank}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      page.score >= 90 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {page.score}%
                    </span>
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