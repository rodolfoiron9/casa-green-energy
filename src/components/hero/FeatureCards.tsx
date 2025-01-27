import React from 'react';
import { motion } from 'framer-motion';
import { Package, Headphones, Truck } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Package,
      title: "Quality Materials",
      description: "Premium building supplies"
    },
    {
      icon: Headphones,
      title: "Expert Advice",
      description: "Professional guidance"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable shipping"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6
                     border border-white/20 hover:bg-white/20
                     transition-all duration-300"
        >
          <feature.icon className="w-12 h-12 text-casa-gold mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-white/70">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCards;