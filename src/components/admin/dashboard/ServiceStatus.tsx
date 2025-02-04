import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Bot, ServerCog, ServerCrash, CheckCircle2, AlertCircle } from "lucide-react";

type ServiceStatus = 'operational' | 'degraded' | 'down' | 'maintenance';

interface ServiceInfo {
  name: string;
  status: ServiceStatus;
  lastUpdated: string;
  icon: React.ReactNode;
}

const getStatusColor = (status: ServiceStatus) => {
  switch (status) {
    case 'operational':
      return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
    case 'degraded':
      return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
    case 'down':
      return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
    case 'maintenance':
      return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
  }
};

export const ServiceStatus = () => {
  const services: ServiceInfo[] = [
    {
      name: 'API Server',
      status: 'operational',
      lastUpdated: new Date().toLocaleString(),
      icon: <Server className="w-5 h-5" />
    },
    {
      name: 'Database',
      status: 'operational',
      lastUpdated: new Date().toLocaleString(),
      icon: <ServerCog className="w-5 h-5" />
    },
    {
      name: 'AI Services',
      status: 'degraded',
      lastUpdated: new Date().toLocaleString(),
      icon: <Bot className="w-5 h-5" />
    },
    {
      name: 'Storage',
      status: 'maintenance',
      lastUpdated: new Date().toLocaleString(),
      icon: <ServerCrash className="w-5 h-5" />
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Server className="w-5 h-5" />
        Services Status
      </h3>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div className="flex items-center gap-3">
              {service.icon}
              <span className="font-medium">{service.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(service.status)}>
                {service.status === 'operational' && <CheckCircle2 className="w-4 h-4 mr-1" />}
                {service.status === 'degraded' && <AlertCircle className="w-4 h-4 mr-1" />}
                {service.status === 'down' && <ServerCrash className="w-4 h-4 mr-1" />}
                {service.status === 'maintenance' && <ServerCog className="w-4 h-4 mr-1" />}
                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
              </Badge>
              <span className="text-sm text-muted-foreground">
                Updated {service.lastUpdated}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};