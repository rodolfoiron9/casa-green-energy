import { motion } from "framer-motion";
import { Wrench, Clock, Shield, ClipboardCheck } from "lucide-react";

const MaintenanceServices = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description: "Regular check-ups and maintenance to prevent system failures.",
      icon: <Wrench className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for urgent maintenance needs.",
      icon: <Clock className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "System Protection",
      description: "Comprehensive protection plans for your heating and cooling systems.",
      icon: <Shield className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Performance Monitoring",
      description: "Regular system performance checks and optimization.",
      icon: <ClipboardCheck className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f1f1] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Maintenance Services</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Professional maintenance services to keep your systems running efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{service.title}</h2>
              </div>
              <p className="text-casa-navy/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceServices;