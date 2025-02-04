import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export const ServiceStatus = () => {
  const services = [
    {
      name: "Heat Pump Installation",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None",
    },
    {
      name: "Electrical Services",
      status: "operational",
      uptime: "99.7%",
      lastIncident: "2 days ago",
    },
    {
      name: "Plumbing Services",
      status: "degraded",
      uptime: "95.5%",
      lastIncident: "Today",
    },
    {
      name: "Emergency Response",
      status: "operational",
      uptime: "99.8%",
      lastIncident: "5 days ago",
    },
    {
      name: "Maintenance Services",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "None",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-50 text-green-700";
      case "degraded":
        return "bg-yellow-50 text-yellow-700";
      case "down":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-casa-navy mb-6">Service Status</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              {getStatusIcon(service.status)}
              <div>
                <h3 className="font-medium text-casa-navy">{service.name}</h3>
                <p className="text-sm text-gray-500">
                  Uptime: {service.uptime}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(service.status)}`}>
                {service.status}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Last incident: {service.lastIncident}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};