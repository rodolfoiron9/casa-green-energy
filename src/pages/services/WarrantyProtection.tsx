import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, HeartHandshake } from "lucide-react";

const WarrantyProtection = () => {
  const features = [
    {
      title: "Extended Coverage",
      description: "Comprehensive protection beyond standard manufacturer warranty.",
      icon: <Shield className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for warranty claims and inquiries.",
      icon: <Clock className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Easy Claims Process",
      description: "Streamlined claims handling with minimal paperwork.",
      icon: <FileCheck className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Service Guarantee",
      description: "Our commitment to your satisfaction with every service.",
      icon: <HeartHandshake className="w-8 h-8 text-casa-gold" />
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
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Warranty & Protection</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Comprehensive warranty and protection plans for your peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{feature.title}</h2>
              </div>
              <p className="text-casa-navy/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarrantyProtection;