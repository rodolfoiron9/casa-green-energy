import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, HeartHandshake } from "lucide-react";

const WarrantyProtection = () => {
  const features = [
    {
      title: "Extended Coverage",
      description: "Comprehensive protection beyond standard warranty periods.",
      icon: <Shield className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Quick Response Time",
      description: "24/7 support and rapid response to warranty claims.",
      icon: <Clock className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Easy Claims Process",
      description: "Simple and straightforward warranty claim procedures.",
      icon: <FileCheck className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Customer Satisfaction",
      description: "Dedicated support team for all warranty-related inquiries.",
      icon: <HeartHandshake className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">
            Warranty & Protection
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Comprehensive warranty coverage for your peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-casa-navy/5 rounded-full p-3">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-casa-navy/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarrantyProtection;