import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function Overview() {
  const { data: stats } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [
        { count: leadsCount },
        { count: subscribersCount },
        { count: blogPostsCount },
        { count: faqsCount }
      ] = await Promise.all([
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase.from('subscribers').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('faqs').select('*', { count: 'exact', head: true })
      ]);

      return {
        leads: leadsCount || 0,
        subscribers: subscribersCount || 0,
        blogPosts: blogPostsCount || 0,
        faqs: faqsCount || 0
      };
    }
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-casa-navy">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Total Leads</h3>
          <p className="text-2xl font-bold">{stats?.leads || 0}</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Subscribers</h3>
          <p className="text-2xl font-bold">{stats?.subscribers || 0}</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Blog Posts</h3>
          <p className="text-2xl font-bold">{stats?.blogPosts || 0}</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground">FAQs</h3>
          <p className="text-2xl font-bold">{stats?.faqs || 0}</p>
        </Card>
      </div>
    </div>
  );
}