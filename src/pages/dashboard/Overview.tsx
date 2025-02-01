import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, Users, MessageSquare, FileText, Bell } from "lucide-react";

export default function Overview() {
  const { data: stats, isLoading } = useQuery({
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

  const { data: recentLeads } = useQuery({
    queryKey: ['recent-leads'],
    queryFn: async () => {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data;
    }
  });

  const { data: recentSubscribers } = useQuery({
    queryKey: ['recent-subscribers'],
    queryFn: async () => {
      const { data } = await supabase
        .from('subscribers')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-casa-navy">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Total Leads</h3>
              <p className="text-2xl font-bold">{stats?.leads || 0}</p>
            </div>
            <Users className="w-8 h-8 text-casa-blue opacity-75" />
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Subscribers</h3>
              <p className="text-2xl font-bold">{stats?.subscribers || 0}</p>
            </div>
            <Bell className="w-8 h-8 text-casa-gold opacity-75" />
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Blog Posts</h3>
              <p className="text-2xl font-bold">{stats?.blogPosts || 0}</p>
            </div>
            <FileText className="w-8 h-8 text-green-500 opacity-75" />
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">FAQs</h3>
              <p className="text-2xl font-bold">{stats?.faqs || 0}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-purple-500 opacity-75" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="leads" className="w-full">
        <TabsList>
          <TabsTrigger value="leads">Recent Leads</TabsTrigger>
          <TabsTrigger value="subscribers">Recent Subscribers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Latest Leads</h3>
            <div className="space-y-4">
              {recentLeads?.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="subscribers" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Latest Subscribers</h3>
            <div className="space-y-4">
              {recentSubscribers?.map((subscriber) => (
                <div key={subscriber.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{subscriber.email}</p>
                    <p className="text-sm text-gray-500">Status: {subscriber.status}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(subscriber.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Growth Analytics</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { name: 'Jan', leads: 4, subscribers: 3 },
                  { name: 'Feb', leads: 7, subscribers: 5 },
                  { name: 'Mar', leads: 12, subscribers: 8 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#2563eb" />
                  <Line type="monotone" dataKey="subscribers" stroke="#eab308" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-4">
        <div className="flex items-center space-x-2 text-yellow-600">
          <AlertCircle className="w-5 h-5" />
          <h3 className="text-lg font-semibold">System Status</h3>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span>API Health</span>
            <span className="text-green-500">Operational</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Database</span>
            <span className="text-green-500">Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Storage</span>
            <span className="text-green-500">Available</span>
          </div>
        </div>
      </Card>
    </div>
  );
}