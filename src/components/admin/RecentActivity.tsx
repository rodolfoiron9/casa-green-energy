import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function RecentActivity() {
  const { data: recentActivities } = useQuery({
    queryKey: ['recentActivities'],
    queryFn: async () => {
      const { data } = await supabase
        .from('ai_chat_interactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  return (
    <Card className="p-6 bg-blue-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Link to="/admin/activity" className="text-yellow-400 hover:text-yellow-300 text-sm">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {recentActivities?.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 bg-blue-800 rounded-lg">
            <div>
              <p className="font-medium">{activity.user_message.substring(0, 50)}...</p>
              <p className="text-sm text-gray-300">
                {new Date(activity.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}