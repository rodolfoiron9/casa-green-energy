import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Zap, 
  Home, 
  Shield, 
  Leaf, 
  Bot, 
  CheckCircle2, 
  AlertCircle, 
  Construction,
  Clock
} from "lucide-react";

type ServiceStatus = 'operational' | 'in-development' | 'planned' | 'maintenance';

interface ServiceInfo {
  name: string;
  status: ServiceStatus;
  lastUpdated: string;
  icon: React.ReactNode;
  description: string;
}

const getStatusColor = (status: ServiceStatus) => {
  switch (status) {
    case 'operational':
      return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
    case 'in-development':
      return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
    case 'planned':
      return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
    case 'maintenance':
      return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
  }
};

export const ServiceStatus = () => {
  const services: ServiceInfo[] = [
    {
      name: 'Air Source Heat Pumps',
      status: 'operational',
      lastUpdated: new Date().toLocaleString(),
      icon: <Thermometer className="w-5 h-5" />,
      description: 'Installation and maintenance of heat pumps'
    },
    {
      name: 'Electrical Services',
      status: 'operational',
      lastUpdated: new Date().toLocaleString(),
      icon: <Zap className="w-5 h-5" />,
      description: 'Complete electrical solutions'
    },
    {
      name: 'Home Energy Solutions',
      status: 'in-development',
      lastUpdated: new Date().toLocaleString(),
      icon: <Home className="w-5 h-5" />,
      description: 'Energy assessments and improvements - Adding smart home features'
    },
    {
      name: 'Maintenance Services',
      status: 'in-development',
      lastUpdated: new Date().toLocaleString(),
      icon: <Construction className="w-5 h-5" />,
      description: 'Regular maintenance scheduling system in development'
    },
    {
      name: 'Green Energy Systems',
      status: 'planned',
      lastUpdated: new Date().toLocaleString(),
      icon: <Leaf className="w-5 h-5" />,
      description: 'Solar and wind solutions - Planning phase'
    },
    {
      name: 'AI Assistant',
      status: 'in-development',
      lastUpdated: new Date().toLocaleString(),
      icon: <Bot className="w-5 h-5" />,
      description: 'Smart home automation and energy optimization'
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Services Implementation Status
      </h3>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div className="flex items-center gap-3">
              {service.icon}
              <div>
                <span className="font-medium block">{service.name}</span>
                <span className="text-sm text-muted-foreground">{service.description}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(service.status)}>
                {service.status === 'operational' && <CheckCircle2 className="w-4 h-4 mr-1" />}
                {service.status === 'in-development' && <Construction className="w-4 h-4 mr-1" />}
                {service.status === 'planned' && <Clock className="w-4 h-4 mr-1" />}
                {service.status === 'maintenance' && <AlertCircle className="w-4 h-4 mr-1" />}
                {service.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Badge>
              <span className="text-sm text-muted-foreground hidden md:inline">
                Updated {service.lastUpdated}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};